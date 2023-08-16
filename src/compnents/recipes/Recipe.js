import React from "react";
// import image from "../../images/fahsa.jpeg";
const Recipe = ({ imageURL, name, description, id }) => {
    const image = imageURL
  return (
    <div className="recipe-card">
      <img src={process.env.PUBLIC_URL + image} alt={name} />
      <div className="recipes-card-body">
        <h4 className="recipe-name">{name}</h4>
        <p className="recipes-desc">{description}</p>
      </div>
    </div>
  );
};

export default Recipe;
