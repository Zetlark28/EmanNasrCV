"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Chi Sono", href: "#bio" },
  { label: "Esperienza", href: "#experience" },
  { label: "Servizi", href: "#services" },
  { label: "Lavora con me", href: "#careers" },
  { label: "Contatti", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    close();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    close();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav} aria-label="Navigazione principale">
          <a href="#" className={styles.logo} onClick={scrollToTop}>
            <Image
              src="/img/tooth-heart-logo.png"
              alt="Logo Dott.ssa Eman Nasr"
              width={40}
              height={40}
              priority
            />
            <span>Dott.ssa Eman Nasr</span>
          </a>

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menu di navigazione"
            aria-expanded={isOpen}
            aria-controls="navLinks"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          <ul
            id="navLinks"
            className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
            role="navigation"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
