import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  console.log(isDarkTheme);

  return (
    <section className="container1">
      <button className="btnx" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <MdWbSunny className="icon1" />
        ) : (
          <FaMoon className="icon2" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
