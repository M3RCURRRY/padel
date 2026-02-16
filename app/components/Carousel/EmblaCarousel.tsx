"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import cl from "./Carousel.module.scss";
import Image from "next/image";

type PropType = {
  slides: Array<{ image: string; position: string }>;
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, _] = useEmblaCarousel(options);

  return (
    <div className={cl.embla}>
      <div className={cl.embla__viewport} ref={emblaRef}>
        <div className={cl.embla__container}>
          {slides.map((item, index) => (
            <div className={cl.embla__slide} key={index}>
              <div className={cl.embla__slide__number}>
                <Image
                  alt="Slide image"
                  className={cl.EmblaImage}
                  src={`/images/slider/${item.image}`}
                  loading="lazy"
                  decoding="async"
                  fill
                  objectFit="cover"
                  style={{
                    objectFit: "cover",
                    objectPosition: `center ${item.position}`,
                  }}
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
