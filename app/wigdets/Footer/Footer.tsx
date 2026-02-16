import Link from "next/link";
import cl from "./Footer.module.scss";
import Image from "next/image";
import clsx from "clsx";
import GlassContainer from "@/app/components/Glasses/GlassContainer";

export default function Footer() {
  return (
    <footer className={cl.Footer}>
      <div className={cl.FooterTopLine}>
        <nav className={cl.Nav}>
          <Link href={"#price_section"} className={cl.NavLink}>
            Прайс лист
          </Link>
          <div className={cl.NavDot}></div>
          <Link href={"#court_section"} className={cl.NavLink}>
            Корты
          </Link>
          <div className={cl.NavDot}></div>
          <Link href={"#newbie_section"} className={cl.NavLink}>
            Новичкам
          </Link>
          <div className={cl.NavDot}></div>
          <Link href={"#contact_section"} className={cl.NavLink}>
            Контакты
          </Link>
          <div className={cl.NavDot}></div>
          <Link href={"#biznez_section"} className={cl.NavLink}>
            Для бизнеса
          </Link>
        </nav>
      </div>
      <div className={cl.FooterBannerLine}>
        <div className={cl.Banner1Wrapper}>
          <Image
            src={"/images/footer-mask1.png"}
            alt="Mask"
            height={446}
            width={791}
            loading="lazy"
            decoding="async"
            className={cl.BannerMask1}
          />
          <div className={cl.BannerLeft}>
            <div className={cl.LeftContent}>
              <div className={cl.Title}>Адрес</div>
              <div className={cl.Desc}>г. Владивосток</div>
              <div className={cl.Desc}>ул. 3-я Поселковая 20, ICE ТИГР</div>
            </div>
            <div className={cl.LeftContent}>
              <div className={cl.Title}>Номер для связи</div>
              <div className={cl.Desc}>+7(914) 712 13 23</div>
            </div>
            <div className={cl.LeftContent}>
              <div className={cl.Title}>Время работы</div>
              <div className={cl.Desc}>Пн-пт: 08:00-18:00</div>
              <div className={cl.Desc}>Сб-вс: 08:00-18:00</div>
            </div>
          </div>
          <div className={cl.BannerRight}>
            <div className={cl.BtnsWrapper}>
              <Link
                href={"https://t.me/padelvladivostok"}
                target="_blank"
                className={clsx(cl.Btn, cl.TgBtn)}
              >
                <Image
                  src={"/icons/tg_icon.png"}
                  alt="Telegram"
                  width={14}
                  height={14}
                  loading="lazy"
                  decoding="async"
                />
                Telegram
              </Link>
              <Link
                href={
                  "https://www.instagram.com/padelvladivostok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                target="_blank"
                className={clsx(cl.Btn, cl.InstBtn)}
              >
                <Image
                  src={"/icons/inst_icon.png"}
                  alt="Instagram"
                  width={14}
                  height={14}
                  loading="lazy"
                  decoding="async"
                />
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className={cl.Banner2Wrapper}>
          <Image
            src={"/images/footer-mask2.png"}
            alt="Mask"
            fill
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
            decoding="async"
            className={cl.Mask}
          />
          <div className={cl.BannerLeft}>
            <p className={cl.Title}>
              Стань партнером
              <br />
              <span>Padel pro club</span>
            </p>
            <div className={cl.Labels}>
              <div className={cl.Label}>
                <div className={cl.InnerWrapper}>
                  <Image
                    src={"/icons/ball-small.png"}
                    alt="Point"
                    height={14}
                    width={14}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>Делаем шум в индустрии</span>
                </div>
              </div>
              <div className={cl.Label}>
                <div className={cl.InnerWrapper}>
                  <Image
                    src={"/icons/ball-small.png"}
                    alt="Point"
                    height={14}
                    width={14}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>Product-placement и нативная реклама</span>
                </div>
              </div>
              <div className={cl.Label}>
                <div className={cl.InnerWrapper}>
                  <Image
                    src={"/icons/ball-small.png"}
                    alt="Point"
                    height={14}
                    width={14}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span>Развитие спорта в регионе</span>
              </div>
            </div>
          </div>
          <div className={cl.BannerRight}>
            <Link
              href={"https://t.me/padelproclubadmin"}
              target="_blank"
              className={cl.LinkBtn}
            >
              Узнать подробнее
            </Link>
          </div>
        </div>
      </div>
      <div className={cl.FooterBottom}>
        <div className={cl.Left}>
          <Image
            src={"/icons/micro-logo.png"}
            alt="Padel Pro"
            width={17}
            height={17}
            loading="lazy"
            decoding="async"
          />
          <p>PADEL PRO CLUB @ 2025 All rights reserved.</p>
        </div>
        <div className={cl.Right}>
          <Link href={"#"} className={cl.Link}>
            Условия использования
          </Link>
          <Link href={"#"} className={cl.Link}>
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
