import styles from "./Header.module.css";
import { Menu } from "../Menu";

export function Header() {
  return (
    <div className={styles.backgroundHeader}>
      <header className={styles.headerFlex}>
        <p className={styles.headerTitle}>uma seleção de produtos</p>
        <p className={styles.headerFocus}>especial para você</p>
        <p className={styles.header_p}>
          Todos os produtos desta lista foram selecionado a partir da sua
          navegação. Aproveite!
        </p>
        <div className={styles.menuButton}>
          <Menu name="Conheça a Linx" />
          <Menu name="Ajude o algorítimo" />
          <Menu name="Seus produtos" />
          <Menu name="Compartilhe" />
        </div>
      </header>
    </div>
  );
}

export default Header;
