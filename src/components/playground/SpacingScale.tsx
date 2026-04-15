import styles from "./SpacingScale.module.css";

const steps = [
  { token: "--space-1",  px: "4px",   rem: "0.25rem" },
  { token: "--space-2",  px: "8px",   rem: "0.5rem" },
  { token: "--space-3",  px: "12px",  rem: "0.75rem" },
  { token: "--space-4",  px: "16px",  rem: "1rem" },
  { token: "--space-5",  px: "20px",  rem: "1.25rem" },
  { token: "--space-6",  px: "24px",  rem: "1.5rem" },
  { token: "--space-8",  px: "32px",  rem: "2rem" },
  { token: "--space-10", px: "40px",  rem: "2.5rem" },
  { token: "--space-12", px: "48px",  rem: "3rem" },
  { token: "--space-16", px: "64px",  rem: "4rem" },
  { token: "--space-20", px: "80px",  rem: "5rem" },
  { token: "--space-24", px: "96px",  rem: "6rem" },
];

export default function SpacingScale() {
  return (
    <div className={styles.scale}>
      {steps.map(({ token, px, rem }) => (
        <div key={token} className={styles.step}>
          <div className={styles.meta}>
            <code className={styles.token}>{token}</code>
            <span className={styles.values}>{px} / {rem}</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={styles.bar}
              style={{ width: `var(${token})` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
