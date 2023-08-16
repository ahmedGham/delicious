import React from "react";

import Step from "./Step";
const steps = [
  {
    number: 1,
    title: "Sign in or Register",
    explination: "Bloggers need to have account to be identified.",
  },
  {
    number: 2,
    title: "Fill the form",
    explination: "Fill all required fields.",
  },
  {
    number: 3,
    title: "Wait for the approval",
    explination:
      "ِA recipe must meet all the requirments.",
  },
  {
    number: 4,
    title: "Recipe succeddfully added",
    explination: "A message will arrive to you.",
  },
];

const Steps = () => {
  return (
    <div className="steps">
      <div className="container">
        <h3>Your Recipe-adding journey:</h3>
        <div>
          {steps.map((step) => {
            return <Step {...step} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Steps;
