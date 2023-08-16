import React from 'react'
import PricingTables from '../compnents/pricing-tables/PricingTableList';

const SubscribeSection = () => {
  return (
    <section className="section">
      <h1 className="title">
        Subscribe
        <div className="title-underline"></div>
      </h1>
      <PricingTables/>
    </section>
  );
}

export default SubscribeSection