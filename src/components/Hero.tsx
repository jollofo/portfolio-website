import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#050505] to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">
            Hi, I&apos;m James
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            An aspiring software engineer interested in Cloud Infrastructure and Human-Computer Interaction
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="#projects"
              className="text-lg text-white hover:text-blue-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="text-lg text-white hover:text-blue-400 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 