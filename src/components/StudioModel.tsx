import React from 'react';
import { motion } from 'framer-motion';

const stages = [
  {
    title: 'Concept',
    description: 'We identify market opportunities and develop innovative concepts that address real needs.'
  },
  {
    title: 'Launch',
    description: 'Our team works closely with founders to build and launch products that resonate with users.'
  },
  {
    title: 'Scale',
    description: 'We provide the resources and expertise needed to grow and scale successful ventures.'
  }
];

const StudioModel = () => {
  return (
    <section id="studio-model" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 font-serif text-center">Studio Model</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-serif">{stage.title}</h3>
                  <p className="text-lg text-gray-600">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioModel; 