// src/pages/SavingsCalculator.tsx
import { useState } from 'react';

const SavingsCalculator = () => {
  const [currentFuelCost, setCurrentFuelCost] = useState('');
  const [woodPelletCost, setWoodPelletCost] = useState('');
  const [currentFuelUsage, setCurrentFuelUsage] = useState('');
  const [efficiencyGain, setEfficiencyGain] = useState(15); // % efficiency gain as default

  // Calculate annual savings
  const calculateSavings = () => {
    const costCurrent = parseFloat(currentFuelCost);
    const costPellet = parseFloat(woodPelletCost);
    const usage = parseFloat(currentFuelUsage);
    const efficiency = efficiencyGain / 100;

    if (isNaN(costCurrent) || isNaN(costPellet) || isNaN(usage)) return 0;

    // Annual cost before switching
    const annualCostCurrent = costCurrent * usage;

    // Adjusted usage due to efficiency gain (less fuel needed)
    const adjustedUsage = usage * (1 - efficiency);

    // Annual cost after switching to wood pellets
    const annualCostPellet = costPellet * adjustedUsage;

    // Savings = difference in costs
    return annualCostCurrent - annualCostPellet;
  };

  const savings = calculateSavings();

  return (
    <section className="max-w-xl mx-auto p-8 bg-gradient-to-r from-green-100 to-green-50 rounded-xl shadow-lg animate-fade-in-up">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Why Wood Pellet? Savings Calculator</h2>
      <form
        className="space-y-6"
        onSubmit={e => e.preventDefault()}
        aria-label="Savings Calculator Form"
      >
        <div>
          <label className="block mb-2 font-semibold text-green-800" htmlFor="currentFuelCost">
            Current Fuel Cost (per unit)
          </label>
          <input
            id="currentFuelCost"
            type="number"
            min="0"
            step="0.01"
            value={currentFuelCost}
            onChange={e => setCurrentFuelCost(e.target.value)}
            placeholder="e.g. 50"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-green-800" htmlFor="woodPelletCost">
            Wood Pellet Cost (per unit)
          </label>
          <input
            id="woodPelletCost"
            type="number"
            min="0"
            step="0.01"
            value={woodPelletCost}
            onChange={e => setWoodPelletCost(e.target.value)}
            placeholder="e.g. 40"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-green-800" htmlFor="currentFuelUsage">
            Current Annual Fuel Usage (units)
          </label>
          <input
            id="currentFuelUsage"
            type="number"
            min="0"
            step="1"
            value={currentFuelUsage}
            onChange={e => setCurrentFuelUsage(e.target.value)}
            placeholder="e.g. 1000"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-green-800" htmlFor="efficiencyGain">
            Efficiency Gain (%)
          </label>
          <input
            id="efficiencyGain"
            type="range"
            min="0"
            max="50"
            value={efficiencyGain}
            onChange={e => setEfficiencyGain(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-green-700 font-medium">{efficiencyGain}%</div>
        </div>
      </form>

      <div className="mt-8 bg-green-900 text-green-100 rounded-lg p-6 text-center shadow-lg animate-pulse">
        <p className="text-xl font-semibold">
          Estimated Annual Savings:
        </p>
        <p className="text-4xl font-extrabold mt-2">
          {savings > 0 ? `$${savings.toFixed(2)}` : 'N/A'}
        </p>
      </div>
    </section>
  );
};

export default SavingsCalculator;
