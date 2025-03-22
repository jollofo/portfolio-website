"use client";
import React from 'react';
import Menu from '@/components/Menu';
import Hero from '@/components/Hero';
import Card from "@/components/Card";
import GridList from "@/components/GridList";
import Slider from "@/components/Slider";
import Container from "@/components/Container";
import {
  education,
  work,
  technologies,
  projects,
} from "@/data";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Menu />
      <Hero />
      
      {/* Education Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">Education</h2>
            <div className="space-y-16">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <h3 className="text-2xl font-serif mb-2 text-white">{edu.title}</h3>
                      <p className="text-gray-400">{edu.date}</p>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-300 leading-relaxed">{edu.paragraph}</p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section id="technologies" className="bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.015]"></div>
        <div className="relative">
          <GridList content={technologies} />
        </div>
      </section>
      
      {/* Work Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">Work Experience</h2>
            <div className="space-y-16">
              {work.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <h3 className="text-2xl font-serif mb-2 text-white">{job.title}</h3>
                      <p className="text-gray-400">{job.date}</p>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-300 leading-relaxed">{job.paragraph}</p>
                    </div>
                  </div>
                  {index < work.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">Projects</h2>
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Slider
                    title={project.title}
                    data={{
                      media: project.data.media,
                      left: project.data.left,
                      right: project.data.right
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus-areas" className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-white">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-white">Cloud Infrastructure</h3>
                <p className="text-lg text-gray-300">Designing and implementing scalable cloud solutions using modern technologies and best practices.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-white">Human-Computer Interaction</h3>
                <p className="text-lg text-gray-300">Creating intuitive and accessible user interfaces that enhance the human experience with technology.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.015]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-8 font-serif text-white">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-12">
              Interested in collaborating or learning more about my work?
            </p>
            <div className="flex flex-col items-center space-y-6">
              <a
                href="mailto:jmuguiyijr@gmail.com"
                className="text-xl text-white hover:text-blue-400 transition-colors"
              >
                jmuguiyijr@gmail.com
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://www.github.com/jollofo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jamesmuguiyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
