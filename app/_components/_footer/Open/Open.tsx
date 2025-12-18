import styles from "./Open.module.css";

type props = {
  children: React.ReactNode;
};

export default function Open({ children }: props) {
  return (
    <div className={styles.text}>
      <p className={styles.title}>OPEN</p>
      {children}
    </div>
  );
}
