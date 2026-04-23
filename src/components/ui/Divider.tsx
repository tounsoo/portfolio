import styles from "./Divider.module.css";

interface DividerProps {
  spacing?: "sm" | "md" | "lg";
  subtle?: boolean;
}

export default function Divider({ spacing = "md", subtle = false }: DividerProps) {
  return (
    <hr
      className={[styles.divider, styles[spacing], subtle ? styles.subtle : ""].join(" ")}
    />
  );
}
