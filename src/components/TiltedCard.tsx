"use client";
import React, { useState, useCallback, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface Technology {
  title: string;
  src: string;
}

interface TiltedCardProps {
  technology: Technology;
  index: number;
}

const TiltedCard: React.FC<TiltedCardProps> = ({ technology, index }) => {
  const reduceMotion = useReducedMotion();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const lastMove = useRef(0);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      const now = performance.now();
      if (now - lastMove.current < 16) return;
      lastMove.current = now;
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 8;
      const rotateY = (centerX - x) / 8;

      setRotate({ x: rotateX, y: rotateY });
    },
    [reduceMotion]
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div
        className="technology-tilt relative h-32 w-full rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-gray-800/50 hover:border-gray-700/50 transition-colors duration-200 will-change-transform overflow-hidden"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: reduceMotion ? 'none' : `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: rotate.x === 0 && rotate.y === 0 ? 'transform 200ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s' : 'none',
        }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        
        {/* Shine effect */}
        <div 
          className="technology-shine absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          style={{
            background: `linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 65%)`,
            transform: reduceMotion ? 'none' : `translateX(${rotate.y * 2}px) translateY(${-rotate.x * 2}px)`,
          }}
        />
        
        {/* Content */}
        <div className="relative h-full w-full flex flex-col items-center justify-center p-4 z-10">
          <div className="technology-icon relative h-12 w-12 mb-3 transition-transform duration-200 motion-reduce:transition-none">
            <Image
              src={technology.src}
              alt={technology.title}
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
            {technology.title}
          </span>
        </div>

        {/* Reflection effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + rotate.y}% ${50 - rotate.x}%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default TiltedCard; 