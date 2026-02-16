import Image from "next/image";
import cl from "./MarcosSection.module.scss";
import GlassContainer from "@/app/components/Glasses/GlassContainer";

export default function MarcosSection() {
  return (
    <section className={cl.MarcosSection}>
      <div className={cl.MarcosContainer}>
        <Image
          src={"/icons/sign.png"}
          alt="Sign"
          width={216}
          height={138}
          loading="lazy"
          decoding="async"
          className={cl.MarcosSign}
        />
        <div className={cl.HexWrapper}>
          <Image
            src={"/images/hex-mask.png"}
            alt="Hex mask"
            fill
            style={{
              objectFit: "cover",
              position: "absolute",
              objectPosition: "center",
            }}
          />
        </div>
        <div className={cl.MarcosImage}>
          <Image
            alt="Marcos Paillole"
            src={"/images/marcos1.png"}
            height={788}
            width={756}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={cl.MarcosContent}>
          <div className={cl.MarcosLabels}>
            <Image
              src={"/icons/argentina.png"}
              alt="Argentina"
              height={40}
              width={64}
              className={cl.Argentina}
            />
            <GlassContainer className={cl.Label}>
              <span>Тренер</span>
            </GlassContainer>
            <GlassContainer className={cl.Label}>
              <span>Профи</span>
            </GlassContainer>
            <GlassContainer className={cl.Label}>
              <span>Обучение</span>
            </GlassContainer>
          </div>
          <div className={cl.MarcosTitle}>
            <p className={cl.Title1}>MARCOS</p>
            <p className={cl.Title2}>PAILLOLE</p>
          </div>
          <div className={cl.MarcosDesc}>
            Маркос Пайолле — бренд-амбассадор Padel Pro Club и человек, который
            знает падел изнутри.
            <br />
            38 лет опыта, глубокое понимание игры и умение объяснять просто и
            понятно. Тренировки и мастер-классы, которые реально прокачивают
            твой уровень.
          </div>
        </div>
      </div>
    </section>
  );
}
