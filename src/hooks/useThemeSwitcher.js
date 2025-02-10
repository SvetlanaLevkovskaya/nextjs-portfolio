import { useEffect, useState } from "react";

export const UseThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  const setTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    const initialMode = theme || "light";
    setMode(initialMode);
    setTheme(initialMode);
  }, []);

  useEffect(() => {
    if (mode) {
      setTheme(mode);
    }
  }, [mode]);

  return [mode, setMode];
};
