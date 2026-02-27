import Image from "next/image";

import cl from "./HeroSection.module.scss";
import GlassContainer from "@/app/components/Glasses/GlassContainer";
import Link from "next/link";
import clsx from "clsx";

export default function HeroSection() {
  return (
    <section className={clsx("w-full relative", cl.HeroSection)}>
      <div className={cl.HeroImageWrapper}>
        <Image
          src={"/images/vinnete.png"}
          alt="Background"
          fill
          className={cl.Vinnete}
        />
      </div>
      <div className={cl.HeroContent}>
        <div className={cl.HeroLabels}>
          <GlassContainer className={cl.HeroLabel}>
            <h4>Pro-корты</h4>
          </GlassContainer>
          <GlassContainer className={cl.HeroLabel}>
            <h4>Вайб</h4>
          </GlassContainer>
          <GlassContainer className={cl.HeroLabel}>
            <h4>Комьюнити</h4>
          </GlassContainer>
        </div>
        <h1>
          <span>ЛЕГКО НАЧАТЬ</span>
          <span className={cl.Colored}>НЕВОЗМОЖНО ОСТАНОВИТЬСЯ</span>
        </h1>
        <h2>
          Padel Pro Club — премиальный спортивный клуб Владивостока с
          профессиональными кортами, тренерами высокого уровня и атмосферой
          современного падела
        </h2>
        <Link
          href="https://t.me/padelproclubadmin"
          target="_blank"
          className={cl.HeroLink}
        >
          Забронировать
        </Link>
      </div>
    </section>
  );
}
