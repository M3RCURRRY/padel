import cl from "./PriceSection.module.scss";

export default function PriceSection() {
  return (
    <section className={cl.PriceSection} id="price_section">
      <div className={cl.PriceLine}>
        <div className={cl.PriceTitle}>
          <h3 className={cl.Primary}>Аренда корта</h3>
          <span className={cl.Secondary}>(за 1 час)</span>
        </div>
        <div className={cl.PricePositions}>
          <div className={cl.PriceTime}>
            <p className={cl.Time}>07:00-10:00</p>
            <p className={cl.Price}>3500 ₽</p>
          </div>
          <div className={cl.PriceTime}>
            <p className={cl.Time}>10:00-15:00</p>
            <p className={cl.Price}>4000 ₽</p>
          </div>
          <div className={cl.PriceTime}>
            <p className={cl.Time}>15:00-00:00</p>
            <p className={cl.Price}>5000 ₽</p>
          </div>
          <div className={cl.PriceTime}>
            <p className={cl.Time}>{"Выходные (07:00-00:00)"}</p>
            <p className={cl.Price}>5000 ₽</p>
          </div>
        </div>
      </div>
      <div className={cl.PriceLine}>
        <div className={cl.PriceTitle}>
          <h3 className={cl.Primary}>Занятие с тренером</h3>
        </div>
        <div className={cl.PricePositions} style={{ marginRight: 0}}>
          <div className={cl.PriceTime}>
            <p className={cl.Time}>{"1 час"}</p>
            <p className={cl.Price}>2500 ₽</p>
          </div>
          <div className={cl.PriceTime}>
            <p className={cl.Time}>{"Первая пробная тренировка в мини группе"}</p>
            <p className={cl.Price}>1750 ₽</p>
          </div>
          <div className={cl.PriceTime}>
            <p className={cl.Time}>{"Первая пробная тренировка"}</p>
            <p className={cl.Price}>1750 ₽</p>
          </div>
          <div className={cl.PriceInfo} style={{ whiteSpace: "pre-line", minWidth: "20%" }}>
            Тренировка под руководством опытного тренера
          </div>
        </div>
      </div>
      <div className={cl.PriceLine}>
        <div className={cl.PriceTitle}>
          <h3 className={cl.Primary}>Получить драйв</h3>
        </div>
        <div className={cl.PricePositions}>
          <p className={cl.PriceFree}>
            <span>Бесплатно</span> 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
