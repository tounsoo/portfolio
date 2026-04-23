import Tag from "@/components/ui/Tag";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import styles from "./CaseStudyHeader.module.css";

interface CaseStudyHeaderProps {
  frontmatter: CaseStudyFrontmatter;
}

export default function CaseStudyHeader({ frontmatter }: CaseStudyHeaderProps) {
  const { title, tagline, company, role, year, duration, tags, coverAccent } = frontmatter;

  return (
    <header className={styles.header}>
      <div
        className={styles.accent}
        style={{ backgroundColor: coverAccent }}
      />
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <dl className={styles.meta}>
          <div className={styles.metaItem}>
            <dt>Company</dt>
            <dd>{company}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt>Year</dt>
            <dd>{year}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt>Duration</dt>
            <dd>{duration}</dd>
          </div>
        </dl>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </header>
  );
}
