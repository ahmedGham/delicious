import React from "react";
import AddRecipeForm from "../compnents/forms/AddRecipeForm";
import Steps from "../compnents/steps/Steps";
import Section from "../compnents/UI/Section";

const AddRecipe = () => {
  return (
    <div className="page">
      <Section sectionTitle={"Add Recipe"}>
        <Steps />
      </Section>
      <Section sectionTitle={"Recipe Form"}>
        <AddRecipeForm/>
      </Section>
    </div>
  );
};

export default AddRecipe;
