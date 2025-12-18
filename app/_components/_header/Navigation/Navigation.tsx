"use client";
import { NavList } from "./NavList";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { useState } from "react";
import Sns from "../../_footer/Sns/Sns";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`${styles.menubtn} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
      >
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
      <div className={`${styles.box} ${isOpen ? styles.openbox : ""}`}>
        {NavList.map((item) => (
          <Link
            className={`${styles.link} ${isOpen ? styles.openlink : ""}`}
            key={item.path}
            href={item.path}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
