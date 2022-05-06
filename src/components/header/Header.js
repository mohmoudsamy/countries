// Icon Link
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const moon = <FontAwesomeIcon icon={faMoon} />;

const Header = () => {
  let dark = "dark__mode";
  const toggleDarkMode = () => {
    document.body.classList.toggle(dark);
  };

  const storeDarkMode = () => {
    if (document.body.classList.contains(dark)) {
      localStorage.setItem("modeColor", dark);
    } else {
      localStorage.removeItem("modeColor");
    }
  };

  window.onload = () => {
    if (localStorage.getItem("modeColor")) {
      document.body.classList.add(dark);
    }
  };

  return (
    <>
      <div className="header">
        <div className="container flex__between">
          <div className="header__text">Where in the world?</div>
          <div
            className="header__icon"
            onClick={() => {
              toggleDarkMode();
              storeDarkMode();
            }}
          >
            {moon} Dark Mode
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
