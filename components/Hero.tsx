import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Presentazione">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Dott.ssa Eman Nasr</h1>
            <p className={styles.subtitle}>
              Odontoiatra specializzata in conservativa ed endodonzia
            </p>
            <div className={styles.buttons}>
              <a href="#contact" className="btn">
                <i className="fas fa-calendar-plus" aria-hidden="true" />
                Prenota una Visita
              </a>
              <a href="tel:+393737529300" className="btn btn-outline">
                <i className="fas fa-phone" aria-hidden="true" />
                Chiama ora
              </a>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img/eman_20250412.jpg"
              alt="Dott.ssa Eman Nasr, odontoiatra"
              width={420}
              height={420}
              className={styles.profileImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
