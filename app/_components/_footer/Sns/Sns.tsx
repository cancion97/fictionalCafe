import styles from "./Sns.module.css";
import Image from "next/image";

export default function Sns() {
  return (
    <div className={styles.box}>
      <Image
        className={styles.img}
        src="/snsx.png"
        alt="X"
        width={65}
        height={65}
      />
      <Image
        className={styles.img}
        src="/snsi.png"
        alt="X"
        width={65}
        height={65}
      />
      <Image
        className={styles.img}
        src="/snsl.png"
        alt="X"
        width={65}
        height={65}
      />
    </div>
  );
}
