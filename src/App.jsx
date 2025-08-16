import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkliste from "./pages/checkliste";
import Beratung from "./pages/beratung";
import Whitepaper from "./pages/whitepaper";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beratung" element={<Beratung />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
      </Routes>
    </>
  );
}
