import LogoBig from "../../_commons/LogoBig/LogoBig";
import Open from "../Open/Open";
import Sns from "../Sns/Sns";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Open>
        <p style={{ marginBlockStart: "0.5rem" }}>AM11:00～PM7:00</p>
        <div style={{ marginBlockStart: "0.5rem" }} className={styles.night}>
          <img src="/night.png" alt="アイコン" className={styles.img} />
          <p>NIGHT CAFE only on WED & FRI</p>
        </div>
        <p>PM8:00〜AM0:00</p>
      </Open>
      <LogoBig />
      <Sns />
    </footer>
  );
}
