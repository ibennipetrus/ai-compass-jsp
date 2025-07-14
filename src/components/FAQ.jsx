import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "Wie läuft die Schulung ab?",
      answer:
        "Die Schulung besteht aus einem kompakten Online-Modul und einer ergänzenden Selbstlern-Einheit. Alles ist digital, flexibel und ohne Vorkenntnisse machbar.",
    },
    {
      question: "Müssen alle Mitarbeitenden teilnehmen?",
      answer:
        "Ja. Der Al Act sieht vor, dass Unternehmen Ihre Mitarbeitenden sensibilisieren und schulen - besonders jene, die KI-Systeme auswählen, anwenden oder verantworten.",
    },
    {
      question: "Wie viel Zeit muss ich einplanen?",
      answer:
        "Insgesamt nur ca. 90 Minuten jeweils für das live Online-Modul sowie für das Self-Learning. Die Module des Self-Learnings sind flexibel abrufbar - ideal in den Arbeits- alltag integrierbar.",
    },
    {
      question: "Welche technischen Vorraussetzungen gibt es?",
      answer:
        "Ein Internetzugang und ein moderner Browser reichen aus. Kein Software-Download notwendig.",
    },
    {
      question: "Gibt es ein offizielles Zertifikat?",
      answer:
        "Ja. Nach Abschluss erhalten alle Teilnehmenden eine personalisierte Tellnahmebestätigung - auditfähig und rechtskonform",
    },
    {
      question: "Ist die Schulung förderfähig?",
      answer:
        "Ja. Die Schulungsmaßnahme wird über das Förderprogramm des BAFA bezuschusst. Wir übernehmen die Antragstellung auf Basis Ihrer Angaben und garantieren nachfolgend den Betrag des Zuschusses (Voraussetzung: KMU der gewerblichen Wirtschaft).",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto mt-6 p-4 w-9/10 sm:max-w-3xl lg:max-w-5xl">
      <h2 className="text-2xl text-black font-bold mb-6">FAQ</h2>
      {faqs.map(({ question, answer }, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full text-left buttonfaq text-black"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-lg text-black">{question}</span>
            {openIndex === index ? (
              <FaChevronUp className="text-black flex-shrink-0" />
            ) : (
              <FaChevronDown className="text-black flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <p className="mt-4 pr-10 text-gray-700">{answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
