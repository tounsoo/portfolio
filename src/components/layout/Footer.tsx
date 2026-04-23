import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.name}>Elara Reyes</p>
          <p className={styles.tagline}>
            Building the systems that let teams ship.
          </p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()}
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
            Next.js · No Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
