import styles from "./MetricCallout.module.css";

interface MetricCalloutProps {
  metric: string;
  label: string;
  context?: string;
}

export default function MetricCallout({ metric, label, context }: MetricCalloutProps) {
  return (
    <div className={styles.callout}>
      <span className={styles.metric}>{metric}</span>
      <div className={styles.text}>
        <p className={styles.label}>{label}</p>
        {context && <p className={styles.context}>{context}</p>}
      </div>
    </div>
  );
}
