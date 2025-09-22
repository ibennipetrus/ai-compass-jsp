import React, { useEffect, useState, useMemo } from "react";
import client from "../sanityClient";
import Footer from "../components/Footer";
import "../styles/Readiness.css";

const QUESTIONS = [
  {
    code: "F1",
    title:
      "Haben wir eine aktuelle Übersicht aller eingesetzten KI-Systeme (inkl. KI-Tools von Dritten) mit einer ersten Risikoeinschätzung?",
    meta: "Bereich: Inventar & Risiko. Beispiel: Wissen wir beim Einsatz von ChatGPT oder anderen KI-Tools, ob das Tool eher „niedrig“ oder „hoch“ reguliert ist?",
  },
  {
    code: "F2",
    title:
      "Gibt es eine veröffentlichte KI-Richtlinie mit klaren Verantwortlichkeiten und Freigabeprozessen?",
    meta: "Bereich: Governance & Rollen. Beispiel: Wer entscheidet, ob ein neues KI-Tool eingesetzt wird – ist das schriftlich geregelt?",
  },
  {
    code: "F3",
    title:
      "Haben seit Februar 2025 alle Mitarbeitenden ein Grundlagentraining zur sicheren Nutzung von KI absolviert?",
    meta: "Bereich: People & Befähigung. Beispiel: Wissen Kolleg:innen, was beim Hochladen von Daten in KI-Systeme zu beachten ist?",
  },
  {
    code: "F4",
    title:
      "Machen wir den Einsatz von KI gegenüber Kund:innen und Mitarbeitenden transparent und kennzeichnen KI-generierte Inhalte?",
    meta: "Bereich: Transparenz & Kennzeichnung. Beispiel: Ist erkennbar, wenn ein Chatbot antwortet oder ein Bild KI-generiert ist?",
  },
  {
    code: "F5",
    title:
      "Sind unsere Datenprozesse und die technische Dokumentation so gestaltet, dass sie Anforderungen sicher erfüllen?",
    meta: "Bereich: Daten & Technik. Beispiel: Prüfen wir Datenqualität und dokumentieren, wie Modelle trainiert wurden?",
  },
  {
    code: "F6",
    title:
      "Bewerten wir regelmäßig Risiken und haben klare Regeln, wie Menschen eingreifen können – auch im Notfall?",
    meta: "Bereich: Sicherheit & Risikomanagement. Beispiel: Gibt es eine Meldekette, wenn ein System fehlerhafte oder diskriminierende Entscheidungen trifft?",
  },
  {
    code: "F7",
    title:
      "Haben wir einen klaren KI-Strategierahmen mit messbaren Zielen, einem priorisierten Use Case-Portfolio und einem freigegebenen Budget/Ressourcen?",
    meta: "Bereich: Strategie & Portfolio-Steuerung. Beispiel: Gibt es definierte KPI/OKRs für KI (z.B. Automatisierungsquote, Qualitäts-/NPS-Ziele), ein priorisiertes Use-Case-Backlog und festes Budget mit Zeitanteilen der Teams?",
  },
];

const ARCHETYPES = {
  Explorer: {
    name: "Explorer",
    tagline: "Erste Schritte.",
    desc: "Noch am Anfang. Fokus auf Überblick, Regeln und Transparenz. Schnell sichtbare Basics aufbauen.",
    actions: [
      "Inventar & vorläufige Risikoklassifizierung erstellen",
      "KI-Richtlinie mit Rollen/Freigaben veröffentlichen",
      "Transparenz/Kennzeichnung standardisieren",
      "Quick-Risk-Screen & einfache Meldekette definieren",
    ],
  },
  Architekt: {
    name: "Architekt",
    tagline: "Governance klar, Technik nachziehen.",
    desc: "Steuerung steht. Nun Daten, Risiken und Lieferkette vertiefen. Technik und Nachweise systematisch ausbauen.",
    actions: [
      "Data-Governance & technische Dokumentation etablieren",
      "Risiko-/Impact-Assessments & Human Oversight sowie 24h-Meldekette operationalisieren",
      "Vendor-Checks in Beschaffung verankern",
    ],
  },
  Sprinter: {
    name: "Sprinter",
    tagline: "Technik stark, Governance nachziehen.",
    desc: "Use Cases laufen. Regeln, Transparenz und Verantwortlichkeiten lückenlos machen. Nachhaltig skalieren.",
    actions: [
      "Policy & Freigaben nachziehen, Verantwortlichkeiten klären",
      "Transparenz/Kennzeichnung vereinheitlichen",
      "Inventar formalisieren und Roadmap festzurren",
    ],
  },
  Champion: {
    name: "Champion",
    tagline: "Skalierter, regelkonformer Betrieb.",
    desc: "Technik und Governance im Gleichlauf. Fokus auf Wirksamkeit, Audits und kontinuierliche Verbesserung.",
    actions: [
      "Kontinuierliches Monitoring & Drift-Kontrollen, regelmäßige TTX-Notfallübungen",
      "Lieferanten-Resilienz & Vendor-Compliance zyklisch prüfen",
      "Daten- und Dokumentationsqualität über Audit-Zyklen sichern",
    ],
  },
};

const PERSONA_IMAGES = {
  Explorer: "/images/Explorer.png",
  Architekt: "/images/Architekt.png",
  Sprinter: "/images/Sprinter.png",
  Champion: "/images/Champion.png",
};

export default function ReadinessCheck() {
  return (
    <div>
      <h1>Test Readiness Page</h1>
    </div>
  );
}
