"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ParallaxGallery.module.css";

const images = [
  { src: "/para1.webp", speed: 0.1, className: "img1" },
  { src: "/para2.webp", speed: 0.15, className: "img2" },
  { src: "/para3.webp", speed: 0.12, className: "img3" },
  { src: "/para4.webp", speed: 0.18, className: "img4" },
];

export default function ParallaxGallery() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!innerRef.current) return;

      const innerTop =
        innerRef.current.getBoundingClientRect().top + window.scrollY;

      const scrollOffset = window.scrollY - innerTop;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const speed = images[index].speed;
        el.style.transform = `translateY(${scrollOffset * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={innerRef} className={styles.inner}>
        {images.map((img, index) => (
          <div
            key={img.src}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`${styles.item} ${styles[img.className]}`}
          >
            <Image
              src={img.src}
              alt=""
              width={600}
              height={800}
              className={styles.image}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
