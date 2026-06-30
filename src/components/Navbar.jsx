import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import navigation from '../data/navigation.json';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Close mobile menu and dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const closeMenu = () => {
    setExpanded(false);
    setActiveDropdown(null);
  };

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur text-navy shadow-sm border-b border-gray-100" aria-label="Main navigation">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            to="/"
            onClick={closeMenu}
          >
            <img
              src="/images/wp-content_themes_egggeo_img_egg-geo-white.svg"
              alt="Egg Geo Logo"
              className="h-8 md:h-10 w-auto brightness-0 opacity-90"
            />
            <span className="font-bold text-xl tracking-wide">Egg Geo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-4">
            {navigation.structure.map((item) =>
              item.children ? (
                <div
                  className="relative group"
                  key={item.label}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${activeDropdown === item.label ? 'bg-primary/10 text-primary' : 'hover:text-primary'}`}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2"
                      >
                        <NavLink
                          className="block px-5 py-2.5 text-navy hover:bg-light hover:text-primary font-semibold transition-colors"
                          to={item.path}
                          onClick={closeMenu}
                        >
                          Overview
                        </NavLink>
                        <div className="h-px bg-gray-100 my-1"></div>
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            className={({ isActive }) => `block px-5 py-2 text-sm transition-colors ${isActive ? 'text-primary bg-primary/5 font-semibold' : 'text-gray-600 hover:text-primary hover:bg-light'}`}
                            to={child.path}
                            onClick={closeMenu}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  className={({ isActive }) => `px-3 py-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive ? 'text-primary bg-primary/5' : 'hover:text-primary'}`}
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )
            )}

          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-navy hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            {expanded ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-y-auto max-h-[85vh] bg-white border-t border-gray-100 w-full absolute left-0 shadow-xl rounded-b-2xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navigation.structure.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-gray-100 pb-2">
                    <button
                      className="flex items-center justify-between w-full py-3 text-lg font-medium text-left text-navy focus-visible:outline-none focus-visible:text-primary"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-primary' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden bg-gray-50 rounded-xl mt-2"
                        >
                          <NavLink
                            className="block px-4 py-3 font-semibold text-primary hover:bg-primary/5 transition-colors"
                            to={item.path}
                            onClick={closeMenu}
                          >
                            Overview
                          </NavLink>
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              className={({ isActive }) => `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'text-primary font-semibold bg-primary/5' : 'text-navy/70 hover:text-primary hover:bg-primary/5'}`}
                              to={child.path}
                              onClick={closeMenu}
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.label}
                    className={({ isActive }) => `block py-3 text-lg font-medium text-navy border-b border-gray-100 transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                    to={item.path}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                )
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
