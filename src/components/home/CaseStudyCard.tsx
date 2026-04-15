import Link from "next/link";
import Tag from "@/components/ui/Tag";
import type { CaseStudy } from "@/types/case-study";
import styles from "./CaseStudyCard.module.css";

export default function CaseStudyCard({
  slug,
  title,
  tagline,
  tags,
  year,
  role,
  coverAccent,
}: CaseStudy) {
  return (
    <article className={styles.card}>
      <div className={styles.accent} style={{ backgroundColor: coverAccent }} />
      <Link href={`/work/${slug}`} className={styles.link}>
        <div className={styles.body}>
          <div className={styles.meta}>
            <span className={styles.role}>{role}</span>
            <span className={styles.year}>{year}</span>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.tagline}>{tagline}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
