import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.landingPageWrapper}>
        <h1 className={styles.landingPageTitle}>
          Nasza firma oferuje najwyższej jakości produkty.
        </h1>
        <p className={styles.landingPageContent}>
          Nie wierz nam na słowo - sprawdź
        </p>
        <a href="#offer" className={styles.landingPageLink}>
          Oferta
        </a>
      </div>
    </main>
  );
};

export default Main;
