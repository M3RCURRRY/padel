"use client";

import Link from "next/link";
import cl from "./BurgerMenu.module.scss";
import { ReactPortal, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import GlassLink from "../Glasses/GlassLink";
import { InstIcon, TgIcon } from "@/public/icons";

const PORTAL_SELECTOR = "portal-root";

export default function BurgerMenu() {
  const [state, setState] = useState<boolean>(false);
  const portalRef = useRef<HTMLElement | null>(null);

  const [portal, setPortal] = useState<ReactPortal | null>(null);

  const toggleHandler = () => {
    const newState = !state;
    if (newState) {
      const newPortal = createPortal(
        <BurgerDrawer closeHandler={closeHandler} />,
        portalRef.current as HTMLElement,
      );
      setPortal(newPortal);
    } else {
      setPortal(null);
    }

    setState(newState);
  };

  const closeHandler = () => {
    setPortal(null);
    setState(false);
  };

  useEffect(() => {
    portalRef.current = document.getElementById(PORTAL_SELECTOR);
  }, [PORTAL_SELECTOR]);

  return (
    <>
      <div
        className={clsx(cl.BurgerMenu, state && cl.Active)}
        onClick={toggleHandler}
      >
        <span className={cl.BurgerLine}></span>
        <span className={cl.BurgerLine}></span>
        <span className={cl.BurgerLine}></span>
      </div>
      {portal}
    </>
  );
}

interface IDrawerProps {
  closeHandler: () => void;
}

function BurgerDrawer({ closeHandler }: Readonly<IDrawerProps>) {
  return (
    <div className={cl.BurgerDrawer}>
      <ul className={cl.BurgerNavigation}>
        <li>
          <Link onClick={closeHandler} href={"#price_section"}>
            Прайс лист
          </Link>
        </li>
        <span className={cl.BurgerNavDot}></span>
        <li>
          <Link onClick={closeHandler} href={"#court_section"}>
            Корты
          </Link>
        </li>
        <span className={cl.BurgerNavDot}></span>
        <li>
          <Link onClick={closeHandler} href={"#newbie_section"}>
            Новичкам
          </Link>
        </li>
        <span className={cl.BurgerNavDot}></span>
        <li>
          <Link onClick={closeHandler} href={"#contact_section"}>
            Контакты
          </Link>
        </li>
        <span className={cl.BurgerNavDot}></span>
        <li>
          <Link onClick={closeHandler} href={"#biznez_section"}>
            Для бизнеса
          </Link>
        </li>
      </ul>
      <div className={cl.Socials}>
        <GlassLink
          contentType="image"
          href="https://t.me/padelvladivostok"
          isBlank
          className={cl.SocialLink}
          contentImage={TgIcon}
        />
        <GlassLink
          contentType="image"
          href="https://www.instagram.com/padelvladivostok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          isBlank
          className={cl.SocialLink}
          contentImage={InstIcon}
        />
      </div>
      <Link
        href={"https://app.lundapadel.ru/auth"}
        target="_blank"
        className={cl.OrderButton}
      >
        Забронировать
      </Link>
    </div>
  );
}
