"use client";
import React from "react";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import GridList from "@/components/GridList";
import Slider from "@/components/Slider";
import Image from "next/image";
import { education, work, technologies, projects, earlierProjects } from "@/data";
import { motion, MotionConfig } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.3,
};

const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <section
    id={id}
    className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden"
  >
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

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-black">
      <Dock />
      <Hero />

      {/* Education Section */}
      <SectionWrapper id="education">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">
          Education
        </h2>
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
                  <h3 className="text-2xl font-serif mb-2 text-white">
                    {edu.title}
                  </h3>
                  <p className="text-gray-400">{edu.date}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    {edu.paragraph}
                  </p>
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
      <section
        id="technologies"
        className="bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.015]"></div>
        <div className="relative">
          <GridList content={technologies} />
        </div>
      </section>

      {/* Work Section */}
      <SectionWrapper id="work">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">
          Work Experience
        </h2>
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
                  <h3 className="text-2xl font-serif mb-2 text-white">
                    {job.title}
                  </h3>
                  <p className="text-gray-400">{job.date}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    {job.paragraph}
                  </p>
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
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-white">
          Projects
        </h2>
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
              <Slider title={project.title} data={project.data} />
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-serif mt-32 mb-8 text-white">
          Earlier work
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {earlierProjects.map((project) => (
            <article key={project.title} className="rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) calc(100vw - 32px), 500px"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-serif text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <p className="text-sm text-gray-400 mb-3">{project.stack}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 hover:text-blue-400 transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-black via-[#020202] to-black relative overflow-hidden"
      >
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
            <h2 className="text-4xl md:text-5xl mb-8 font-serif text-white">
              Get in Touch
            </h2>
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
    </MotionConfig>
  );
}
