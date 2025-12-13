// src/app/skills/page.tsx
import SkillCard from "@/app/_components/features/skills/skillcard";
import styles from "@/app/_components/features/skills/skills.module.css"

import {
  programmingSkills,
  industrialSkills,
} from "@/data/skills.data";



export default function SkillsPage() {
  return (
    <div className={styles.skillsPage}>
      <h2 className={styles.h2skill}>My Skills</h2>

      <section className={styles.skillsCategory}>
       <h3 className={styles.sectionTitle}>Programming Skills</h3>
        <div className={styles.skillsList}>
          {programmingSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      <section className={styles.skillsCategory}>
     <h3 className={styles.sectionTitle}>Industrial Skills</h3>
        <div className={styles.skillsList}>
          {industrialSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
