import styles from "./OfferBox.module.scss";

const OfferBox = ({ isNew, offerName }) => {
  return (
    <div className={`${styles.offerBox} ${isNew ? styles.redDott : ""}`}>
      <p className={styles.offerName}>{offerName}</p>
      {isNew ? <p className={styles.newOffer}>(nowość)</p> : ""}
    </div>
  );
};

export default OfferBox;
