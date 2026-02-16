import Image from "next/image";
import cl from "./CourtSection.module.scss";

export default function CourtSection() {
  return (
    <section className={cl.CourtSection} id="court_section">
      <Image
        src={"/images/vinnete.png"}
        alt="Background"
        fill
        className={cl.Vinnete}
      />
      <div className={cl.TextContainer}>
        <h2 className={cl.CourtTitle}>
          Играй как профи на лучших кортах <span>Владивостока</span>
        </h2>
        <p className={cl.CourtDescription}>
          Здесь не просто играют — здесь заряжаются. Чистая динамика,
          максимальный контроль и комфорт — современный падел в своей лучшей
          форме. Место, куда приходят за эмоциями и возвращаются за игрой. Играй
          так, как чувствуешь вместе с Padel Pro Club
        </p>
      </div>
      <div className={cl.CardsContainer}>
        <div className={cl.CourtCard}>
          <Image
            src={"/images/court-1.png"}
            alt="Usp1"
            loading="lazy"
            decoding="async"
            fill
            objectFit="cover"
            className={cl.CourtImage}
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
          <div className={cl.CourtInfo}>
            <h3 className={cl.CourtTitle}>Корт Chingotto</h3>
            <p className={cl.CourtDesc}>
              Корт для техничной и умной игры. Контроль, точность и тактические
              решения в каждом розыгрыше.
            </p>
          </div>
        </div>
        <div className={cl.CourtCard}>
          <Image
            src={"/images/court-2.png"}
            alt="Usp1"
            loading="lazy"
            decoding="async"
            fill
            objectFit="cover"
            className={cl.CourtImage}
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
          <div className={cl.CourtInfo}>
            <h3 className={cl.CourtTitle}>Корт Navarro</h3>
            <p className={cl.CourtDesc}>
              Идеальный корт для уверенной, сбалансированной игры. Подойдёт для
              тренировок, матчей и стабильного темпа.
            </p>
          </div>
        </div>
        <div className={cl.CourtCard}>
          <Image
            src={"/images/court-3.png"}
            alt="Usp1"
            loading="lazy"
            decoding="async"
            fill
            objectFit="cover"
            className={cl.CourtImage}
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
          <div className={cl.CourtInfo}>
            <h3 className={cl.CourtTitle}>Корт Galan</h3>
            <p className={cl.CourtDesc}>
              Корт для агрессивного падела и быстрых розыгрышей. Максимум
              динамики и драйва для тех, кто любит давить и атаковать.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
