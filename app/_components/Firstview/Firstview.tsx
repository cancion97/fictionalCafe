import Image from "next/image";
import styles from "./Firstview.module.css";

export default function Firstview() {
  return (
    <>
      <div className={styles.box}>
        <Image
          className={styles.img}
          src="/firstview.webp"
          alt="カフェの写真"
          width={900}
          height={900}
        />
        <Image
          className={styles.logo}
          src="/logoBigWH.png"
          alt="ロゴ"
          width={600}
          height={100}
        />
      </div>
    </>
  );
}
