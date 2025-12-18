"use client";

import { Parallax } from "react-parallax";
import Image from "next/image";
import styles from "./Firstview.module.css";

export default function Firstview() {
  return (
    <div className={styles.radiusWrap}>
      <Parallax bgImage="/firstview.webp" strength={400}>
        <div className={styles.box}>
          <Image
            src="/logoBigWH.png"
            alt="ロゴ"
            width={600}
            height={100}
            className={styles.logo}
            priority
          />
        </div>
      </Parallax>
    </div>
  );
}
