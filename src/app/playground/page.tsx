import type { Metadata } from "next";
import TokenSwatch from "@/components/playground/TokenSwatch";
import TypeScale from "@/components/playground/TypeScale";
import SpacingScale from "@/components/playground/SpacingScale";
import ComponentShowcase from "@/components/playground/ComponentShowcase";
import Divider from "@/components/ui/Divider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "A live showcase of the token system and components powering this portfolio. Inspect DevTools to see the full CSS custom property architecture.",
};

const colorTokens = [
  { tokenName: "--color-bg-base",       label: "Background Base",     hex: "#ffffff", group: "bg"     as const },
  { tokenName: "--color-bg-subtle",     label: "Background Subtle",   hex: "#f9f9f9", group: "bg"     as const },
  { tokenName: "--color-bg-muted",      label: "Background Muted",    hex: "#f0f0f0", group: "bg"     as const },
  { tokenName: "--color-text-primary",  label: "Text Primary",        hex: "#1a1a1a", group: "text"   as const },
  { tokenName: "--color-text-secondary",label: "Text Secondary",      hex: "#525252", group: "text"   as const },
  { tokenName: "--color-text-tertiary", label: "Text Tertiary",       hex: "#a8a8a8", group: "text"   as const },
  { tokenName: "--color-border-default",label: "Border Default",      hex: "#e4e4e4", group: "border" as const },
  { tokenName: "--color-accent-default",label: "Accent Default",      hex: "#2563eb", group: "accent" as const },
  { tokenName: "--color-accent-green",  label: "Accent Green",        hex: "#16a34a", group: "accent" as const },
  { tokenName: "--color-accent-amber",  label: "Accent Amber",        hex: "#d97706", group: "accent" as const },
];

export default function PlaygroundPage() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>Playground</p>
          <h1 className={styles.heading}>Token System & Components</h1>
          <p className={styles.description}>
            Everything on this site is built on a three-tier CSS custom property system.
            Open DevTools and inspect any element — you&apos;ll see the token architecture
            directly in the inspector. Toggle dark mode to watch the semantic tokens update
            in real time.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Semantic Color Tokens</h2>
          <p className={styles.sectionNote}>
            Light mode values shown. Semantic tokens resolve to different primitives in dark mode.
          </p>
          <div className={styles.swatchGrid}>
            {colorTokens.map((t) => (
              <TokenSwatch key={t.tokenName} {...t} />
            ))}
          </div>
        </section>

        <Divider />

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Type Scale</h2>
          <p className={styles.sectionNote}>
            Major Third ratio (1.25×) from a 16px base. Nine steps, all defined as CSS custom properties.
          </p>
          <TypeScale />
        </section>

        <Divider />

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Spacing Scale</h2>
          <p className={styles.sectionNote}>
            Base-4 system (4px increments). Named semantic aliases — <code>--space-section</code>,{" "}
            <code>--space-gutter</code> — are what components actually use.
          </p>
          <SpacingScale />
        </section>

        <Divider />

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Components</h2>
          <p className={styles.sectionNote}>
            Each component defines its own component-level tokens that reference semantic tokens.
            No component ever reaches for a primitive value directly.
          </p>
          <ComponentShowcase />
        </section>
      </div>
    </main>
  );
}
