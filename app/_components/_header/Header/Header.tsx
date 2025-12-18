import HeaderLogo from "../HeaderLogo/HeaderLogo";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const img = "/logoBK.png";

  return (
    <header className={styles.header}>
      <HeaderLogo image={img} alt="ロゴ画像">
        <p className={styles.text}>VINTAGE COFFEE</p>
      </HeaderLogo>
      <Navigation />
    </header>
  );
}
