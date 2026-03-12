"use client";

import { useState } from "react";
import styles from "./Experience.module.css";

interface ExperienceEntry {
  period: string;
  role: string;
  place: string;
  description: string;
}

interface TimelineItemProps extends ExperienceEntry {
  side: "left" | "right";
  index: number;
}

function TimelineItem({ period, role, place, description, side, index }: TimelineItemProps) {
  return (
    <div
      className={`${styles.item} ${styles[side]}`}
      style={{ animationDelay: `${index * 60}ms` }}
      role="listitem"
    >
      <div className={styles.card}>
        <span className={styles.period}>{period}</span>
        <h3>{role}</h3>
        <p className={styles.place}>
          <i className="fas fa-map-marker-alt" aria-hidden="true" />
          {place}
        </p>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
}

const experiences: ExperienceEntry[] = [
  {
    period: "06/2023 – Presente",
    role: "Odontoiatra",
    place: "Studio Odontoiatrico Aramini, Voghera",
    description:
      "Attività clinica con focus su prevenzione, restauri in composito, terapie canalari, sbiancamento professionale. Gestione di prime visite, urgenze e piani di cura personalizzati.",
  },
  {
    period: "06/2023 – 01/2024",
    role: "Odontoiatra",
    place: "Smart Dental Clinic, Sesto San Giovanni",
    description:
      "Esecuzione di restauri estetici, terapie endodontiche, trattamenti preventivi, sigillature e valutazioni cliniche complete. Supporto alla diagnosi radiografica.",
  },
  {
    period: "02/2023 – 06/2023",
    role: "Odontoiatra",
    place: "CLD – Odontoiatria Specialistica, Gropello Cairoli e Vermezzo",
    description:
      "Trattamenti conservativi, restauri diretti e terapie endodontiche mirate alla salvaguardia del dente naturale. Prevenzione e supporto ai piani di cura specialistici.",
  },
  {
    period: "10/2022 – 02/2023",
    role: "Odontoiatra Volontaria",
    place: "Ambulatorio Caritas \"Nessuno escluso\", Alessandria",
    description:
      "Assistenza clinica rivolta a pazienti fragili: restauri in composito, terapie canalari, trattamenti preventivi e gestione delle urgenze.",
  },
  {
    period: "06/2022 – 01/2023",
    role: "Tirocinante",
    place: "RSI Leandro Lisino Caritas, Tortona",
    description:
      "Supporto a trattamenti conservativi complessi, affiancamento in terapie canalari e restauri avanzati.",
  },
];

const VISIBLE_COUNT = 4;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, VISIBLE_COUNT);
  const hasMore = experiences.length > VISIBLE_COUNT;

  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <div className="container">
        <h2 id="experience-title" className="section-title">
          Esperienza Professionale
        </h2>
        <span className="section-divider" aria-hidden="true" />

        <div className={styles.timeline} role="list">
          {visible.map((exp, i) => (
            <TimelineItem
              key={exp.period}
              {...exp}
              side={i % 2 === 0 ? "left" : "right"}
              index={i}
            />
          ))}
        </div>

        {hasMore && (
          <div className={styles.toggleWrapper}>
            <button
              className={styles.toggleBtn}
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  <i className="fas fa-chevron-up" aria-hidden="true" />
                  Mostra meno
                </>
              ) : (
                <>
                  <i className="fas fa-chevron-down" aria-hidden="true" />
                  Vedi altra esperienza
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
