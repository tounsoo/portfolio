import styles from "./SkillsStrip.module.css";

const skillGroups = [
  {
    category: "Systems Design",
    items: ["Token Architecture", "Component API Design", "Semantic Versioning", "Audit Methodology"],
  },
  {
    category: "Tooling & Code",
    items: ["React", "TypeScript", "CSS Custom Properties", "Storybook", "Style Dictionary"],
  },
  {
    category: "Process & Governance",
    items: ["Figma Variables", "Contribution Models", "RFC Triage", "Design–Dev Handoff", "Accessibility"],
  },
];

export default function SkillsStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Capabilities</p>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.group}>
              <p className={styles.category}>{group.category}</p>
              <ul className={styles.list}>
                {group.items.map((skill) => (
                  <li key={skill} className={styles.item}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
