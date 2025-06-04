import { useState } from "react";
import { motion } from "framer-motion";

const preferences = [
  "High Energy Yield",
  "Low Ash Content",
  "Eco-Friendly",
  "Budget Friendly",
  "Long Burning Time",
] as const;

type Preference = typeof preferences[number];

const recommendations: Record<Preference, string> = {
  "High Energy Yield": "Bamboo Pellets",
  "Low Ash Content": "Coconut Shell Briquettes",
  "Eco-Friendly": "Wood Chips",
  "Budget Friendly": "Agro Waste Pellets",
  "Long Burning Time": "Biochar Logs",
};

const ProductRecommender = () => {
  const [selectedPref, setSelectedPref] = useState<Preference | "">("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = () => {
    if (selectedPref) {
      setRecommendation(recommendations[selectedPref as Preference]);
    } else {
      setRecommendation("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-10">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🔍 Smart Product Recommender
      </motion.h1>

      <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
        <label className="block text-lg font-semibold mb-4 text-gray-700">
          Select your preference:
        </label>
        <select
          className="w-full p-3 border rounded-lg mb-6 focus:ring-green-500 focus:outline-none"
          onChange={(e) => setSelectedPref(e.target.value as Preference | "")}
        >
          <option value="">-- Choose an option --</option>
          {preferences.map((pref) => (
            <option key={pref} value={pref}>
              {pref}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Get Recommendation
        </button>

        {recommendation && (
          <motion.div
            className="mt-6 p-4 bg-green-100 rounded-xl text-center text-green-800 font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Recommended Product: <span className="text-green-900">{recommendation}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductRecommender;