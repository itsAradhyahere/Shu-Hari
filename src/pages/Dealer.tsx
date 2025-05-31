// src/pages/Dealer.tsx
import React from 'react';
import CollapsibleText from '../components/CollapsibleText';

const dealerIntro = `
Welcome to ShuHaRi Renewables Dealer Portal. Here, our valued dealers can access detailed information about raw materials and final products.  
Our goal is to provide all necessary resources to support your business and ensure a seamless supply chain.  
`;

const rawMaterials = `
Our raw materials include Saw Dust, Wood Chips, Rice Straw & Husk, Bamboo residues, and other sustainable biomass sources carefully sourced and quality-checked to maintain high standards.
`;

const finalProducts = `
We offer premium Wood Pellets, Briquettes, Biochar, and other biomass-based products manufactured with the latest technologies to ensure efficiency and reliability for your customers.
`;

const Dealer = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-lg animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-yellow-900 mb-8 tracking-wide">Dealer Portal</h1>
      
      <div className="mb-10">
        <CollapsibleText text={dealerIntro} maxLength={250} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-yellow-900 mb-4">Raw Materials</h2>
          <CollapsibleText text={rawMaterials} maxLength={180} />
        </div>

        <div className="bg-yellow-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-yellow-900 mb-4">Final Products</h2>
          <CollapsibleText text={finalProducts} maxLength={180} />
        </div>
      </div>
    </section>
  );
};

export default Dealer;
