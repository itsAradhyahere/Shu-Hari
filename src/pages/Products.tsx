// src/pages/Products.tsx
import CollapsibleText from '../components/CollapsibleText';

const products = [
  {
    id: 1,
    name: 'Saw Dust',
    image: '/public/images/SawDust.jpg',
    description: `High-quality sawdust sourced from sustainable forestry operations. Ideal for pelletizing and briquetting.`,
  },
  {
    id: 2,
    name: 'Wood Chips',
    image: '/public/images/Wood Chips.jpg',
    description: `Premium wood chips processed for bioenergy applications and raw material supply.`,
  },
  {
    id: 3,
    name: 'Rice Straw & Husk',
    image: '/public/images/Rice Straw and Husk.jpg',
    description: `Agricultural residue carefully collected and prepared as a renewable biomass resource.`,
  },
  {
    id: 4,
    name: 'Wood Pellets',
    image: '/public/images/Wood Pellets.jpg',
    description: `Certified wood pellets manufactured with precision for efficient and clean burning.`,
  },
  {
    id: 5,
    name: 'Briquette',
    image: '/public/images/Briquette.jpg',
    description: `Eco-friendly briquettes made from compressed biomass materials for sustainable heating solutions.`,
  },
  {
    id: 6,
    name: 'Bamboo',
    image: '/public/images/Bamboo.jpg',
    description: `Renewable bamboo biomass sourced from responsible plantations.`,
  },
  {
    id: 7,
    name: 'Biochar',
    image: '/public/images/Biochar.jpg',
    description: `Carbon-rich biochar produced from pyrolysis, enhancing soil quality and carbon sequestration.`,
  },
];

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-lg animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-green-900 mb-12 tracking-wide text-center">
        Our Products
      </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h2>
              <CollapsibleText text={product.description} maxLength={80} />
            </div>
          ))}
        </div>
            </section>
        );
      }
      
      export default Products;
