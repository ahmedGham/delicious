import React from "react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const PricingTable = ({ header, price, advantages, description }) => {
  console.log(header.toLowerCase());
  return (
    <div className={`pricing-table ${header.toLowerCase()}-pricing-table`}>
      <div className="header">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
      <div className="body">
        <div className="price">
          <h2>{`$${price}`}</h2>
          <div className="small-title-underline"></div>
        </div>
        <Link to="#" className="btn">
          subscribe
        </Link>
        <div className="advantages">
          <ul>
            {advantages.map((adv) => {
              return (
                <div className="adv">
                  <div className="icon">
                    <AiFillCheckCircle />
                  </div>
                  <li>{adv}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
