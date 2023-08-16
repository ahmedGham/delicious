import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import image from "../images/homeImage.png";
import { useHrefListener } from "../compnents/customHooks/useHrefListener";
const WelcomeHeader = () => {
  const { setCurrentHref } = useHrefListener();
  const [t, i18n] = useTranslation(); 
  
  return (
    <section className="section welocme-section">
      <div className="container">
        <button className="btn" onClick={()=>i18n.changeLanguage("ru")}>change lan</button>
        <div className="grid-2">
          <div className="col col-1 wel-info">
            <h1 className="welocme-section-title">{t("title.name.b")}</h1>
            <p>
              {t("headLine")}
            </p>
            <div className="btns">
              <Link
                to="/subscribe"
                className="btn"
                onClick={() => {
                  setCurrentHref("/subscribe");
                }}
              >
                subscribe
              </Link>
              <Link
                to="/recipes"
                className="btn btn-hipster"
                onClick={() => {
                  setCurrentHref("/recipes");
                }}
              >
                show recipes
              </Link>
            </div>
          </div>
          <div className="col col-1 wel-image">
            <img
              src={process.env.PUBLIC_URL + "../images/homeImage.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHeader;
