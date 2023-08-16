import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

const carousels = [
  {
    name: "Maria de Almeida",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit magnam modi, asperiores quibusdam unde fugit blanditiis alias distinctio id a voluptatibus dolor earum natus velit, necessitatibus nostrum ducimus repellendus.",
    image: "../../images/maria.jpg",
  },
  {
    name: "Jack smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit magnam modi, asperiores quibusdam unde fugit blanditiis alias distinctio id a voluptatibus dolor earum natus velit, necessitatibus nostrum ducimus repellendus.",
    image: "../../images/jack.jpeg",
  },
  {
    name: "Willem johny",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit magnam modi, asperiores quibusdam unde fugit blanditiis alias distinctio id a voluptatibus dolor earum natus velit, necessitatibus nostrum ducimus repellendus.",
    image: "../../images/willem.jpg",
  },
  {
    name: "Oksana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit magnam modi, asperiores quibusdam unde fugit blanditiis alias distinctio id a voluptatibus dolor earum natus velit, necessitatibus nostrum ducimus repellendus.",
    image: "../../images/oksana.jpeg",
  },
];

const CarouselList = () => {
  const [review, setReview] = useState(0);

  useEffect(() => {}, []);
  return (
    <div className="CarouselList">
      <div className="container">
        {carousels.map((carousel) => {
          return <Carousel {...carousel} />;
        })}
      </div>
    </div>
  );
};

export default CarouselList;
