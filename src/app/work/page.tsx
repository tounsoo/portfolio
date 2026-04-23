import type { Metadata } from "next";
import WorkGrid from "@/components/home/WorkGrid";
import { getCaseStudyList } from "@/lib/case-studies";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected design systems case studies — tokens, governance, migration, and component architecture.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudyList();
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.label}>Work</p>
        <h1 className={styles.heading}>Selected Case Studies</h1>
        <p className={styles.sub}>
          Design systems work across fintech, SaaS, and enterprise —
          covering foundations, governance, and token migration.
        </p>
      </div>
      <WorkGrid caseStudies={caseStudies} />
    </main>
  );
}
