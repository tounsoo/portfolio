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
        <h2 className={styles.heading}>Selected Work</h2>
        <div className={styles.grid}>
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
