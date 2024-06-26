import styles from "./Person.module.scss";

const Person = (props) => {
  const { image, name, department, description } = props;
  return (
    <div className={styles.person}>
      <img className={styles.picture} src={image} alt="" />
      <div className={styles.personDetails}>
        <h3 className={styles.personName}>
          {name} {department}
        </h3>
        <p className={styles.personDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Person;
