import React, { useEffect, useState } from "react";
import client from "../sanityClient";

const Testimonial = ({ image, name, position, text }) => (
  <div className="relative bg-gray-50 p-8 sm:p-12 rounded-lg shadow-lg max-w-full sm:max-w-4xl mx-auto">
    <span className="absolute top-3 left-4 text-9xl text-gray-300 select-none">
      “
    </span>
    <div className="flex items-center space-x-6 mb-8">
      <img
        src={image}
        alt={name}
        className="w-25 h-25 rounded-full object-cover border-4 border-white shadow-md"
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-md text-gray-500">{position}</p>
      </div>
    </div>
    <p className="text-gray-700 italic leading-relaxed">{text}</p>
  </div>
);

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Homepage"][0]{
          testimonialsSection {
            visible,
            testimonials[] {
              name,
              position,
              text,
              "imageUrl": image.asset->url
            }
          }
        }`
      )
      .then((data) => {
        if (data?.testimonialsSection) {
          setVisible(data.testimonialsSection.visible);
          if (data.testimonialsSection.testimonials)
            setTestimonials(data.testimonialsSection.testimonials);
        }
      })
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!visible || testimonials.length === 0) return null;

  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Kundenstimmen</h2>

      <Testimonial
        {...testimonials[index]}
        image={testimonials[index].imageUrl}
      />

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevTestimonial}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Zurück
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Weiter
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
