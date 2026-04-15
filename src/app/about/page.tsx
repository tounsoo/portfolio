import type { Metadata } from "next";
import Philosophy from "@/components/about/Philosophy";
import SkillsGrid from "@/components/about/SkillsGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Design systems designer and developer based in San Francisco. Five years building the substrate — tokens, components, governance.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>About</p>
          <h1 className={styles.name}>Elara Reyes</h1>
          <p className={styles.title}>Design Systems Designer & Developer</p>
        </header>

        <section className={styles.bio}>
          <p>
            I started as a product designer at a ten-person startup, building features and shipping screens.
            It was good work, but I kept finding myself more interested in the substrate than the surface —
            the token system, the component API, the documentation that lets a team of thirty designers
            move as one. Five years later, that&apos;s my whole job.
          </p>
          <p>
            I&apos;ve built design systems from zero, inherited ones at scale, and migrated legacy products
            through complete token overhauls. The common thread: the hardest parts are never the design
            decisions. They&apos;re the organizational ones.
          </p>
          <p>
            My view is that the best design systems are 30% design, 30% engineering, and 40%
            organizational change management. I care about all three equally, which puts me in
            an unusual and useful position between disciplines.
          </p>
          <p>
            Based in San Francisco. Available for senior individual contributor or lead roles
            focused on design systems. I write occasionally about tokens, governance, and the
            organizational dynamics of cross-functional systems work.
          </p>
        </section>

        <Philosophy />
        <SkillsGrid />
      </div>
    </main>
  );
}
