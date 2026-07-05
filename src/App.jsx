import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import MainSite from "./pages/MainSite";
import Backdrop from "./components/Backdrop";
import ErrorBoundary from "./components/ErrorBoundary";

// La página NFC se carga aparte: quien escanea la tarjeta
// no descarga el JS del sitio principal, y viceversa.
const ContactPage = lazy(() => import("./pages/ContactPage"));

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Backdrop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"        element={<MainSite />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </AppProvider>
    </ErrorBoundary>
  );
}
