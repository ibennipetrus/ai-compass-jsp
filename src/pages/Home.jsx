import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";
import ProvenExpertWidget from "../components/ProvenExpertWidget";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import Speakers from "../components/Speakers";
import { Toaster } from "react-hot-toast";
import FAQ from "../components/FAQ";
import TeamSection from "../components/TeamsSection";
import { FaCoffee, FaCheckCircle } from "react-icons/fa";
import ContactModal from "../components/Contact";
import Countdown from "../components/Countdown";

const features = [
  {
    title: "Live Training",
    description:
      "90 Minuten KI-Grundlagen für das ganze Team. Interaktive Sessions mit Experten – direkt und in Echtzeit.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5V6.75A2.25 2.25 0 0012.75 4.5h-9A2.25 2.25 0 001.5 6.75v10.5A2.25 2.25 0 003.75 19.5h9A2.25 2.25 0 0015 17.25v-3.75m0 0l3.75 3.75M15 13.5l3.75-3.75"
        />
      </svg>
    ),
  },
  {
    title: "Self Learning",
    description:
      "Modulares Selbstlernpaket je Mitarbeitenden. Lerne flexibel im eigenen Tempo mit hochwertigen Kursinhalten",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a6.75 6.75 0 016.75 6.75c0 2.455-1.313 3.74-2.25 4.537A2.25 2.25 0 0015 16.5v.75A2.25 2.25 0 0112.75 19.5h-1.5A2.25 2.25 0 019 17.25v-.75a2.25 2.25 0 00-1.5-2.213C6.563 13.49 5.25 12.205 5.25 9.75A6.75 6.75 0 0112 3z"
        />
      </svg>
    ),
  },
  {
    title: "Certification",
    description:
      "Teilnahmebestätigung / Zertifikat. Erhalte ein anerkanntes Zertifikat nach erfolgreichem Abschluss.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a5.25 5.25 0 10-7.18 0M9.75 17.25l-1.5 4.5 3-2.25 3 2.25-1.5-4.5"
        />
      </svg>
    ),
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContact = () => setIsModalOpen(true);
  const closeContact = () => setIsModalOpen(false);

  return (
    <div className="font-sans bg-white text-gray-900 ">
      <Toaster position="top-center" />
      {/* Header mit Bild und Buttons */}

      <header
        className="relative bg-cover bg-center text-white py-4 lg:py-8 lg:bg-[position:0_45%]"
        style={{
          backgroundImage: 'url("images/Background-image.png")',
          backgroundSize: "100%",
        }}
      >
       
          <div className="lg:max-w-[80%] mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
            {/* Textblock */}
            <div className="max-w-xl md:pr-12 lg:pr-24">
              <p className="text-sm uppercase text-green-600 tracking-wider mb-2">
                Neue Veranstaltung 2025
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Rechtskonforme KI in 90 Minuten
              </h1>
              <p className="mb-6">
                Bußgelder vermeiden, Klarheit schaffen, rechtliche Sicherheit
                gewinnen
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={openContact}
                  className="flex items-center bg-black text-white px-5 py-2 rounded space-x-2 transition hover:bg-green-600"
                >
                  <FaCheckCircle className="text-white shrink-0" />
                  <span className="text-left text-start">
                    Jetzt Schulung sichern
                  </span>
                </button>

                <a
                  href="https://calendly.com/confiasai/virtual_coffee_ki_kompass?month=2025-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-black px-5 py-2 rounded space-x-2 transition hover:bg-green-600"
                >
                  <FaCoffee className="text-white" />
                  <span>Virtueller Kaffee</span>
                </a>
              </div>
            </div>
          </div>
      </header>

      {/* Logo Infinite Slider */}
      <section className="w-full overflow-hidden bg-white py-3 lg:py-2">
        <div className="loop-scroll flex gap-16">
          {[...Array(3)].flatMap(() =>
            [...Array(16)].map((_, i) => (
              <img
                key={`${Math.random()}-${i}`} // oder `${set}-${i}` für sauberen Key
                loading="lazy"
                src={`Logos/logo${i + 1}.${
                  i === 2 || i === 10 || i === 12 || i === 13 ? "svg" : "png"
                }`}
                className="h-10 lg:h-15 w-auto"
                alt={`Logo ${i + 1}`}
              />
            ))
          )}
        </div>
      </section>

      {/* Grid */}
      <Fade direction="up" delay={200} triggerOnce>
        <section className=" max-w-[80%] mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[40%_20%_28%_12%] lg:grid-rows-[auto_auto_auto] grid-rows-3 gap-4">
            {/* Column 1: Großes Bild (2 rows) */}
            <div className="lg:col-start-1 col-span-1 row-span-3 flex flex-col">
              {/* Bild */}
              <div className="flex-shrink-0">
                <img
                  src="images/KI Online-Training Plattform Übersicht.png"
                  alt="Großes Bild"
                  className="w-full h-auto object-contain shadow-lg hover:shadow-xl transition rounded-lg"
                />
              </div>

              {/* Countdown */}
              <div className="mt-4 bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 flex items-center justify-center min-h-[120px]">
                <Countdown />
              </div>
            </div>

            {/* Column 2: Benefits (3 rows) */}
            <div className="lg:col-start-2 col-span-1 row-span-1 bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 flex flex-col items-center text-center">
              {/* Benefit 1 */}
              <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Gesetzeskonform</h4>
              <p className="text-sm text-gray-600">
                Pflichtschulung (90Min) für alle Mitarbeitenden.
              </p>
            </div>

            <div className="lg:col-start-2 col-span-1 row-span-1 bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 flex flex-col items-center text-center">
              {/* Benefit 2 */}
              <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Zertifikat inklusive
              </h4>
              <p className="text-sm text-gray-600">Auditfähig und förderbar</p>
            </div>

            <div className="lg:col-start-2 col-span-1 row-span-1 bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 flex flex-col items-center text-center">
              {/* Benefit 3 */}
              <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Inklusive Förderbetrag
              </h4>
            </div>

            {/* Column 3: Team (2 rows) */}
            <Speakers className="lg:col-start-3 lg:row-start-1 col-span-1 row-span-2" />

            {/* Column 3: Button (1 row) */}
            <div className="lg:col-start-3 lg:row-start-3 col-span-1 row-span-1 flex justify-center">
              <div
                className="w-full max-w-md bg-gray-800 text-white py-6 px-6 rounded-2xl shadow-lg 
    flex flex-col space-y-4 sm:space-y-2"
              >
                <div className="text-3xl font-bold text-center sm:text-left">
                  1750€
<span className="text-sm font-normal ml-2">(inkl. Förderbetrag)</span>
                </div>
                <div className="text-lg text-center sm:text-left">
                  bis 50 Personen inklusiv
                </div>
                <button
                  onClick={openContact}
                  className="buttoninvert text-white px-6 py-3 w-full"
                >
                  Schulung sichern
                </button>
              </div>
            </div>
            {/* Column 1: ProvenExpertWidget (3 rows) */}
            <div className="lg:col-start-4 lg:row-start-1 col-span-1 row-span-3 flex items-start justify-center lg:justify-start mt-8 ml-4">
              <ProvenExpertWidget />
            </div>
          </div>
        </section>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <section className="bg-white  py-8">
          <div className="w-9/10 lg:max-w-[30%] mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Warum Sie jetzt handeln müssen
            </h2>
            <ul className="list-disc list-outside space-y-6 text-sm text-left text-gray-600">
              <li className="">
                EU AI Act – ab 2025 haften Unternehmen für ihren KI-Einsatz.
              </li>
              <li>
                Bei Verstößen drohen Bußgelder von bis zu 3% des Umsatzes.
              </li>
              <li>
                8 von 10 Mittelständlern nutzen bereits KI – oft ohne rechtliche
                Prüfung.
              </li>
              <li>
                Die Herausforderung: Anforderungen verstehen und umsetzen.
              </li>
            </ul>
          </div>
        </section>
      </Fade>

      {/* Benefits */}
      <Fade direction="up" delay={200} triggerOnce>
        <section className="bg-white py-8">
          <div className="text-center mb-10">
            <h3 className="text-gray-600 text-sm uppercase tracking-widest">
              Benefits
            </h3>
            <h2 className="text-3xl font-bold mt-2">Das bekommen Sie</h2>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 shadow-md hover:shadow-xl transition rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Fade>

      {/* Image Grid */}
      <Fade direction="up" delay={200} triggerOnce>
        <section className=" bg-white py-8">
          <div className="w-[70%] mx-auto">
            {/* Grid 1: links breiter */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 min-h-[400px]">
              <div className="h-full">
                <img
                  src="images/Screenshot.png"
                  alt="Länglich"
                  className="rounded-lg shadow-md hover:shadow-xl transition"
                />
              </div>
              <div className="h-full">
                <img
                  src="images/Business Training Session in Progress.png"
                  alt="Quadratisch"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition"
                />
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Image Grid */}
      <Fade direction="up" delay={200} triggerOnce>
        <section className=" bg-white py-8">
          <div className="w-[70%] mx-auto">
            {/* Grid 1: links breiter */}
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-4 min-h-[400px]">
              <div className="w-full">
                <img
                  src="images/Anna.png"
                  alt="Quadratisch"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition"
                />
              </div>
              <div className="h-full">
                <img
                  src="images/KI Online-Training Plattform Übersicht.png"
                  alt="Länglich"
                  className="rounded-lg shadow-md hover:shadow-xl transition"
                />
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <section className="bg-white  py-8">
          <div className="w-9/10 lg:max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Warum Confias? Und warum jetzt?
            </h2>
            <ul className="list-disc list-inside space-y-6 text-sm text-left text-gray-600">
              <li className="">
                Vermeiden Sie Bußgelder bis zu 3 % des Umsatzes
              </li>
              <li>Geben Sie Ihrem Team einen breiten Einblick in KI.</li>
              <li>Profitieren Sie von einem bewährten Konzept</li>
            </ul>
          </div>
        </section>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <section className="bg-white py-8">
          <div className="w-11/12 lg:w-3/4 mx-auto">
            <TestimonialSection />
          </div>
        </section>
      </Fade>

      {/* Termin buchen */}
      <Fade direction="up" delay={200} triggerOnce>
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div
            className="grid lg:grid-cols-3 gap-8"
            style={{ gridTemplateRows: "repeat(2, minmax(150px, auto))" }}
          >
            {/* Erste Reihe */}
            <div className="p-6 rounded-lg transition hover:shadow-xl cursor-pointer">
              <h3 className="text-lg font-semibold mb-1 text-gray-800 whitespace-pre-line">
                ➔ Alle Hierarchiestufen und Abteilungen{"\n"}➔ Einheitliche
                Grundlagen statt Insellösungen{"\n"}➔ Ängste abbauen, produktive
                Nutzung fördern{"\n"}➔ Eigene, unkontrollierte KI-Tools
                vermeiden
              </h3>
            </div>

            <div className="p-6 rounded-lg shadow-md transition hover:shadow-xl cursor-pointer bg-gray-50">
              <h2 className="text-2xl font-bold mb-1 text-gray-800">
                Modulübersicht
              </h2>
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Was Sie in 90 Minuten erwartet
              </h3>
              <p className="text-gray-700 mt-2 whitespace-pre-line">
                Modul 1: Einführung in Künstliche Intelligenz{"\n"}
                Was ist KI? Warum verändert sie unsere Arbeitswelt? Welche
                Chancen und Risiken bestehen?
              </p>
            </div>

            <div className="p-6 rounded-lg transition hover:shadow-xl cursor-pointer">
              <h2 className="text-2xl font-bold mb-1 text-gray-800">
                Ein Training für das ganze Unternehmen
              </h2>
              {/* kein subtitle */}
              <p className="text-gray-700 mt-4 whitespace-pre-line">
                Pflichtschulung gemäß EU AI Act. Einheitliches KI-Verständnis,
                klare Regeln. Motivierender Einstieg.
              </p>
            </div>

            {/* Zweite Reihe */}
            <div className="p-6 rounded-lg transition hover:shadow-xl cursor-pointer">
              <h2 className="text-2xl font-bold mb-1 text-gray-800">
                Warum Sie jetzt handeln müssen
              </h2>
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                EU AI Act – ab 2025 haften Unternehmen für ihren KI-Einsatz.
              </h3>
              <p className="text-gray-700 whitespace-pre-line">
                Bei Verstößen drohen Bußgelder von bis zu 3% des Umsatzes.{"\n"}
                8 von 10 mittelständischen Unternehmen nutzen bereits KI – oft
                ohne rechtliche Prüfung oder Schulung.{"\n"}
                Die Herausforderung: Anforderungen verstehen und umsetzen.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md transition hover:shadow-xl cursor-pointer bg-gray-50">
              {/* Special case mit 2 subtitles + descriptions */}
              <div className="mb-4 last:mb-0">
                <h3 className="text-lg font-semibold mb-1 text-green-600">
                  Modul 2: Der EU AI Act im Überblick
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  Was regelt das neue Gesetz?{"\n"}Wer ist betroffen?{"\n"}
                  Welche Pflichten gelten konkret?
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-green-600">
                  Modul 3: Umsetzung & Checkliste für Ihr Unternehmen
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  Praktische Sofortmaßnahmen,{"\n"}Handlungsempfehlungen,{"\n"}
                  Vorlage zur Dokumentation
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-1 text-gray-800">
                Transparente Preise – keine Überraschungen
              </h2>
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Statt 3.500 € nur 1.750 €
              </h3>
              <p className="text-gray-700 mt-2 whitespace-pre-line">
                gefördert über das Bundesamt für Wirtschaft und
                Ausfuhrkontrolle.
              </p>
              {/* Button mittig in der zweiten Reihe */}
              <div className="col-span-1 mt-8 flex justify-center items-center">
                <button
                  onClick={openContact}
                  className="bg-gray-800 transition hover:bg-green-600 text-white px-8 py-3 rounded-md shadow-lg"
                >
                  Jetzt Training buchen
                </button>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <FAQ />
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <TeamSection />
      </Fade>

      <Footer />

      {isModalOpen && <ContactModal onClose={closeContact} />}
    </div>
  );
};

export default Home;
