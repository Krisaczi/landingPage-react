import styles from "./About.module.scss";

import Person from "../Person/Person";
import team from "../../Data/Team1";

const About = ({ team }) => {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <h2 className={styles.aboutTitle}>Nasi specjaliści</h2>
      <div class="about-content">
        {team.map((member) => {
          return (
            <>
              <Person
                key={member.id}
                image={member.image}
                name={member.name}
                department={member.department}
                description={member.description}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default About;
