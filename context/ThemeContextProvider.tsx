"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type theme = "light" | "dark";
type themeContextProps = {
  children: React.ReactNode;
};
type themeContextType = {
  theme: theme;
  themeHandler: () => void;
};
const themeContext = createContext<themeContextType | null>(null);
const ThemeContextProvider = ({ children }: themeContextProps) => {
  const [theme, setTheme] = useState<theme>("light");
  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <themeContext.Provider
      value={{
        theme,
        themeHandler,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;

export function useTheme() {
  const context = useContext(themeContext);
  if (context === null) {
    throw new Error("useTheme should be used within themeContextProvider");
  }
  return context;
}
