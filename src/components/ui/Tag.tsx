import styles from "./Tag.module.css";

interface TagProps {
  label: string;
  color?: "default" | "blue" | "green" | "amber";
  size?: "sm" | "md";
}

export default function Tag({ label, color = "default", size = "sm" }: TagProps) {
  return (
    <span className={[styles.tag, styles[color], styles[size]].join(" ")}>
      {label}
    </span>
  );
}
