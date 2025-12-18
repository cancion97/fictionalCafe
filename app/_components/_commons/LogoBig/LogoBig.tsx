import Image from "next/image";
import React from "react";
import styles from "./LogoBig.module.css";

export default function LogoBig() {
  return (
    <div className={styles.box}>
      <Image
        className={styles.img}
        src="/logoBigBL.png"
        width={500}
        height={500}
        alt="logo"
      />
    </div>
  );
}
