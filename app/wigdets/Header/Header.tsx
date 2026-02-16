import GlassButton from "@/app/components/Glasses/GlassButton";
import GlassContainer from "@/app/components/Glasses/GlassContainer";
import GlassLink from "@/app/components/Glasses/GlassLink";

import { LogoFull, LogoSmall } from "@/public/logos";

import cl from "./Header.module.scss";
import Link from "next/link";
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import clsx from "clsx";
import Image from "next/image";

const HEADER_CLASSES = "flex flex-row justify-between z-1000 fixed";

export default function Header() {
  return (
    <header className={clsx(HEADER_CLASSES, cl.Header)}>
      <GlassLink href="/" contentType="image" contentImage={LogoFull} />
      <GlassContainer className={cl.navbarWrapper}>
        <nav className={cl.HeaderNav}>
          <ul>
            <li>
              <Link href={"#price_section"}>Прайс лист</Link>
            </li>
            <li>
              <Link href={"#court_section"}>Корты</Link>
            </li>
            <li>
              <Link href={"#newbie_section"}>Новичкам</Link>
            </li>
            <li>
              <Link href={"#contact_section"}>Контакты</Link>
            </li>
            <li>
              <Link href={"#biznez_section"}>Для бизнеса</Link>
            </li>
          </ul>
        </nav>
      </GlassContainer>
      <Link
        href={"https://app.lundapadel.ru/auth"}
        target="_blank"
        className={cl.BookingButton}
      >
        <span>Забронировать</span>
        <Image
          src="/images/ball-icon.png"
          height={40}
          width={40}
          alt="Booking"
        />
      </Link>
      <BurgerMenu />
    </header>
  );
}
