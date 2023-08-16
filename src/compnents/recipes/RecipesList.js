import React from "react";
import Recipe from "./Recipe";



const RecipesList = ({ currentItems }) => {
  return (
    <div className="recipesList">
      {currentItems.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};

export default RecipesList;
