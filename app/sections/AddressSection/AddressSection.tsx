import Image from "next/image";
import cl from "./AddressSection.module.scss";
import Link from "next/link";
import clsx from "clsx";

export default function AddressSection() {
  return (
    <section className={cl.AddressSection} id="contact_section">
      <div className={cl.ShopBanner}>
        <div className={cl.ShopImageWrapper}>
          <Image
            className={cl.ShopImage}
            src={"/images/shop-image.png"}
            alt="Padel Shop"
            width={314}
            height={588}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={cl.ShopTitle}>
          <span>Padel</span> Shop
        </div>
        <Link
          href={"https://t.me/padelvladivostokchat/2456"}
          target="_blank"
          className={cl.ShopLink}
        >
          Посетить магазин
        </Link>
      </div>
      <div className={cl.ShopMap}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab2ae43d5d59e84fd14d4d90f583ae33a534d92b86303d3df8b707938056a59ac&amp;source=constructor"
          width="1000"
          height="700"
          frameBorder={0}
          className={cl.FrameDesktop}
        ></iframe>
        <div className={cl.MapContent}>
          <h4 className={cl.MapTitle}>Мы всегда на связи</h4>
          <div className={cl.InfoBlock}>
            <p className={cl.InfoTitle}>Адрес</p>
            <p className={cl.InfoText}>г. Владивосток</p>
            <p className={cl.InfoText}>ул. 3-я Поселковая 20, ICE ТИГР</p>
          </div>
          <div className={cl.InfoBlock}>
            <p className={cl.InfoTitle}>Номер для связи</p>
            <p className={cl.InfoText}>+7(914) 712 13 23</p>
          </div>
          <div className={cl.InfoBlock}>
            <p className={cl.InfoTitle}>Время работы</p>
            <p className={cl.InfoText}>Пн-пт: 08:00-18:00</p>
            <p className={cl.InfoText}>Сб-вс: 08:00-18:00 </p>
          </div>

          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab2ae43d5d59e84fd14d4d90f583ae33a534d92b86303d3df8b707938056a59ac&amp;source=constructor"
            width="680"
            height="480"
            frameBorder={0}
            className={cl.FrameMobile}
          ></iframe>
          <div className={cl.Socials}>
            <div className={cl.SocialWrapper}>
              <Image
                src={"/images/qr-tg.png"}
                alt="Telegram"
                width={350}
                height={350}
                loading="lazy"
                decoding="async"
              />
              <Link
                href={"https://t.me/padelvladivostok"}
                target="_blank"
                className={clsx(cl.SocialBtn, cl.TgBtn)}
              >
                Перейти в телеграм
              </Link>
            </div>
            <div className={cl.SocialWrapper}>
              <Image
                src={"/images/qr-inst.png"}
                alt="Instagram"
                width={350}
                height={350}
                loading="lazy"
                decoding="async"
              />
              <Link
                href={
                  "https://www.instagram.com/padelvladivostok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                target="_blank"
                className={clsx(cl.SocialBtn, cl.InstBtn)}
              >
                Перейти в инстаграм
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
