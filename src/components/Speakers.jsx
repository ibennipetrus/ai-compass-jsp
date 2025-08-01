import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const speakers = [
  {
    name: "Jan Schmidt-Prüfer",
    title: "Geschäftsführer,\nConfias AI Solutions",
    image: "images/Jan.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/janschmidt2/",
      email: "j.schmidt@confias.ai",
    },
  },
  {
    name: "Dr. Dirk Weiss",
    title: "Geschäftsführer,\nConfias AI Solutions",
    image: "images/Dirk.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/dirkweiss/",
      email: "d.weiss@confias.ai",
    },
  },
];

export default function Speakers({ className = "" }) {
  const copyToClipboard = (text, event) => {
    event?.preventDefault();
    event?.stopPropagation();

    const currentScroll = window.scrollY;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.success(`Copied email: ${text}`);
          window.scrollTo(0, currentScroll); // Scrollposition zurücksetzen
        })
        .catch(() => toast.error("Failed to copy"));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          toast.success(`Copied email: ${text}`);
          window.scrollTo(0, currentScroll); // Scrollposition zurücksetzen
        } else {
          toast.error("Failed to copy");
        }
      } catch (err) {
        toast.error("Copy not supported");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className={className + " px-4 lg:px-0"}>
      <div className="text-center">
        <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-1 py-12 lg:py-0">
          Schulungspersonal
        </h2>
        <h3 className="text-2xl font-bold mb-4">Unsere Redner</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              <div className="relative mb-8">
                <div className="rounded-full p-2 ring-2 ring-green-600">
                  <div className="rounded-full p-2 ring-2 ring-green-300">
                    <div className="rounded-full overflow-hidden w-32 h-32 bg-gray-200">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover scale-150"
                        style={{ transform: "translateY(+10%)" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white rounded-full px-4 py-1 shadow-md">
                  <a
                    href={speaker.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaLinkedinIn className="fill-green-600 hover:fill-green-900 transition-colors" />
                  </a>
                  <span
                    onClick={(e) => {
                      e.preventDefault?.();
                      e.stopPropagation?.();
                      copyToClipboard(speaker.socials.email, event);
                    }}
                    className="cursor-pointer text-green-600 hover:text-green-900 transition-colors"
                  >
                    <FaEnvelope />
                  </span>
                </div>
              </div>
              <div className="text-lg font-semibold mt-4">{speaker.name}</div>
              <div className="text-sm text-gray-500 whitespace-pre-line">
                {speaker.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
