import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  language: 'pt' | 'en';
  onLanguageChange: (lang: 'pt' | 'en') => void;
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: language === 'pt' ? 'Projetos' : 'Projects', href: '#projects' },
    { label: language === 'pt' ? 'Experiência' : 'Experience', href: '#experience' },
    { label: language === 'pt' ? 'Stack' : 'Stack', href: '#stack' },
    { label: language === 'pt' ? 'Contato' : 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#hero"
            className="text-xl sm:text-2xl font-semibold text-gray-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            LH
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </motion.button>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onLanguageChange(language === 'pt' ? 'en' : 'pt');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {language === 'pt' ? 'English' : 'Português'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
