import React from 'react';
import { motion } from 'framer-motion';

const focusAreas = [
  {
    title: 'Fintech',
    description: 'Revolutionizing financial services through innovative technology solutions.'
  },
  {
    title: 'Healthtech',
    description: 'Transforming healthcare delivery and improving patient outcomes.'
  },
  {
    title: 'Climate',
    description: 'Developing sustainable solutions for environmental challenges.'
  },
  {
    title: 'DeepTech',
    description: 'Pushing the boundaries of technological innovation.'
  }
];

const FocusAreas = () => {
  return (
    <section id="focus-areas" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 font-serif text-center">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-serif">{area.title}</h3>
                <p className="text-lg text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FocusAreas; 