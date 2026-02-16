import Image from "next/image";
import cl from "./UspSection.module.scss";
import GlassContainer from "@/app/components/Glasses/GlassContainer";
import Link from "next/link";

export default function UspSection() {
  return (
    <section className={cl.UspSection}>
      <h2>Ну что, поиграем?</h2>
      <div className={cl.UspContainer}>
        <div className={cl.UspCard}>
          <Image
            src={"/images/usp-1.png"}
            alt="Usp1"
            loading="lazy"
            decoding="async"
            fill
            objectFit="cover"
            className={cl.UspImage}
          />
          <div className={cl.UspCardContent}>
            <div className={cl.TopContent}>
              <GlassContainer className={cl.TopLabel}>
                <span>Pro-корты</span>
              </GlassContainer>
              <GlassContainer className={cl.TopLabel}>
                <span>Уровень</span>
              </GlassContainer>
            </div>
            <div className={cl.BottomContent}>
              <h2>
                <span>Больше</span>, чем просто падел
              </h2>
              <p>
                Почувствуй себя профи. Аренда корта и топовые ракетки сделают
                тебя акулой падела
              </p>
              <Link
                href={"https://app.lundapadel.ru/auth"}
                target="_blank"
                className={cl.ContentLink}
              >
                Забронировать
              </Link>
            </div>
          </div>
        </div>
        <div className={cl.UspCard}>
          <Image
            src={"/images/usp-2.png"}
            alt="Usp1"
            loading="lazy"
            decoding="async"
            fill
            objectFit="cover"
            className={cl.UspImage}
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
          <div className={cl.UspCardContent}>
            <div className={cl.TopContent}>
              <GlassContainer className={cl.TopLabel}>
                <span>Живое общение</span>
              </GlassContainer>
              <GlassContainer className={cl.TopLabel}>
                <span>Драйв</span>
              </GlassContainer>
            </div>
            <div className={cl.BottomContent}>
              <h2>
                Играй на <span>эмоциях</span>
              </h2>
              <p>
                Турниры, ивенты и матчи с вайбом драйва
                <br />
                Готов попробовать?
              </p>
              <Link
                href={"https://app.lundapadel.ru/auth"}
                target="_blank"
                className={cl.ContentLink}
              >
                Забронировать
              </Link>
            </div>
          </div>
        </div>
        <div className={cl.UspCard}>
          <Image
            src={"/images/usp-3.png"}
            alt="Usp1"
            loading="lazy"
            decoding="async"
            fill
            objectFit="cover"
            className={cl.UspImage}
          />
          <div className={cl.UspCardContent}>
            <div className={cl.TopContent}>
              <GlassContainer className={cl.TopLabel}>
                <span>Легко начать</span>
              </GlassContainer>
              <GlassContainer className={cl.TopLabel}>
                <span>Новичкам</span>
              </GlassContainer>
            </div>
            <div className={cl.BottomContent}>
              <h2>
                Прокачай <span>уровень</span>
              </h2>
              <p>
                Индивидуально или в группе.
                <br />
                Подойдет для любого уровня игры
              </p>
              <Link
                href={"https://app.lundapadel.ru/auth"}
                target="_blank"
                className={cl.ContentLink}
              >
                Забронировать
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
