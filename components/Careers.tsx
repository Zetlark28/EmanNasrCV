import styles from "./Careers.module.css";

const features = [
  {
    icon: "fas fa-microscope",
    title: "Alta specializzazione",
    description: "Focus su conservativa ed endodonzia con approccio clinico preciso e aggiornato.",
  },
  {
    icon: "fas fa-heart",
    title: "Cura del paziente",
    description: "Attenzione alla persona, ascolto attivo e comunicazione chiara in ogni fase del trattamento.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Formazione continua",
    description: "Aggiornamento costante sulle più recenti tecniche per offrire cure basate su evidenze scientifiche.",
  },
];

export default function Careers() {
  return (
    <section
      id="careers"
      className={styles.section}
      aria-labelledby="careers-title"
    >
      <div className="container">
        <h2 id="careers-title" className="section-title">
          Collabora con me
        </h2>
        <span className="section-divider" aria-hidden="true" />
        <div className={styles.layout}>
          <div className={styles.text}>
            <h3>
              Cerchi un odontoiatra affidabile per collaborazioni professionali?
            </h3>
            <p className={styles.intro}>
              Offro supporto a studi dentistici per trattamenti di conservativa
              ed endodonzia, con particolare attenzione a precisione, qualità del
              risultato e cura del paziente.
            </p>
            <ul className={styles.features}>
              {features.map((f) => (
                <li key={f.title}>
                  <i className={f.icon} aria-hidden="true" />
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaTitle}>Ti interessa una collaborazione?</p>
            <p className={styles.ctaText}>
              Contattami per discutere le modalità di collaborazione più adatte
              alle esigenze del tuo studio.
            </p>
            <a href="#contact" className="btn">
              <i className="fas fa-envelope" aria-hidden="true" />
              Contattami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
