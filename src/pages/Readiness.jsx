import React, { useEffect, useState, useMemo, useRef } from "react";
import Footer from "../components/Footer";
import "../styles/Readiness.css";
import emailjs from "@emailjs/browser";

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
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [savedId, setSavedId] = useState(null);
  const [saving, setSaving] = useState(false);

  const formRef = useRef();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nameOk = name.trim().length > 1;
  const canStart = emailOk && nameOk;
  const answeredCount = answers.filter((v) => v !== null).length;

  const ANSWER_LABELS = { 2: "Ja", 1: "Teilweise", 0: "Nein", null: "-" };

  const { score, personaKey } = useMemo(() => {
    const v = answers.map((x) => x ?? 0);
    const totalScore = v.reduce((sum, a) => sum + a, 0);
    const Y = v[4] + v[5] + v[6];
    let archetype = "Explorer";
    if (totalScore >= 6 && Y >= 4) archetype = "Champion";
    else if (totalScore >= 6) archetype = "Architekt";
    else if (Y >= 4) archetype = "Sprinter";
    return { score: totalScore, personaKey: archetype };
  }, [answers]);

  const persona = ARCHETYPES[personaKey];

  async function saveSubmission(
    finalAnswers = answers,
    finalScore = score,
    finalPersona = personaKey
  ) {
    setSaving(true);
    try {
      if (formRef.current) {
        const answerInput = formRef.current.querySelector(
          'input[name="answers"]'
        );
        const scoreInput = formRef.current.querySelector('input[name="score"]');
        const personaInput = formRef.current.querySelector(
          'input[name="persona"]'
        );
        if (answerInput)
          answerInput.value = finalAnswers
            .map((a) => ANSWER_LABELS[a])
            .join(", ");
        if (scoreInput) scoreInput.value = finalScore;
        if (personaInput) personaInput.value = finalPersona;
      }

      const result = await emailjs.sendForm(
        "service_ryrxjqh",
        "template_5wgvfth",
        formRef.current,
        "L2ByIeyAeTxtPrEl-"
      );

      console.log("Email sent ✅", result.text);
      setSavedId("sent");
    } catch (e) {
      console.error("Failed to send email ❌", e);
    } finally {
      setSaving(false);
    }
  }

  const setAnswer = (idx, val) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = val;

      const nextUnanswered = next.findIndex((v) => v === null);
      if (nextUnanswered === -1) {
        setStep(QUESTIONS.length + 1);

        // finalScore und finalPersona basierend auf next berechnen
        const finalV = next.map((x) => x ?? 0);
        const finalScore = finalV.reduce((sum, a) => sum + a, 0);
        const Y = finalV[4] + finalV[5] + finalV[6];
        let finalPersona = "Explorer";
        if (finalScore >= 6 && Y >= 4) finalPersona = "Champion";
        else if (finalScore >= 6) finalPersona = "Architekt";
        else if (Y >= 4) finalPersona = "Sprinter";

        saveSubmission(next, finalScore, finalPersona);
      } else {
        setStep(nextUnanswered + 1);
      }

      return next;
    });
  };

  const reset = () => {
    setStep(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setName("");
    setEmail("");
    setSavedId(null);
  };

  return (
    <div className="readiness-container flex flex-col min-h-screen">
      <main className="readiness-main flex-1 p-6 overflow-auto">
        <header className="readiness-header flex gap-4">
          <img src="/images/Logo.png" alt="Logo" className="h-10 self-start" />
          <div>
            <h1 className="text-black text-4xl md:text-5xl font-semibold m-0">
              KI Readiness Quick Check
            </h1>
            <p className="readiness-sub !mt-2">
              3–5 Minuten. Ergebnis mit Profil und Maßnahmen. EU AI Act Nähe
              sichtbar.
            </p>
          </div>
        </header>

        {/* Step 0 */}
        {step === 0 && (
          <div className="card">
            <div className="grid-2">
              <div className="field text-black">
                <label>Ihr Name</label>
                <input
                  placeholder="Vorname Nachname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameOk ? "" : "input-error"}
                />
                {!nameOk && name.length > 0 && (
                  <div className="error">
                    Bitte vollständigen Namen eingeben.
                  </div>
                )}
              </div>
              <div className="field text-black">
                <label>E-Mail</label>
                <input
                  placeholder="name@firma.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailOk ? "" : "input-error"}
                />
                {!emailOk && email.length > 0 && (
                  <div className="error">E-Mail ist nicht gültig.</div>
                )}
              </div>
            </div>

            <div className="ds-gvo-text">
              <p>
                Wir verwenden Ihre Angaben ausschließlich, um Ihnen das Ergebnis
                des KI Readiness Quick Checks per E-Mail zuzusenden.
                Rechtsgrundlage: Art.6(1)(b) DSGVO. Weitere Informationen finden
                Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.
              </p>
            </div>

            <div style={{ marginTop: 12 }}>
              <button
                disabled={!canStart}
                onClick={() => setStep(1)}
                className="btn-primary"
              >
                Start
              </button>
            </div>
          </div>
        )}

        {/* Steps 1..7 */}
        {step >= 1 && step <= QUESTIONS.length && (
          <div className="card">
            {/* Progress Bar */}
            <div className="progress text-black ">
              <div className="bar">
                <span
                  style={{
                    width: `${Math.round(
                      (answeredCount / QUESTIONS.length) * 100
                    )}%`,
                  }}
                ></span>
              </div>
              <div className="stepline text-sm sm:text-base">
                <span className="mr-2">
                  Fortschritt:{" "}
                  {Math.round((answeredCount / QUESTIONS.length) * 100)}%
                </span>
                <span>
                  Fragen beantwortet: {answeredCount} von {QUESTIONS.length}
                </span>
              </div>
            </div>

            <h2 className="text-black font-semibold text-lg sm:text-xl mt-4 mb-4">
              {QUESTIONS[step - 1].title}
            </h2>
            <div className="meta">
              <div>
                <strong>Bereich:</strong>{" "}
                {QUESTIONS[step - 1].meta
                  .split("Beispiel:")[0]
                  .replace("Bereich:", "")
                  .trim()}
              </div>
              <div>
                Beispiel: {QUESTIONS[step - 1].meta.split("Beispiel:")[1]}
              </div>
            </div>

            <div className="options text-black mt-4">
              {[
                { label: "Ja", value: 2, help: "Erfüllt und nachweisbar" },
                {
                  label: "Teilweise",
                  value: 1,
                  help: "Begonnen oder lückenhaft",
                },
                { label: "Nein", value: 0, help: "Noch nicht umgesetzt" },
              ].map((opt) => (
                <div
                  key={opt.label}
                  className="opt-btn"
                  data-active={answers[step - 1] === opt.value}
                  onClick={() => setAnswer(step - 1, opt.value)}
                >
                  <strong>{opt.label}</strong>
                  <div className="muted">{opt.help}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ergebnis */}
        {step === QUESTIONS.length + 1 && (
          <div className="card">
            <div className="eyebrow">Ergebnis</div>
            <div className="bigline text-black">{score} von 10</div>
            <h2 className="text-black font-semibold">KI-{persona.name}</h2>
            <div className="subline text-black">{persona.tagline}</div>
            <img
              className="heroimg"
              src={PERSONA_IMAGES[personaKey]}
              alt={persona.name}
            />
            <div className="persona">
              <p className="text-black">{persona.desc}</p>
              <p className="text-black mt-4">
                <strong>Maßnahmen als Nächstes:</strong>
              </p>
              <ul className="list-disc pl-6 text-black">
                {persona.actions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              {answers[2] < 2 && (
                <div className="hint">
                  Hinweis: Grundlagenschulung für alle Mitarbeitenden
                  kurzfristig durchführen.
                </div>
              )}
            </div>
            <button onClick={reset} className="btn-secondary mt-4">
              Neuer Check
            </button>
          </div>
        )}

        <div className="mt-4 text-left text-xs text-gray-500">
          Schneller Selbstcheck. Keine vertiefte Prüfung.
          {step > 0 && step < QUESTIONS.length + 1 && (
            <div className="mt-1">
              Teilnehmer: {name || "Unbekannt"}. {email || "ohne E-Mail"}.
            </div>
          )}
        </div>

        <form ref={formRef} style={{ display: "none" }}>
          <input type="text" name="name" value={name} readOnly />
          <input type="email" name="email" value={email} readOnly />
          <input
            type="text"
            name="answers"
            value={answers
              .map((a) => (a === null ? "-" : ANSWER_LABELS[a]))
              .join(", ")}
            readOnly
          />
          <input type="text" name="score" value={score} readOnly />
          <input type="text" name="persona" value={personaKey} readOnly />
        </form>
      </main>

      <Footer className="w-full p-4 bg-gray-50 text-left" />
    </div>
  );
}
