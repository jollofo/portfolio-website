import React from 'react';
import { motion } from 'framer-motion';

interface GridListProps {
  content: Array<{
    title: string;
    src: string;
  }>;
}

const GridList: React.FC<GridListProps> = ({ content }) => {
  // List of technologies that should keep their original colors
  const coloredIcons = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Python',
    'Java',
    'MongoDB',
    'PostgreSQL'
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-white">Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {content.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 rounded-lg bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-300"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#0a0a0a] rounded-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${
                      coloredIcons.includes(item.title) ? '' : 'filter brightness-0 invert'
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GridList;
