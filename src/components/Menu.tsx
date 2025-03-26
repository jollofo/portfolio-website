import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_ITEMS = [
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Focus Areas', href: '#focus-areas' },
  { label: 'Contact', href: '#contact' },
] as const;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg"
        aria-label="Menu"
      >
        <div className="w-6 h-6 flex flex-col justify-around">
          <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="menu-overlay active"
          >
            <nav className="h-full flex items-center justify-center">
              <ul className="text-center space-y-8">
                {MENU_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="text-2xl"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href.substring(1))}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu; 