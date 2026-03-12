import styles from "./Services.module.css";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper} aria-hidden="true">
        <i className={icon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

const services: ServiceCardProps[] = [
  {
    icon: "fas fa-shield-heart",
    title: "Prevenzione",
    description:
      "Visite periodiche, pulizia professionale, sigillatura dei solchi e programmi personalizzati di igiene orale. L'obiettivo è mantenere denti e gengive sani e prevenire carie e infiammazioni.",
  },
  {
    icon: "fas fa-tooth",
    title: "Conservativa",
    description:
      "Restauri estetici in composito, ricostruzioni di denti danneggiati e trattamenti per contrastare carie e fratture. Massima attenzione alla conservazione del tessuto dentale naturale.",
  },
  {
    icon: "fas fa-syringe",
    title: "Endodonzia",
    description:
      "Trattamenti canalari per eliminare infezioni profonde, alleviare il dolore e preservare il dente. Approccio preciso, delicato e orientato alla lunga durata del risultato.",
  },
  {
    icon: "fas fa-star",
    title: "Estetica Dentale",
    description:
      "Sbiancamento professionale e trattamenti dedicati al miglioramento estetico del sorriso, nel pieno rispetto della salute dei tessuti dentali.",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title">
          Servizi Offerti
        </h2>
        <span className="section-divider" aria-hidden="true" />
        <div className={styles.grid}>
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
