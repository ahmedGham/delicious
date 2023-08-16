import React from "react";
import PricingTable from "./PricingTable";
const pricingTables = [
  {
    id: 1,
    header: "Bronze",
    price: "10",
    time: "a month",
    advantages: ["Lorem ipsum dolor sit.", "Lorem ipsum dolor sit."],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, natus!",
  },
  {
    id: 2,
    header: "Silver",
    price: "20",
    time: "3 months",
    advantages: [
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
    ],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, natus!",
  },
  {
    id: 3,
    header: "Gold",
    price: "30",
    time: "6 months",
    advantages: [
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
    ],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, natus!",
  },
];

const PricingTableList = () => {
  return (
    <div className="pricing-tables">
      <div className="container">
        {pricingTables.map((pricingTable) => {
          return <PricingTable {...pricingTable} />;
        })}
      </div>
    </div>
  );
};

export default PricingTableList;
