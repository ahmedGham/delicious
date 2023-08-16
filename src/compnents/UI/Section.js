import React from "react";

const Section = ({ sectionTitle, children }) => {
  return (
    <section className="section">
      <h1 className="title">
        {sectionTitle}
        <div className="title-underline"></div>
      </h1>
      {children}
    </section>
  );
};

export default Section;
