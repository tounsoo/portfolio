import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps extends CaseStudy {
  index: number;
}

export default function CaseStudyCard({
  slug,
  title,
  tagline,
  tags,
  year,
  role,
  index,
}: CaseStudyCardProps) {
  return (
    <li className={styles.item}>
      <Link href={`/work/${slug}`} className={styles.link}>
        <span className={styles.number}>
          {String(index).padStart(2, "0")}
        </span>
        <div className={styles.body}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.tagline}>{tagline}</p>
          <div className={styles.tags}>
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.aside}>
          <span className={styles.year}>{year}</span>
          <span className={styles.role}>{role}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </Link>
    </li>
  );
}
