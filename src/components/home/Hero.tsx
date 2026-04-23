import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.label}>Design Systems Designer &amp; Developer</p>
        <h1 className={styles.name}>
          <span className={styles.firstName}>Elara</span>
          <span className={styles.lastName}>
            Reyes<span className={styles.period}>.</span>
          </span>
        </h1>
        <p className={styles.tagline}>
          Five years building the substrate — tokens, components,
          documentation, governance. The work that makes all other work possible.
        </p>
        <div className={styles.meta}>
          <span>San Francisco</span>
          <span className={styles.sep}>·</span>
          <span className={styles.available}>
            <span className={styles.dot} aria-hidden="true" />
            Available for new roles
          </span>
          <span className={styles.sep}>·</span>
          <Link href="/work" className={styles.cta}>
            View work →
          </Link>
        </div>
      </div>
    </section>
  );
}
