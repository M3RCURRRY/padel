import Image, { StaticImageData } from "next/image";
import cl from "./Glass.module.scss";
import Link from "next/link";
import clsx from "clsx";

interface IProps {
  contentType: "text" | "image";
  contentText?: string;
  contentImage?: StaticImageData;
  className?: string;
  isBlank?: boolean;
  href: string;
}

export default function GlassLink({
  contentText,
  contentImage,
  contentType,
  className,
  isBlank,
  href,
}: Readonly<IProps>) {
  let finalContent;
  if (contentType === "image") {
    finalContent = (
      <Image src={contentImage!.src} height={53} width={146} alt="Logo"></Image>
    );
  } else {
    finalContent = contentText;
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        style={{ display: "none" }}
      >
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <Link
        href={href}
        target={isBlank ? "_blank" : ""}
        className={clsx(cl.liquidGlass, cl.liquidLink, className)}
      >
        {finalContent}
      </Link>
    </>
  );
}
