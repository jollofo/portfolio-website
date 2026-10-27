import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

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
          <p className="text-sm md:text-base uppercase tracking-widest text-gray-400 mb-4">
            Forward-deployed / applied AI engineer · New York, NY
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">
            Hi, I&apos;m James
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
            I build the agents, integrations, and automations that take hours of manual work off a team.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-8">
            MS in AI in Business, Simon Business School (Dec 2026)
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="text-lg text-white hover:text-blue-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-lg text-white hover:text-blue-400 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/James-Muguiyi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-blue-400 transition-colors"
            >
              Résumé
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-400"
          >
            <a href="mailto:jmuguiyijr@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              jmuguiyijr@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jamesmuguiyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.github.com/jollofo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 