import CollapsibleText from '../components/CollapsibleText';

const Dealer = () => {
  return (
    <div className="min-h-screen px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-green-700">
        Become a Dealer
      </h1>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Partner with us to distribute sustainable biomass products like wood pellets, briquettes, and biochar.
      </p>

      <CollapsibleText text={`We are looking for reliable and passionate dealers who believe in renewable energy and environmental sustainability. As a ShuHaRi dealer, you will get access to our high-quality biomass fuel products and training on how to promote and distribute them effectively.

We provide strong dealer support including:

- Competitive pricing
- Technical guidance
- Promotional materials
- Logistics assistance

Interested in becoming a dealer? Contact us and we’ll guide you through the simple onboarding process.`} />
    </div>
  );
};

export default Dealer;
