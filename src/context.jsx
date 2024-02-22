import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  console.log(storedDarkMode);
  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleDarkTheme = (e) => {
    e.preventDefault();
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", isDarkTheme);
    // document.body.className = isDarkTheme ? "dark-theme" : "";
    const body = document.querySelector("body");

    body.classList.toggle("dark-theme");
  };
  const greeting = "hello ana";

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
