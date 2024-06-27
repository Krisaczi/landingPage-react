import styles from "./About.module.scss";
import Person from "../Person/Person";
import team from "../../data/team";

const About = () => {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <h2 className={styles.aboutTitle}>Nasi specjaliści</h2>
      <div class="about-content">
        {team.map((member) => {
          return (
            <Person
              key={member.id}
              image={member.image}
              name={member.name}
              department={member.department}
              description={member.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
