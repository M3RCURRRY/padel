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
  {
    image: "slide5.png",
    position: "center",
  },
  {
    image: "slide6.png",
    position: "center",
  },
  {
    image: "slide7.png",
    position: "center",
  },
  {
    image: "slide8.png",
    position: "center",
  },
  {
    image: "slide9.png",
    position: "center",
  },
  {
    image: "slide10.png",
    position: "center",
  },
  {
    image: "slide11.png",
    position: "center",
  },
  {
    image: "slide12.png",
    position: "center",
  },
  {
    image: "slide13.png",
    position: "center",
  },
  {
    image: "slide14.png",
    position: "center",
  },
  {
    image: "slide15.png",
    position: "center",
  },
  {
    image: "slide16.png",
    position: "center",
  },
  {
    image: "slide17.png",
    position: "center",
  },
  {
    image: "slide18.png",
    position: "center",
  },
  {
    image: "slide19.png",
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
