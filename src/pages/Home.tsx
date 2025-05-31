// src/pages/Home.tsx
import React from 'react';
import WhatsAppChat from '../components/WhatsAppChat';
import CollapsibleText from '../components/CollapsibleText';

const productList = [
  { id: 1, name: 'Saw Dust', image: '/public/images/SawDust.jpg' },
  { id: 2, name: 'Wood Chips', image: '/public/images/Wood Chips.jpg' },
  { id: 3, name: 'Rice Straw & Husk', image: '/public/images/Rice Straw and Husk.jpg' },
  { id: 4, name: 'Wood Pellets', image: '/public/images/Wood Pellets.jpg' },
  { id: 5, name: 'Briquette', image: '/public/images/Briquette.jpg' },
  { id: 6, name: 'Bamboo', image: '/public/images/Bamboo.jpg' },
  { id: 7, name: 'Biochar', image: '/public/images/Biochar.jpg' },
];

const introText = `ShuHaRi Renewables is committed to providing sustainable biomass energy solutions. Explore our diverse range of products, crafted to fuel a greener future.`;

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover brightness-75"
        src="/assets/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="relative z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80 min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          ShuHaRi Renewables
        </h1>
        <p className="max-w-3xl text-lg md:text-xl mb-10 font-light drop-shadow-md">
          <CollapsibleText text={introText} maxLength={150} />
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl w-full mx-auto">
          {productList.map(({ id, name, image }) => (
            <div
              key={id}
              className="bg-black/40 rounded-lg p-4 hover:bg-green-600 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
              title={name}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-24 object-contain mb-2"
                loading="lazy"
              />
              <span className="block text-sm font-semibold tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Live Chat Button */}
      <WhatsAppChat phoneNumber="+1234567890" />

    </main>
  );
};

export default Home;
