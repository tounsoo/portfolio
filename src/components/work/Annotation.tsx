import styles from "./Annotation.module.css";

type AnnotationType = "insight" | "decision" | "learning" | "warning";

interface AnnotationProps {
  type: AnnotationType;
  children: React.ReactNode;
}

const labels: Record<AnnotationType, string> = {
  insight:  "Insight",
  decision: "Decision",
  learning: "Learning",
  warning:  "Watch out",
};

export default function Annotation({ type, children }: AnnotationProps) {
  return (
    <aside className={[styles.annotation, styles[type]].join(" ")}>
      <span className={styles.typeLabel}>{labels[type]}</span>
      <div className={styles.content}>{children}</div>
    </aside>
  );
}
