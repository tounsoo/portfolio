import Link from "next/link";
import styles from "./AboutTeaser.module.css";

const stats = [
  { value: "5 yrs", label: "design systems experience" },
  { value: "3", label: "systems shipped end-to-end" },
  { value: "47+", label: "production components" },
];

export default function AboutTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.text}>
            I started as a product designer, but kept finding myself more
            interested in the substrate than the features — the token system,
            the component API, the documentation that lets a team of 30
            designers move as one.
          </p>
          <p className={styles.text}>
            The best design systems are 30% design, 30% engineering, and 40%
            organizational change management. I care about all three.
          </p>
          <Link href="/about" className={styles.link}>
            More about me →
          </Link>
        </div>
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
