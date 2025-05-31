// src/pages/About.tsx
import CollapsibleText from '../components/CollapsibleText';

const aboutContent = `
ShuHaRi Renewables is committed to revolutionizing the biomass energy sector through sustainable innovation and cutting-edge technology. Our mission is to provide eco-friendly, efficient, and affordable renewable energy solutions that empower communities and protect the planet.

With years of expertise in biomass fuels like wood pellets, briquettes, and agricultural residues, we ensure quality products and reliable supply chains. We believe in transparency, social impact, and fostering partnerships that lead to a greener future.

Join us in our journey to create cleaner energy alternatives and make a lasting environmental impact.
`;

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-lg animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-green-800 mb-8 tracking-wide">About ShuHaRi Renewables</h1>
      <CollapsibleText text={aboutContent} maxLength={300} />
    </section>
  );
};

export default About;
