"use client";

import { useState } from "react";
import cl from "./Tabs.module.scss";
import clsx from "clsx";

const TABS_DATA = {
  start: {
    label: "Старт",
    title: "Первый выход на корт",
    desc: "Падел — это когда ты ловишь кайф уже с первого удара. Можно попробовать самому или прийти на индивидуальную тренировку с тренером, если хочется быстрее вкатиться и понять базу.",
  },
  how_to: {
    label: "Как играть?",
    title: "Легко начать, невозможно остановиться",
    desc: "Правила простые, движения интуитивные, а темп затягивает с первых минут. А если захочешь прокачаться — тренер поможет подтянуть технику и уверенность без скучных лекций и давления.",
  },
  team: {
    label: "Команда",
    title: "Играй с друзьями",
    desc: "Падел создан для компании: вайб, эмоции и победы. Арендуйте корт для друзей или записывайтесь на турниры — уровень вообще не важен.",
  },
  level: {
    label: "Уровень игры",
    title: "Спорт без пафоса",
    desc: "Здесь не нужно быть профи или выглядеть как спортсмен с обложки. Приходи таким, какой ты есть — в удобной форме, с хорошим настроением и желанием попробовать что-то новое.",
  },
};

type TTabs = "start" | "how_to" | "team" | "level";

export default function Tabs() {
  const [tab, setTab] = useState<TTabs>("start");

  const [data, setData] = useState<{ title: string; desc: string }>(
    TABS_DATA.start,
  );

  const tabHandler = (newTab: TTabs) => {
    if (tab === newTab) return;

    const data = TABS_DATA[newTab];
    setData(data);
    setTab(newTab);
  };

  return (
    <div className={cl.Tabs}>
      <div className={cl.TabsContainer}>
        <div
          className={clsx(cl.Tab, tab === "start" ? cl.Active : "")}
          onClick={() => tabHandler("start")}
        >
          {TABS_DATA.start.label}
        </div>
        <div
          className={clsx(cl.Tab, tab === "how_to" ? cl.Active : "")}
          onClick={() => tabHandler("how_to")}
        >
          {TABS_DATA.how_to.label}
        </div>
        <div
          className={clsx(cl.Tab, tab === "team" ? cl.Active : "")}
          onClick={() => tabHandler("team")}
        >
          {TABS_DATA.team.label}
        </div>
        <div
          className={clsx(cl.Tab, tab === "level" ? cl.Active : "")}
          onClick={() => tabHandler("level")}
        >
          {TABS_DATA.level.label}
        </div>
      </div>
      <div className={cl.TabDataContainer}>
        <p className={cl.Title}>{data.title}</p>
        <p className={cl.Desc}>{data.desc}</p>
      </div>
    </div>
  );
}
