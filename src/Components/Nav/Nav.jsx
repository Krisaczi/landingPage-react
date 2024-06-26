import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>moja firma</div>

        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <a className={styles.navLink} href="#about">
              o nas
            </a>
          </li>
          <li className={styles.navListItem}>
            <a className={styles.navLink} href="#offer">
              oferta
            </a>
          </li>
          <li className={styles.navListItem}>
            <span className={styles.notAllowed}>kontakt</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
