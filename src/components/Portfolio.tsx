import React from 'react';
import { motion } from 'framer-motion';

const ventures = [
  {
    name: 'FinTech Solutions',
    description: 'Revolutionary financial technology platform',
    url: 'https://example.com/fintech'
  },
  {
    name: 'HealthTech Innovations',
    description: 'Healthcare technology solutions',
    url: 'https://example.com/healthtech'
  },
  {
    name: 'ClimateTech',
    description: 'Sustainable technology solutions',
    url: 'https://example.com/climatetech'
  },
  {
    name: 'DeepTech Labs',
    description: 'Advanced technology research and development',
    url: 'https://example.com/deeptech'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 font-serif text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-2xl font-serif mb-2">{venture.name}</h3>
                  <p className="text-gray-600">{venture.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 