"use client";
import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";

interface Technology {
  title: string;
  src: string;
}

interface GridListProps {
  content: Technology[];
}

const GridList: React.FC<GridListProps> = ({ content }) => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-white">Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {content.map((item, index) => (
              <TiltedCard
                key={item.title}
                technology={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GridList;
