import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-[10000] bg-gray-900 text-white py-8 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start items-start gap-6">
        {/* Logo */}
        <Link to="/">
          <img src="images/Confias-Logo-Dark.png" alt="Logo" className="h-12" />
        </Link>

        {/* Firmeninformationen */}
        <div className="text-sm leading-snug space-y-1">
          <p className="font-semibold">Confias AI Solutions GmbH</p>
          <p>Lange Reihe 15</p>
          <p>20099 Hamburg</p>
          <p>HR B 180145 (Amtsgericht Hamburg)</p>
          <div className="h-4" />{" "}
          {/* größerer Abstand zwischen Adresse und Webdaten */}
          <p>www.confias.ai</p>
          <p>info@confias.ai</p>
        </div>

        {/* Rechtliches */}
        <div className="text-sm space-y-1 ml-6">
          <p>
            <Link to="/impressum" className="footerlinks">
              Impressum
            </Link>
          </p>
          <p>
            <Link to="/datenschutz" className="footerlinks">
              Datenschutzerklärung
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
