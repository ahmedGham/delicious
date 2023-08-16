import React, { useState } from "react";
import Pagination from "../compnents/pagination/Pagination";
import RecipesList from "../compnents/recipes/RecipesList";

const recipes = [
  {
    id: 1,
    name: "Mandi",
    imageURL: "../../images/mandi.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 2,
    name: "Meat Mandi",
    imageURL: "../../images/meat-mandi.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 3,
    name: "fried fish",
    imageURL: "../../images/fried-fish.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 4,
    name: "Meat Auzi",
    imageURL: "../../images/meat-auzi.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 5,
    name: "Fahsa",
    imageURL: "../../images/fahsa.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 6,
    name: "Zurbian",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 7,
    name: "Zurbian7",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 8,
    name: "Zurbian8",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 9,
    name: "Zurbian9",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 10,
    name: "Zurbian10",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 11,
    name: "Zurbian11",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 12,
    name: "Zurbian12",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 13,
    name: "Zurbian13",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 14,
    name: "Fahsa14",
    imageURL: "../../images/fahsa.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 15,
    name: "Zurbian15",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 16,
    name: "Zurbian16",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 17,
    name: "Zurbian17",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 18,
    name: "Zurbian18",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 19,
    name: "Zurbian19",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 20,
    name: "Zurbian20",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 21,
    name: "Zurbian21",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
  {
    id: 22,
    name: "Zurbian22",
    imageURL: "../../images/zurbian.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ratione.",
  },
];
const Recipes = () => {
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">
          Recipes
          <div className="title-underline"></div>
        </h1>
        <RecipesList currentItems={currentItems} />
        <Pagination allItems={recipes} setCurrentItems={setCurrentItems} />
      </div>
    </div>
  );
};

export default Recipes;
