import Button from "@/components/ui/Button";
import styles from "./AboutTeaser.module.css";

export default function AboutTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>About</p>
        <p className={styles.text}>
          I started as a product designer, but kept finding myself more interested in
          the substrate than the features — the token system, the component API,
          the documentation that lets a team of 30 designers move as one.
          Five years later, that&apos;s my whole job.
        </p>
        <p className={styles.text}>
          The best design systems are 30% design, 30% engineering, and 40%
          organizational change management. I care about all three.
        </p>
        <Button href="/about" variant="ghost">
          More about me →
        </Button>
      </div>
    </section>
  );
}
