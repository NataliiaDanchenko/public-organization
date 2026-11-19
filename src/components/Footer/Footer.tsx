import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>CRESCENDO ART FORUM</p>
        <p>Безбар’єрний мистецько-освітній проєкт для учнів, викладачів і мистецької спільноти</p>
      </div>
    </footer>
  );
}
