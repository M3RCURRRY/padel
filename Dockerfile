# --- СТАДИЯ СБОРКИ (BUILD STAGE) ---
FROM node:20.20.0-alpine as builder

# Устанавливаем рабочую директорию для сборки
WORKDIR /usr/app

# Копируем package.json и package-lock.json (или yarn.lock)
# Это позволяет Docker кэшировать установку зависимостей
COPY ./package*.json ./

# Устанавливаем все зависимости, включая devDependencies, необходимые для сборки
RUN npm install

# Копируем весь исходный код приложения
COPY . .

# Билдим Next.js приложение для продакшена
# Эта команда создаст оптимизированную продакшн-сборку в папке .next
RUN npm run build

# --- СТАДИЯ ЗАПУСКА (RUNNER STAGE) ---
# Используем чистый, легкий образ Node.js для продакшен-среды
FROM node:20.20.0-alpine

# Устанавливаем рабочую директорию для запуска
WORKDIR /usr/app

# Устанавливаем PM2 глобально в этом чистом образе
RUN npm install --global pm2

# Копируем только необходимые артефакты из стадии сборки
# - Собранное Next.js приложение
# - node_modules (только production-зависимости, так как devDependencies не нужны)
# - package.json (необходим для выполнения 'npm run start')
# - public (статические файлы)
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json
COPY --from=builder /usr/app/public ./public

# Устанавливаем переменную окружения для продакшн-режима Next.js
ENV NODE_ENV=production

# Порт, на котором будет слушать приложение Next.js
EXPOSE 3000

# Изменяем владельца файлов на не-привилегированного пользователя 'node'
# Это хорошая практика безопасности
RUN chown -R node:node /usr/app

# Переключаемся на не-привилегированного пользователя для запуска приложения
USER node

# Запускаем приложение Next.js в продакшн-режиме с помощью PM2
# 'npm run start' - это стандартный способ запуска Next.js в продакшене
CMD [ "pm2-runtime", "start", "npm", "--", "run", "start" ]
