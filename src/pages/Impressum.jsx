import React from "react";
import Footer from "../components/Footer";

export default function Impressum() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-gray-800">
        <div className="max-w-3xl w-full">
          <div className="mt-4 mb-8">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-800 transition hover:bg-green-600 text-white px-8 py-3 rounded-md shadow-lg flex items-center gap-2"
            >
              Zurück
            </button>
          </div>
          <h1 className="max-w-3xl w-full text-4xl font-bold mb-8 text-left">
            Impressum
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Name und Anschrift:</h2>
            <p className="whitespace-pre-line leading-relaxed text-lg">
              Confias AI Solutions GmbH{"\n"}
              Lange Reihe 15{"\n"}
              20099 Hamburg{"\n"}
              Deutschland
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Kontakt:</h2>
            <p className="text-lg leading-relaxed">
              Telefon:{" "}
              <a href="tel:+494028053399" className="schedule">
                +49 40 2805 3399
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@confias.ai" className="schedule">
                info@confias.ai
              </a>
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Vertretungsberechtigte:
            </h2>
            <p className="text-lg leading-relaxed">
              Jan Schmidt-Prüfer (Geschäftsführer)
              <br />
              Dr. Dirk Weiss (Geschäftsführer)
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Registereintrag:</h2>
            <p className="text-lg leading-relaxed">
              Registergericht: Amtsgericht Hamburg
              <br />
              Registernummer: HR B 180145
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Umsatzsteuer-ID:</h2>
            <p className="text-lg leading-relaxed">DE 36 19 60 187</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Plattform zur Online-Streitbeilegung (OS):
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit, die Sie hier finden:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-lg leading-relaxed">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
