import { useState, useEffect } from "react";
import { AppContext } from "./context";

export function AppProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <AppContext.Provider value={{ lang, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
}
