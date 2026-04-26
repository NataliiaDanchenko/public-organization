import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>Public Organization</p>
        <p>Curated art, sound and spatial performances.</p>
      </div>
    </footer>
  );
}
