import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import ProvenExpertWidget from "../components/ProvenExpertWidget";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import Speakers from "../components/Speakers";
import { Toaster } from "react-hot-toast";
import FAQ from "../components/FAQ";
import TeamSection from "../components/TeamsSection";
import * as FaIcons from "react-icons/fa";
import ContactModal from "../components/Contact";
import Countdown from "../components/Countdown";
import client, { urlFor } from "../sanityClient";

const iconMap = {
  training: (
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
  selfLearning: (
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
  certification: (
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
};

const Checkliste = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [loadingCountdown, setLoadingCountdown] = useState(true);
  const [content, setContent] = useState(null);
  const [loadingContent, setLoadingContent] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContact = () => setIsModalOpen(true);
  const closeContact = () => setIsModalOpen(false);

  // Countdown aus Sanity laden
  useEffect(() => {
    client
      .fetch(`*[_type == "Countdown"][0]{ showCountdown }`)
      .then((data) => {
        setShowCountdown(data?.showCountdown ?? false);
        setLoadingCountdown(false);
      })
      .catch(() => setLoadingCountdown(false));
  }, []);

  // Header-Texte aus Sanity laden
  useEffect(() => {
    client
      .fetch(
        `*[_type == "HomeChecklist"][0]{
      headerSubtitle,
      headerTitle,
      headerText,
      buttons[]{
        label,
        actionType,
        link,
        iconName,
        visible,
        file{
          asset->{
            _id,
            url
          }
        }
      },
      mainImage,
      mainImageVisible,
  benefits[] {
    title,
    description,
    visible
  },
         priceBox {
    mainPrice,
    inlineSubText,
    belowText
  },
  gridButton {
    label,
    actionType,
    link,
    iconName,
    visible,
    file {
      asset->{
        _id,
        url
      }
    }
  },
    provenExpertVisible,
    whyAct,
    benefitsHeaderH3,
    benefitsHeaderH2,
    benefitsVisible,
    benefitsList[]{
      iconName,
      title,
      description,
      visible
    },
  imageGrid[] {
  visible,
  wideImage {
    asset->{ url }
  },
  squareImage {
    asset->{ url }
  }
},
    whyConfias,
trainingRows[] {
visible,
  columns[] {
    background,
    items[] {
      type,
      text
    },
    button {
      label,
      actionType,
      link,
      iconName,
      visible,
      file {
        asset-> {
          _id,
          url
        }
      }
    }
  }
}
    }`
      )
      .then((data) => {
        console.log("Sanity Header data:", data);
        setContent(data || {});
        setLoadingContent(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoadingContent(false);
      });
  }, []);

  // Wenn einer der beiden noch lädt → Ladeanzeige
  if (loadingCountdown || loadingContent) {
    return <p>Lädt...</p>;
  }

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
            <p className="text-sm uppercase text-green-600 tracking-wider mb-2 mt-2">
              {content.headerSubtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {content.headerTitle}
            </h1>
            <p className="mb-6">{content.headerText}</p>

            <div className="flex gap-4 flex-wrap">
              {content.buttons
                ?.filter((b) => b.visible)
                .map((btn, idx) => {
                  const IconComponent = FaIcons[btn.iconName] || null;

                  if (btn.actionType === "modal") {
                    return (
                      <button
                        key={idx}
                        onClick={openContact}
                        className="flex items-center bg-black text-white px-5 py-2 rounded space-x-2 transition hover:bg-green-600"
                      >
                        {IconComponent && (
                          <IconComponent className="text-white shrink-0" />
                        )}
                        <span>{btn.label}</span>
                      </button>
                    );
                  }

                  if (btn.actionType === "download" && btn.file?.asset?.url) {
                    return (
                      <a
                        key={idx}
                        href={btn.file.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-black text-white px-5 py-2 rounded space-x-2 transition hover:bg-green-600"
                        download={false}
                      >
                        {IconComponent && (
                          <IconComponent className="text-white shrink-0" />
                        )}
                        <span>{btn.label}</span>
                      </a>
                    );
                  }

                  // Default: Link
                  return (
                    <a
                      key={idx}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-black text-white px-5 py-2 rounded space-x-2 transition hover:bg-green-600"
                    >
                      {IconComponent && (
                        <IconComponent className="text-white shrink-0" />
                      )}
                      <span>{btn.label}</span>
                    </a>
                  );
                })}
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
              {/* Why Act */}
              {content.whyAct?.visible && (
                <div className="w-full bg-white mx-auto p-8 rounded-lg shadow-md hover:shadow-xl transition">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    {content.whyAct.headline}
                  </h2>
                  <ul className="list-disc list-outside space-y-2 text-sm text-left text-gray-600">
                    {content.whyAct.items?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Countdown */}
              {showCountdown && (
                <div className="mt-4 bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 flex items-center justify-center min-h-[120px]">
                  <Countdown />
                </div>
              )}
            </div>

            {/* Column 2: Benefits (3 rows) */}
            {content.benefits
              ?.filter((b) => b.visible)
              .map((benefit, idx) => (
                <div
                  key={idx}
                  className="lg:col-start-2 col-span-1 row-span-1 bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 flex flex-col items-center text-center"
                >
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
                    {benefit.title}
                  </h4>
                  {benefit.description && (
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}

            {/* Column 3: Team (2 rows) */}
            <Speakers
              className="lg:col-start-3 lg:row-start-1 col-span-1 row-span-2"
              docType="HomeWhitepaper"
            />

            {/* Column 3: Button (1 row) */}
            <div className="lg:col-start-3 lg:row-start-3 col-span-1 row-span-1 flex justify-center">
              {content.gridButton?.visible && (
                <div className="w-full max-w-md bg-gray-800 text-white py-6 px-6 rounded-2xl shadow-lg flex flex-col space-y-4 sm:space-y-2">
                  <div className="text-3xl font-bold text-center sm:text-left">
                    {content.priceBox?.mainPrice}
                    <span className="text-sm font-normal ml-2">
                      {content.priceBox?.inlineSubText}
                    </span>
                  </div>
                  <div className="text-lg text-center sm:text-left">
                    {content.priceBox?.belowText}
                  </div>
                  {/* Button hier rein */}
                  {(() => {
                    const btn = content.gridButton;
                    const IconComponent = FaIcons[btn.iconName] || null;

                    if (btn.actionType === "modal") {
                      return (
                        <button
                          onClick={openContact}
                          className="buttoninvert text-white px-6 py-3 w-full"
                        >
                          {IconComponent && (
                            <IconComponent className="inline mr-2" />
                          )}
                          {btn.label}
                        </button>
                      );
                    }

                    return (
                      <a
                        href={
                          btn.actionType === "download" && btn.file?.asset?.url
                            ? btn.file.asset.url
                            : btn.link
                        }
                        download={btn.actionType === "download"}
                        target={btn.actionType === "link" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="buttoninvert text-white px-6 py-3 w-full inline-flex items-center justify-center"
                      >
                        {IconComponent && (
                          <IconComponent className="inline mr-2" />
                        )}
                        {btn.label}
                      </a>
                    );
                  })()}
                </div>
              )}
            </div>
            {/* Column 4: ProvenExpertWidget (3 rows) */}
            {content.provenExpertVisible && (
              <div className="lg:col-start-4 lg:row-start-1 col-span-1 row-span-3 flex items-start justify-center lg:justify-start mt-8 ml-4">
                <ProvenExpertWidget />
              </div>
            )}
          </div>
        </section>
      </Fade>

      {/* Benefits */}
      <Fade direction="up" delay={200} triggerOnce>
        <section
          className="bg-white py-8"
          style={{ display: content.benefitsVisible ? "block" : "none" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-gray-600 text-sm uppercase tracking-widest">
              {content.benefitsHeaderH3 || "Benefits"}
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              {content.benefitsHeaderH2 || "Das bekommen Sie"}
            </h2>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.benefitsList
              ?.filter((item) => item && item.visible !== false)
              .map((feature, i) => (
                <div
                  key={i}
                  className="bg-gray-50 shadow-md hover:shadow-xl transition rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
                    {iconMap[feature.iconName] || null}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h4>
                  {feature.description && (
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </section>
      </Fade>

      {/* Image Grid */}
      <Fade direction="up" delay={200} triggerOnce>
        <section className="bg-white py-8">
          <div className="w-[70%] mx-auto space-y-6">
            {content.imageGrid
              ?.filter((row) => row.visible)
              .map((row, idx) => {
                const isEven = idx % 2 === 1; // gerade Reihen umdrehen

                return (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 ${
                      isEven
                        ? "lg:grid-cols-[50%_50%]"
                        : "lg:grid-cols-[70%_30%]"
                    } gap-4 min-h-[400px]`}
                  >
                    {/* Immer gleiche Bilder */}
                    <div className="h-full">
                      <img
                        src={row.wideImage?.asset?.url}
                        alt="Länglich"
                        className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition"
                      />
                    </div>
                    <div className="h-full">
                      <img
                        src={row.squareImage?.asset?.url}
                        alt="Quadratisch"
                        className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </Fade>

      {/* Why Confias */}
      <Fade direction="up" delay={200} triggerOnce>
        <section
          className="bg-white py-8"
          style={{ display: content.whyConfias.visible ? "block" : "none" }}
        >
          <div className="w-9/10 lg:max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {content.whyConfias.headline}
            </h2>
            <ul className="list-disc list-inside space-y-6 text-sm text-left text-gray-600">
              {content.whyConfias.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </section>
      </Fade>

      {/* Testimonials */}
      <Fade direction="up" delay={200} triggerOnce>
        <section className="bg-white py-8">
          <div className="w-11/12 lg:w-3/4 mx-auto">
            <TestimonialSection docType="HomeWhitepaper" />
          </div>
        </section>
      </Fade>

      {/* Termin buchen */}
      <Fade direction="up" delay={200} triggerOnce>
        {content.trainingRows.map((row, rowIndex) =>
          row.visible !== false ? (
            <section key={rowIndex} className="max-w-7xl mx-auto px-6 py-4">
              <div
                className="grid lg:grid-cols-3 gap-8"
                style={{ gridAutoRows: "minmax(150px, auto)" }}
              >
                {row.columns.map((col, colIndex) => {
                  const bgClass = col.background === "gray" ? "bg-gray-50" : "";
                  return (
                    <div
                      key={colIndex}
                      className={`${bgClass} p-6 rounded-lg transition hover:shadow-xl cursor-pointer`}
                    >
                      {col.items.map((item, i) => {
                        if (item.type === "h2")
                          return (
                            <h2
                              key={i}
                              className="text-2xl font-bold mb-1 text-gray-800 whitespace-pre-line"
                            >
                              {item.text}
                            </h2>
                          );
                        if (item.type === "h3")
                          return (
                            <h3
                              key={i}
                              className="text-lg font-semibold mb-3 text-green-600 whitespace-pre-line"
                            >
                              {item.text}
                            </h3>
                          );
                        if (item.type === "paragraph")
                          return (
                            <p
                              key={i}
                              className="text-gray-700 whitespace-pre-line"
                            >
                              {item.text}
                            </p>
                          );
                        return null;
                      })}

                      {/* Button nur in der rechten Spalte */}
                      {colIndex === 2 &&
                        col.button?.visible &&
                        col.button.label && (
                          <div className="mt-8 flex justify-center items-center">
                            <button
                              onClick={() => {
                                switch (col.button.actionType) {
                                  case "modal":
                                    openContact();
                                    break;
                                  case "link":
                                    if (col.button.link)
                                      window.open(col.button.link, "_blank");
                                    break;
                                  case "download":
                                    if (col.button.file?.asset?.url)
                                      window.open(
                                        col.button.file.asset.url,
                                        "_blank"
                                      );
                                    break;
                                  default:
                                    console.warn(
                                      `Unbekannter Aktionstyp: ${col.button.actionType}`
                                    );
                                }
                              }}
                              className="bg-gray-800 transition hover:bg-green-600 text-white px-8 py-3 rounded-md shadow-lg flex items-center gap-2"
                            >
                              {/* Optional Icon (wenn du Icon-Komponenten hast) */}
                              {col.button.iconName && (
                                <span className="text-lg">{/* Icon */}</span>
                              )}
                              {col.button.label}
                            </button>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null
        )}
      </Fade>

      {/* FAQ */}
      <Fade direction="up" delay={200} triggerOnce>
        <FAQ docType="HomeWhitepaper" />
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <TeamSection docType="HomeWhitepaper" />
      </Fade>

      <Footer />

      {isModalOpen && <ContactModal onClose={closeContact} />}
    </div>
  );
};

export default Checkliste;
