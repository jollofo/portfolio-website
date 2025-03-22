import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-8 font-serif">Our Vision</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              At Makoye, we believe in the power of innovation to create meaningful change. Our approach combines deep industry expertise with cutting-edge technology to build companies that address real-world challenges.
            </p>
            <p>
              We take a hands-on approach to venture building, working closely with founders and teams to develop robust business models, scalable technologies, and sustainable growth strategies.
            </p>
            <p>
              Our vision is to be a catalyst for positive change, creating companies that not only succeed commercially but also make a lasting impact on society and the environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 