import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const hrefContext = React.createContext();

const HrefProvider = ({ children }) => {
  const [currentHref, setCurrentHref] = useState(useLocation().pathname);

  useEffect(() => {
    document.querySelector(".navbar .active")?.classList.remove("active");
    const opendLink = [...document.querySelectorAll(".navbar .link")].find(
      (link) => link.getAttribute("href") === currentHref
    );
    opendLink.classList.add("active");
  }, [currentHref]);

  return (
    <hrefContext.Provider value={{ currentHref, setCurrentHref }}>
      {children}
    </hrefContext.Provider>
  );
};

export const useHrefListener = () => {
  return useContext(hrefContext);
};

export default HrefProvider;
