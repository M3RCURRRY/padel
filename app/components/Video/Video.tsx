"use client";

import { useRef, useState } from "react";
import cl from "./Video.module.scss";
import Image from "next/image";
import clsx from "clsx";

export default function Video() {
  const [controls, setControls] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = () => {
    if (controls) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }

    setControls(!controls);
  };

  return (
    <div className={clsx(cl.Video, controls && cl.StatePlaying)}>
      <div
        className={clsx(cl.VideoPlayBtn, controls && cl.Playing)}
        onClick={toggleVideo}
      >
        {controls ? (
          <>
            <span className={cl.PauseLine}></span>
            <span className={cl.PauseLine}></span>
          </>
        ) : (
          <Image
            src={"/icons/iconoir_play-solid.png"}
            height={44}
            width={44}
            alt="Play"
          />
        )}
      </div>
      <video controls={controls} className={cl.VideoEl} ref={videoRef}>
        <source src="/video/blur.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
