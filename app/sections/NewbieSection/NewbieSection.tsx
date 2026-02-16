import Tabs from "@/app/components/Tabs/Tabs";
import cl from "./NewbieSection.module.scss";
import Image from "next/image";

export default function NewbieSection() {
  return (
    <section className={cl.NewbieSection} id="newbie_section">
      <h3 className={cl.NewbieTitle}>Новичок? Твое преимущество</h3>
      <div className={cl.NewbieContainer}>
        <div className={cl.NewbieTabs}>
          <Tabs />
        </div>
        <div className={cl.NewbieImages}>
          <Image
            src={"/images/collague.png"}
            alt="Collague"
            height={493}
            width={955}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
