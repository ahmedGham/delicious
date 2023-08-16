import React from "react";

const Step = ({ number, title, explination }) => {
  return (
    <div className="step">
      <div className="step-number">
        <p>{number}</p>
      </div>
      <div className="step-info">
        <h5>{title}</h5>
        <p>{explination}</p>
      </div>
    </div>
  );
};

export default Step;
