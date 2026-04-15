import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Elara Reyes
        </p>
        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://read.cv"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Read.cv
            </a>
          </li>
        </ul>
        <p className={styles.built}>
          Built with Next.js — no Tailwind
        </p>
      </div>
    </footer>
  );
}
