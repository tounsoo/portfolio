import styles from "./SkillsGrid.module.css";

const categories = [
  {
    name: "Design Systems",
    skills: [
      "Token Architecture",
      "Component API Design",
      "Figma Variables",
      "Design–Dev Handoff",
      "Storybook",
      "Style Dictionary",
    ],
  },
  {
    name: "Governance & Process",
    skills: [
      "RFC Processes",
      "Contribution Models",
      "Semantic Versioning",
      "Audit Methodology",
      "Roadmapping",
      "Stakeholder Alignment",
    ],
  },
  {
    name: "Code",
    skills: [
      "React",
      "TypeScript",
      "CSS Custom Properties",
      "CSS Modules",
      "HTML / Accessibility",
      "Git",
    ],
  },
  {
    name: "Documentation",
    skills: [
      "MDX / Notion",
      "Usage Guidelines",
      "Decision Logs",
      "Workshop Facilitation",
      "Migration Guides",
      "Deprecation Strategy",
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Skills</p>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.name} className={styles.category}>
            <h3 className={styles.catName}>{cat.name}</h3>
            <ul className={styles.list}>
              {cat.skills.map((skill) => (
                <li key={skill} className={styles.skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
