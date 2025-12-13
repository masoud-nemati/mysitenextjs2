// src/app/_components/skills/SkillCard.tsx
import Image from "next/image";
import styles from "./skills.module.css";

type SkillCardProps = {
  name: string;
  level: number;
  logo: string;
};

export default function SkillCard({ name, level, logo }: SkillCardProps) {
  return (
    <div className={styles.skillCard}>
      <Image
        src={logo}
        alt={`${name} logo`}
        width={50}
        height={50}
        className={styles.skillLogo}
      />

      <span className={styles.skillName}>
        {name}
      </span>

      <meter
        className={styles.meter}
        value={level}
        min={0}
        max={100}
      />

      <span className={styles.skillLevel}>{level}%</span>
    </div>
  );
}
