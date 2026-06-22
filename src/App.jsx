import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import MainSite from "./pages/MainSite";
import ContactPage from "./pages/ContactPage";
import Nebula from "./components/Nebula";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Nebula />
        <Routes>
          <Route path="/"        element={<MainSite />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AppProvider>
    </ErrorBoundary>
  );
}
