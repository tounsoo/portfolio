"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import styles from "./Nav.module.css";

const links = [
  { href: "/work", label: "Work" },
  { href: "/playground", label: "Playground" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} aria-label="Elara Reyes — home">
          ER
        </Link>
        <ul className={styles.links}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname.startsWith(href) ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
