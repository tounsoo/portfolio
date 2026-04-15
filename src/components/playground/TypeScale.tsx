import styles from "./TypeScale.module.css";

const steps = [
  { token: "--text-xs",   size: "12px", sample: "Caption text, token labels, metadata" },
  { token: "--text-sm",   size: "14px", sample: "Secondary body copy, nav links, tags" },
  { token: "--text-base", size: "16px", sample: "Primary body copy" },
  { token: "--text-md",   size: "18px", sample: "Lead paragraph, intro text" },
  { token: "--text-lg",   size: "20px", sample: "Section tagline, subheading" },
  { token: "--text-xl",   size: "24px", sample: "Card title, section heading" },
  { token: "--text-2xl",  size: "30px", sample: "Page subheading" },
  { token: "--text-3xl",  size: "36px", sample: "Page heading" },
  { token: "--text-4xl",  size: "48px", sample: "Hero heading" },
  { token: "--text-5xl",  size: "60px", sample: "Display / name" },
];

export default function TypeScale() {
  return (
    <div className={styles.scale}>
      {steps.map(({ token, size, sample }) => (
        <div key={token} className={styles.step}>
          <div className={styles.meta}>
            <code className={styles.token}>{token}</code>
            <span className={styles.size}>{size}</span>
          </div>
          <p className={styles.sample} style={{ fontSize: `var(${token})` }}>
            {sample}
          </p>
        </div>
      ))}
    </div>
  );
}
