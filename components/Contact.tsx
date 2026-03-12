import styles from "./Contact.module.css";

interface ContactCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

function ContactCard({ icon, title, children }: ContactCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        {icon}
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <h2 id="contact-title" className="section-title">
          Contatti
        </h2>
        <span className="section-divider" aria-hidden="true" />
        <p className={styles.lead}>
          Per informazioni, richieste o per prenotare una visita odontoiatrica,
          puoi contattarmi utilizzando i recapiti riportati qui sotto. Ricevo su
          appuntamento presso lo Studio Odontoiatrico Aramini a Voghera (PV) e
          sono disponibile per collaborazioni professionali nelle zone di Pavia
          e Milano.
        </p>

        <div className={styles.grid}>
          <ContactCard icon="📍" title="Indirizzo">
            <p>Studio Odontoiatrico Aramini</p>
            <p>Viale Montebello 14, 27058 Voghera (PV)</p>
          </ContactCard>

          <ContactCard icon="📞" title="Telefono">
            <p>
              <a href="tel:+393737529300" className={styles.link}>
                373 752 9300
              </a>
            </p>
            <p>
              Per urgenze o richieste rapide è possibile contattarmi
              telefonicamente o via WhatsApp.
            </p>
          </ContactCard>

          <ContactCard icon="✉️" title="Email">
            <p>
              <a
                href="mailto:nasr.eman01@gmail.com"
                className={styles.link}
              >
                nasr.eman01@gmail.com
              </a>
            </p>
            <p>Per informazioni dettagliate o richieste di documentazione.</p>
          </ContactCard>

          <ContactCard icon="🕒" title="Orari">
            <p>Lunedì – Venerdì: 9:00 – 19:00</p>
            <p>Sabato – Domenica: Chiuso</p>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
