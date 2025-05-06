"use client";
import React from 'react';
import Menu from '@/components/Menu';
import Hero from '@/components/Hero';
import GridList from "@/components/GridList";
import Slider from "@/components/Slider";
import {
  education,
  work,
  technologies,
  projects,
  getRecentBlogs,
} from "@/data";
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/data/blogService';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.3,
};

const SectionWrapper = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <section id={id} className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={sectionTransition}
        className="max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default async function Home() {
  const blogs: BlogPost[] = await getRecentBlogs();

  return (
    <main className="min-h-screen bg-black">
      <Menu />
      <Hero />
      
      {/* Education Section */}
      <SectionWrapper id="education">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">Education</h2>
        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ ...sectionTransition, delay: index * 0.1 }}
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
      </SectionWrapper>
      
      {/* Technologies Section */}
      <section id="technologies" className="bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.015]"></div>
        <div className="relative">
          <GridList content={technologies} />
        </div>
      </section>
      
      {/* Work Section */}
      <SectionWrapper id="work">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">Work Experience</h2>
        <div className="space-y-16">
          {work.map((job, index) => (
            <motion.div
              key={job.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ ...sectionTransition, delay: index * 0.1 }}
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
      </SectionWrapper>
      
      {/* Projects Section */}
      <SectionWrapper id="projects">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">Projects</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ ...sectionTransition, delay: index * 0.2 }}
            >
              <Slider
                title={project.title}
                data={project.data}
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Focus Areas Section */}
      <SectionWrapper id="focus-areas">
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
      </SectionWrapper>

      {/* Recent Blogs Section */}
      <SectionWrapper id="recent-blogs">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Recent Blog Posts</h2>
          <a
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Posts →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog: BlogPost) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.015]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            transition={sectionTransition}
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
