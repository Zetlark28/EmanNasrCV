import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#d6317a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emannasr.it"),
  title:
    "Dott.ssa Eman Nasr - Odontoiatra specializzata in conservativa ed endodonzia",
  description:
    "Dott.ssa Eman Nasr – Odontoiatra specializzata in conservativa ed endodonzia. Riceve a Voghera (PV), Pavia, Milano e provincia. Prenota una visita per un sorriso sano, curato e luminoso.",
  keywords: [
    "odontoiatra",
    "odontoiatra voghera",
    "dentista voghera",
    "dentista",
    "dentista pavia",
    "odontoiatra pavia",
    "dentista milano",
    "odontoiatra milano",
    "studio dentistico milano",
    "studio dentistico pavia",
    "endodonzia",
    "conservativa",
    "restauri in composito",
    "igiene dentale",
    "sbiancamento denti",
    "trattamento canalare",
  ],
  authors: [{ name: "Dott.ssa Eman Nasr" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "it_IT",
    type: "website",
    siteName: "Dott.ssa Eman Nasr",
    title:
      "Dott.ssa Eman Nasr - Odontoiatra specializzata in conservativa ed endodonzia",
    description:
      "Odontoiatra specializzata in conservativa ed endodonzia. Riceve a Voghera (PV), Pavia, Milano e provincia. Prenota una visita per la salute del tuo sorriso.",
    images: [
      {
        url: "/img/tooth-heart-logo.png",
        alt: "Logo Dott.ssa Eman Nasr",
      },
    ],
    url: "https://www.emannasr.it",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dott.ssa Eman Nasr - Odontoiatra specializzata in conservativa ed endodonzia",
    description:
      "Odontoiatra specializzata in conservativa ed endodonzia. Riceve a Voghera, Pavia e Milano. Prenota una visita.",
    images: [{ url: "/img/tooth-heart-logo.png", alt: "Logo Dott.ssa Eman Nasr" }],
  },
  icons: {
    icon: [
      { url: "/img/favicon.ico", type: "image/x-icon" },
      { url: "/img/favicon.svg", type: "image/svg+xml" },
      { url: "/img/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/img/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/img/site.webmanifest",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dott.ssa Eman Nasr",
  givenName: "Eman",
  familyName: "Nasr",
  jobTitle: "Odontoiatra",
  description:
    "Odontoiatra specializzata in conservativa ed endodonzia, con attività clinica presso studi a Voghera, Rozzano e Pavia.",
  url: "https://www.emannasr.it",
  image: "https://www.emannasr.it/img/eman_20250412.jpg",
  email: "mailto:nasr.eman01@gmail.com",
  telephone: "+39 373 752 9300",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Università degli Studi di Pavia",
  },
  knowsAbout: [
    "Odontoiatria conservativa",
    "Endodonzia",
    "Restauri estetici in composito",
    "Igiene e prevenzione dentale",
    "Terapie canalari",
    "Trattamenti estetici minimamente invasivi",
  ],
  medicalSpecialty: "Dentistry",
  worksFor: [
    {
      "@type": "Place",
      name: "Studio Odontoiatrico Aramini",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Viale Montebello 14",
        addressLocality: "Voghera",
        postalCode: "27058",
        addressRegion: "PV",
        addressCountry: "IT",
      },
    },
    {
      "@type": "Place",
      name: "Studio Dentistico a Rozzano",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rozzano",
        addressRegion: "MI",
        addressCountry: "IT",
      },
    },
    {
      "@type": "Place",
      name: "Studio Dentistico a Pavia",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pavia",
        addressRegion: "PV",
        addressCountry: "IT",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
