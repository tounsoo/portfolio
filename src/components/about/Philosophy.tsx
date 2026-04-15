import styles from "./Philosophy.module.css";

const principles = [
  {
    title: "Tokens are contracts",
    body: "Before a single component is built, design and engineering must agree on what 'primary text' means, what 'interactive background' means, and what 'danger' means. Token naming is not a CSS concern — it's a shared vocabulary. A token system that designers don't understand is just a variable file. A token system that engineers don't contribute to is just Figma styles.",
  },
  {
    title: "Governance is a product",
    body: "A design system without a contribution model is just a library. Libraries go stale. Products evolve. The governance model — how things get proposed, reviewed, merged, and deprecated — determines whether the system stays alive after V1. I spend as much time designing the process as I do designing the components.",
  },
  {
    title: "Consistency enables creativity",
    body: "A common objection to design systems is that they constrain creativity. The opposite is true. When a team doesn't have to re-solve 'what color is this button' or 'how wide is this modal', they have more attention for the hard problems — the ones that actually require creative judgment. Constraints that are understood create freedom.",
  },
  {
    title: "Documentation is the product",
    body: "The component is what gets shipped. The documentation is what gets used. A well-built component with no guidance on when to use it, when not to use it, and what accessibility considerations apply is still a failure. I treat documentation as a first-class deliverable, not an afterthought. The usage guide gets written before the PR is opened.",
  },
];

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Philosophy</p>
      <div className={styles.grid}>
        {principles.map((p) => (
          <div key={p.title} className={styles.principle}>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.body}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
