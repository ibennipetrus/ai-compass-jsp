import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactModal = ({ onClose }) => {
  const formRef = useRef();

  const copyEmailToClipboard = (e) => {
    e?.preventDefault();
    e?.stopPropagation();

    const email = "info@confias-ki-kompass.de";

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => toast.success("E-Mail-Adresse kopiert!"))
        .catch(() => toast.error("Fehler beim Kopieren."));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        successful
          ? toast.success("E-Mail-Adresse kopiert!")
          : toast.error("Fehler beim Kopieren.");
      } catch (err) {
        toast.error("Copy nicht unterstützt.");
      }
      document.body.removeChild(textArea);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.telefonnummer?.value.trim();
    const preferredDate = form.termin?.value.trim();

    if (!name || !email) {
      toast.error("Bitte fülle alle Pflichtfelder aus.");
      return;
    }

    if (phone && !/^\+?[0-9\s\-]{7,20}$/.test(phone)) {
      toast.error("Bitte gib eine gültige Telefonnummer ein.");
      return;
    }

    const dateRegex =
      /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.(19|20)\d\d$/;
    if (preferredDate && !dateRegex.test(preferredDate)) {
      toast.error("Bitte gib ein gültiges Datum im Format tt.mm.jjjj ein.");
      return;
    }

    emailjs
      .sendForm(
        "service_ryrxjqh",
        "template_l3tko1u",
        formRef.current,
        "5bBaqVxuV7LC_fi4b"
      )
      .then(
        () => {
          toast.success("Danke für deine Nachricht!");
          e.target.reset();
          onClose();
        },
        (error) => {
          toast.error("Fehler: " + error.text);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white min-h-full w-full p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-white bg-gray-800 absolute top-4 right-4 w-9 h-9 text-xl flex items-center justify-center  close-btn"
          aria-label="Close"
          type="button"
        >
          ×
        </button>

        {/* 🟩 Zentrale Wrapper-Box für Inhalt */}
        <div className="max-w-2xl mx-auto mt-14 md:mt-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Interesse an der Schulung? Melde dich bei uns.
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label>Name *</label>
            <input
              name="name"
              className="p-2 border rounded"
              placeholder="Unternehmen"
              required
            />

            <label>Name</label>
            <input
              name="ansprechpersonname"
              className="p-2 border rounded"
              placeholder="Ansprechperson"
            />

            <label>Telefonnummer</label>
            <input
              name="telefonnummer"
              type="tel"
              className="p-2 border rounded"
              placeholder="+49 151 23456789"
            />

            <label>Email *</label>
            <input
              name="email"
              type="email"
              className="p-2 border rounded"
              placeholder="john@company.com"
              required
            />

            <label>Gewünschter Termin</label>
            <input
              name="termin"
              type="text"
              className="p-2 border rounded"
              placeholder="tt.mm.jjjj"
            />

            <label>Details</label>
            <textarea
              name="message"
              className="p-2 border rounded min-h-[100px]"
              placeholder="Persönliche Nachricht..."
            ></textarea>

            <button
              type="submit"
              className="bg-gray-800 text-white p-2 rounded hover:bg-neutral-800"
            >
              Senden
            </button>
          </form>

          {/* 🟩 Zentraler Kontaktbereich */}
          <div className="text-center mt-8">
            <p>Direkter Kontakt:</p>
            <a
              href="#"
              className="underline block mt-1 schedule cursor-pointer"
              onClick={copyEmailToClipboard}
            >
              eine E-Mail senden →
            </a>
            <a
              href="https://calendly.com/confiasai/virtual_coffee_ki_kompass"
              target="_blank"
              rel="noopener noreferrer"
              className="underline block mt-1 schedule"
            >
              einen Termin vereinbaren →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
