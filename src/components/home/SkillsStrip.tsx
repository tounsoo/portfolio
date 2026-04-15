import styles from "./SkillsStrip.module.css";

const skills = [
  "Token Architecture",
  "Figma Variables",
  "Component API Design",
  "Documentation",
  "Governance Models",
  "React",
  "TypeScript",
  "CSS Custom Properties",
  "Storybook",
  "Style Dictionary",
  "Accessibility",
  "Design–Dev Handoff",
  "Semantic Versioning",
  "Contribution Models",
  "Audit Methodology",
];

export default function SkillsStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Skills</p>
        <div className={styles.scrollArea}>
          <ul className={styles.list}>
            {skills.map((skill) => (
              <li key={skill} className={styles.item}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
