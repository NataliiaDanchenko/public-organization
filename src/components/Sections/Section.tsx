import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, eyebrow, children, className }: SectionProps) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      {(eyebrow || title) && (
        <header className={styles.header}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
        </header>
      )}
      {children}
    </section>
  );
}
