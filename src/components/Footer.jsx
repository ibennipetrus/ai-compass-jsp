import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import client from "../sanityClient";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Homepage"][0]{
          footerSection{
            "logoUrl": logo.asset->url,
            companyName,
            street,
            city,
            hrInfo,
            website,
            email,
            legalLinks
          }
        }`
      )
      .then((data) => setFooterData(data.footerSection))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="relative z-[10000] bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start items-start gap-6">
        {/* Logo */}
        {footerData.logoUrl && (
          <img src={footerData.logoUrl} alt="Logo" className="h-12" />
        )}

        {/* Firmeninformationen */}
        <div className="text-sm leading-snug space-y-1">
          <p className="font-semibold">{footerData.companyName}</p>
          <p>{footerData.street}</p>
          <p>{footerData.city}</p>
          <p>{footerData.hrInfo}</p>
          <div className="h-4" />
          <p>{footerData.website}</p>
          <p>{footerData.email}</p>
        </div>

        {/* Rechtliches */}
        <div className="text-sm space-y-1 ml-6">
          {footerData.legalLinks?.map(({ label, path }, i) => (
            <p key={i}>
              <Link to={path} className="footerlinks">
                {label}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
