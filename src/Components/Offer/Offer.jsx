import OfferBox from "../OfferBox/OfferBox";
import styles from "./Offer.module.scss";
import offer from "../../data/offer";

const Offer = () => {
  return (
    <section className={styles.offerContainer}>
      <div id="offer" className={styles.offerWrapper}>
        <h2 className={styles.offerTitle}>Czym zajmuje się nasza firma?</h2>
        <div className={styles.offerBoxesWrapper}>
          {offer.map((item) => {
            return <OfferBox isNew={item.isNew} offerName={item.offerName} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
