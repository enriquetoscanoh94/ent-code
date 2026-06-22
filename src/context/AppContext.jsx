import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.lang = lang;
  }, [dark, lang]);

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  const toggleDark = () => setDark((d) => !d);

  return (
    <AppContext.Provider value={{ lang, dark, toggleLang, toggleDark }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
