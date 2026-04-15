import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.label}>Design Systems Designer & Developer</p>
        <h1 className={styles.heading}>
          I build the systems that let teams ship consistent, accessible products at scale.
        </h1>
        <p className={styles.sub}>
          Five years designing the substrate — tokens, components, documentation, governance.
          The work that makes all other work possible.
        </p>
        <div className={styles.actions}>
          <Button href="/work" size="lg">View work</Button>
          <Button href="/about" variant="secondary" size="lg">About me</Button>
        </div>
        <div className={styles.meta}>
          <span>San Francisco, CA</span>
          <span className={styles.dot}>·</span>
          <span>Available for new roles</span>
        </div>
      </div>
    </section>
  );
}
