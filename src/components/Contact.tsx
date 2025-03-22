import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-8 font-serif">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12">
            Interested in working together? Let's start a conversation.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <a
              href="mailto:contact@makoye.com"
              className="text-xl hover:opacity-70 transition-opacity"
            >
              <FiMail className="inline-block mr-2" />
              contact@makoye.com
            </a>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/company/makoye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://twitter.com/makoye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 