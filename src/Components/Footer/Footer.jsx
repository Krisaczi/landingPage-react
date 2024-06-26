import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyName}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
