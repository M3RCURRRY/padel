"use client";

import Link from "next/link";
import cl from "./TickerLine.module.scss";
import Image from "next/image";

export default function TickerLine() {
  return (
    <div className={cl.TickerLine}>
      <LineBlock />
      <LineBlock />
      <LineBlock />
      <LineBlock />
      <LineBlock />
    </div>
  );
}

function LineBlock() {
  return (
    <div className={cl.LineBlock}>
      <Link href="https://vodnikboats.ru/" target="_blank">
        <Image
          className={cl.Partner1}
          src={"/logos/b-logo-1.png"}
          alt="Водник"
          height={80}
          width={250}
        />
      </Link>
      <Link href="https://sunrise-auto.ru/" target="_blank">
        <Image
          className={cl.Partner2}
          src={"/logos/b-logo-2.png"}
          alt="Sunrise Auto"
          height={80}
          width={250}
        />
      </Link>
      <Link href="https://r4dom.ru/" target="_blank">
        <Image
          className={cl.Partner3}
          src={"/logos/b-logo-3.png"}
          alt="R4"
          height={80}
          width={362}
        />
      </Link>
      <Link href="https://www.instagram.com/lockedin.padel/" target="_blank">
        <Image
          className={cl.Partner4}
          src={"/logos/b-logo-4.png"}
          alt="Locked IN"
          height={80}
          width={96}
        />
      </Link>
    </div>
  );
}
