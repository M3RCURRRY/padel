import EmblaCarousel from "@/app/components/Carousel/EmblaCarousel";
import cl from "./CarouselSection.module.scss";

const SLIDES = [
  {
    image: "slide1.png",
    position: "20%",
  },
  {
    image: "slide2.png",
    position: "center",
  },
  {
    image: "slide3.png",
    position: "center",
  },
  {
    image: "slide4.png",
    position: "center",
  },
];

export default function CarouselSection() {
  return (
    <section className={cl.CarouselSection}>
      <div className={cl.CarouselTopbar}>
        <h4>Наша галерея</h4>
      </div>
      <div className={cl.CarouselContainer}>
        <EmblaCarousel slides={SLIDES} options={{ align: "start" }} />
      </div>
    </section>
  );
}
