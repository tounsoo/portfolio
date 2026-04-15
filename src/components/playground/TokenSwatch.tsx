import styles from "./TokenSwatch.module.css";

interface TokenSwatchProps {
  tokenName: string;
  label: string;
  hex: string;
  group: "bg" | "text" | "border" | "accent";
}

export default function TokenSwatch({ tokenName, label, hex, group }: TokenSwatchProps) {
  return (
    <div className={styles.swatch}>
      <div
        className={[styles.color, styles[group]].join(" ")}
        style={{ backgroundColor: hex }}
        title={hex}
      />
      <div className={styles.info}>
        <code className={styles.token}>{tokenName}</code>
        <span className={styles.label}>{label}</span>
        <span className={styles.hex}>{hex}</span>
      </div>
    </div>
  );
}
