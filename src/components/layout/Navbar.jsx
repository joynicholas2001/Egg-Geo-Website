import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import navigation from '../../data/navigation.json';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  };

  const toggleMobileDropdown = (label) => {
    setMobileActiveDropdown(prev => prev === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur text-navy border-b border-gray-100 ${
        isScrolled
          ? 'shadow-sm py-2'
          : 'py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 z-50 group"
          >
            <img
              src="/images/wp-content_uploads_2024_02_egggeo-logo_72x.png"
              alt="Egg Geo"
              className="h-10 md:h-12 w-24 object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 opacity-90"
            />
            <span
              className="text-navy text-xl md:text-2xl tracking-wide uppercase transition-colors"
              style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700 }}
            >
              EGGGEO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.structure.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 text-navy/90 hover:text-primary font-medium transition-colors py-2">
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-navy/90 hover:text-primary font-medium transition-colors py-2 ${isActive ? 'text-primary' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100"
                      >
                        <div className="py-2">
                          <NavLink
                            to={item.path}
                            className="block px-4 py-2 text-sm text-navy hover:bg-light hover:text-primary transition-colors font-semibold border-b border-gray-100"
                            onClick={closeMenu}
                          >
                            Overview
                          </NavLink>
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light hover:text-primary transition-colors"
                              onClick={closeMenu}
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-navy p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 lg:hidden overflow-y-auto max-h-[80vh] shadow-xl rounded-b-2xl"
          >
            <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
              {navigation.structure.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-b-0 py-1">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between text-navy hover:text-primary transition-colors text-base font-semibold py-2"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 text-navy/50 transition-transform duration-300 ${mobileActiveDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileActiveDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1.5 pl-4 pb-2 border-l border-gray-200 mt-1">
                              <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                  `text-navy/60 hover:text-primary transition-colors text-sm font-medium py-1.5 ${isActive ? 'text-primary' : ''}`
                                }
                                onClick={closeMenu}
                              >
                                Overview
                              </NavLink>
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.path}
                                  to={child.path}
                                  className={({ isActive }) =>
                                    `text-navy/80 hover:text-primary transition-colors text-sm py-1.5 ${isActive ? 'text-primary animate-pulse' : ''}`
                                  }
                                  onClick={closeMenu}
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block text-navy hover:text-primary transition-colors text-base font-semibold py-2 ${isActive ? 'text-primary' : ''}`
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
