import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react'; // Optional icon
import type { FC } from 'react';

type HomeProps = {
  phoneNumber: string;
};

const Home: FC<HomeProps> = ({ phoneNumber }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover -z-10 opacity-70"
      >
        <source src="/assets/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glowing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-800/20 to-black/90 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-white text-center px-6 pt-32 md:pt-40"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400 drop-shadow-2xl">
          Welcome to ShuHaRi Renewables
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          🌱 Empowering India with Sustainable Biomass & Clean Energy Solutions.
        </p>

        <motion.a
          href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300"
        >
          <Sparkles className="h-5 w-5 animate-pulse" />
          Chat with Us on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
