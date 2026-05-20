import { Routes, Route } from "react-router-dom";
import MainSite from "./pages/MainSite";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/"        element={<MainSite />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
