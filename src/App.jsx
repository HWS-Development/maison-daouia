import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.location.replace("https://maison-daouia-doqdobdbgmseg8ox.builder-preview.com/");
  }, []);

  return null; // nothing will render, it will redirect immediately
}
