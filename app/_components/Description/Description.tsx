import Image from "next/image";
import React from "react";
import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <h2 className={styles.text}>スペシャリティコーヒー </h2>
        <h2 className={styles.text}>×</h2>
        <h2 className={styles.text}>ビンテージショップ</h2>
      </div>

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
      <div className={styles.box2}>
        <Image
          src="/scrolldown.png"
          alt="スクロールダウン"
          width={600}
          height={100}
          className={styles.scroll}
          priority
        />
      </div>
    </div>
  );
}
