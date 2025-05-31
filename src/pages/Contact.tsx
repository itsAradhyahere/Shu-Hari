// src/pages/Contact.tsx
import React, { useState } from 'react';
import CollapsibleText from '../components/CollapsibleText';

const contactInfo = `
Feel free to reach out to ShuHaRi Renewables for any inquiries, support, or partnership opportunities. 
Our team is here to assist you in your journey toward sustainable and renewable energy solutions.
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with an API or service here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 tracking-wide">Contact Us</h1>
      <CollapsibleText text={contactInfo} maxLength={250} />

      {submitted && (
        <div className="my-4 p-4 bg-green-100 text-green-700 rounded">
          Thank you for reaching out! We will get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-indigo-900 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-indigo-900 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-indigo-900 font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
