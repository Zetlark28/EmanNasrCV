import styles from "./Bio.module.css";

export default function Bio() {
  return (
    <section id="bio" aria-labelledby="bio-title">
      <div className="container">
        <h2 id="bio-title" className="section-title">
          Chi Sono
        </h2>
        <span className="section-divider" aria-hidden="true" />
        <div className={styles.bioCard}>
          <p>
            Sono la Dott.ssa Eman Nasr, odontoiatra laureata presso
            l&apos;Università di Pavia e{" "}
            <strong className="kw">specializzata in conservativa ed endodonzia</strong>.
            Mi occupo della diagnosi, prevenzione e trattamento delle patologie
            dentali, con{" "}
            <strong className="kw">particolare attenzione alla cura</strong> delle
            carie, ai restauri estetici e ai trattamenti endodontici per la
            salvaguardia del dente naturale.
          </p>
          <p>
            Credo in un approccio personalizzato, basato su ascolto, precisione
            e tecniche minimamente invasive, per{" "}
            <strong className="kw">
              garantire risultati duraturi e un&apos;esperienza serena a ogni paziente
            </strong>
            .
          </p>
          <p>
            Nel mio percorso professionale ho affrontato sia casi semplici sia
            situazioni cliniche più complesse, sempre con l&apos;obiettivo di{" "}
            <strong className="kw">
              preservare la salute orale e migliorare il comfort del paziente
            </strong>
            .
          </p>
          <p>
            Mi aggiorno costantemente sulle tecniche più recenti in ambito
            conservativo ed endodontico, per offrire cure{" "}
            <strong className="kw">moderne e basate su evidenze scientifiche</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

