"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ParallaxGallery.module.css";

const images = [
  { src: "/para1.webp", speed: 0.15, className: "img1" },
  { src: "/para2.webp", speed: 0.25, className: "img2" },
  { src: "/para3.webp", speed: 0.2, className: "img3" },
  { src: "/para4.webp", speed: 0.3, className: "img4" },
];

export default function ParallaxGallery() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translateY(${scrollY * images[i].speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      {images.map((img, i) => (
        <div
          key={img.src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`${styles.item} ${styles[img.className]}`}
        >
          <Image
            src={img.src}
            alt=""
            width={520}
            height={720}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
