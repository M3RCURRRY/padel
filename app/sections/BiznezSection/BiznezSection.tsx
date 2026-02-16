import Image from "next/image";
import cl from "./BiznezSection.module.scss";
import Link from "next/link";
import TickerLine from "@/app/components/TickerLine/TickerLine";
import Video from "@/app/components/Video/Video";

export default function BiznezSection() {
  return (
    <section className={cl.BiznezSection} id="biznez_section">
      <Image
        src={"/images/vinnete.png"}
        alt="Background"
        fill
        className={cl.Vinnete}
      />
      <Image
        src={"/images/balls-cover.png"}
        alt="Background"
        fill
        className={cl.Balls}
      />
      <h2>
        Padel <span>для бизнеса</span>
      </h2>
      <p className={cl.BiznezDesc}>
        Ищете нестандартный формат для команды или клиентов?
        <br /> Padel Business — это турниры, тимбилдинги и корпоративные
        вечеринки “под ключ”.
        <br /> Заполните форму, чтобы мы связались с вами и помогли организовать
        мероприятие.
      </p>
      <Video />
      <Link
        href="https://t.me/padelproclubadmin"
        target="_blank"
        className={cl.BiznezLink}
      >
        Узнать в Telegram
      </Link>
      <TickerLine />
    </section>
  );
}
