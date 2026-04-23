import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudy } from "@/types/case-study";
import styles from "./WorkGrid.module.css";

interface WorkGridProps {
  caseStudies: CaseStudy[];
}

export default function WorkGrid({ caseStudies }: WorkGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Selected Work</span>
          <span className={styles.count}>{String(caseStudies.length).padStart(2, "0")}</span>
        </div>
        <ul className={styles.list}>
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} index={i + 1} {...cs} />
          ))}
        </ul>
      </div>
    </section>
  );
}
