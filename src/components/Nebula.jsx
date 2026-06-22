import { useApp } from "../context/AppContext";

export default function Nebula() {
  const { dark } = useApp();
  return <div className={dark ? "nebula nebula--dark" : "nebula"} aria-hidden="true" />;
}
