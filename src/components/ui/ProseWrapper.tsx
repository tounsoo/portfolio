import styles from "./ProseWrapper.module.css";

interface ProseWrapperProps {
  children: React.ReactNode;
  width?: "content" | "wide";
}

export default function ProseWrapper({ children, width = "content" }: ProseWrapperProps) {
  return (
    <div className={[styles.prose, styles[width]].join(" ")}>
      {children}
    </div>
  );
}
