import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Optional: scrollt zur Seitenoberkante
    AOS.refresh(); // Aktualisiert AOS bei jeder Route
  }, [location.pathname]);

  return null;
}
