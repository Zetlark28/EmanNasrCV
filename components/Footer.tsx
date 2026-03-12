import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>© {new Date().getFullYear()} emannasr.it. Tutti i diritti riservati.</p>
          <p className={styles.vat}>VAT IT02918190188</p>
        </div>
      </div>
    </footer>
  );
}
