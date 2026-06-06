import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import MainSite from "./pages/MainSite";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/"        element={<MainSite />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AppProvider>
  );
}
