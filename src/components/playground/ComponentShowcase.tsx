"use client";

import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import ThemeToggle from "@/components/ui/ThemeToggle";
import styles from "./ComponentShowcase.module.css";

export default function ComponentShowcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.group}>
        <p className={styles.groupLabel}>Button — variant</p>
        <div className={styles.row}>
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="ghost" size="md">Ghost</Button>
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Button — size</p>
        <div className={styles.row}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Button — state</p>
        <div className={styles.row}>
          <Button variant="primary" size="md">Enabled</Button>
          <Button variant="primary" size="md" disabled>Disabled</Button>
          <Button variant="secondary" size="md" disabled>Disabled</Button>
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Tag — color</p>
        <div className={styles.row}>
          <Tag label="Default" color="default" />
          <Tag label="Blue" color="blue" />
          <Tag label="Green" color="green" />
          <Tag label="Amber" color="amber" />
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Tag — size</p>
        <div className={styles.row}>
          <Tag label="Small" size="sm" />
          <Tag label="Medium" size="md" />
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Theme Toggle</p>
        <div className={styles.row}>
          <ThemeToggle />
          <span className={styles.hint}>Toggles the entire page theme</span>
        </div>
      </div>
    </div>
  );
}
