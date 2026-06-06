import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#07070a" : "#ffffff";
    document.body.style.transition = "background-color 0.3s ease";
  }, [dark]);

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  const toggleDark = () => setDark((d) => !d);

  return (
    <AppContext.Provider value={{ lang, dark, toggleLang, toggleDark }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
