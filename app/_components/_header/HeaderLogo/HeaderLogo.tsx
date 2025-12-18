import React from "react";
import styles from "./HeaderLogo.module.css";
import Link from "next/link";

type props = {
  image: string;
  alt: string;
  children: React.ReactNode;
};

export default function HeaderLogo({ image, alt, children }: props) {
  return (
    <div className={styles.box}>
      <Link href="/Home">
        <img className={styles.img} src={image} alt={alt} />
      </Link>
      {children}
    </div>
  );
}
