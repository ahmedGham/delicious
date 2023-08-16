import React from "react";
import CarouselList from "../compnents/carousel/CarouselList";
import Section from "../compnents/UI/Section";
import PricingTables from "../compnents/pricing-tables/PricingTableList";
const Subscribe = () => {
  return (
    <div className="page">
      <Section sectionTitle={"Subscribe"}>
        <PricingTables />
      </Section>
      {/* <Section sectionTitle={"Reviews"}>
        <CarouselList />
      </Section> */}
    </div>
  );
};

export default Subscribe;
