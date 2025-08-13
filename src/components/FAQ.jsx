import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import client from "../sanityClient";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "faq"][0]{
          questions[]{
            question,
            answer
          }
        }`
      )
      .then((data) => {
        if (data?.questions) setFaqs(data.questions);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
      });
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqs.length === 0) return <p>Lädt...</p>;

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
