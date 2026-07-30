import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") return "dark";
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
