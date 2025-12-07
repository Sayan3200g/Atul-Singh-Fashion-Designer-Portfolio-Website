import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-luxury-black">
          ATUL SINGH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase hover:text-luxury-gold transition-colors ${location.pathname === link.path ? 'text-luxury-gold font-semibold' : 'text-luxury-black'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking">
            <button className="bg-luxury-black text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-luxury-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-serif text-luxury-black hover:text-luxury-gold"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="text-lg font-serif text-luxury-gold font-semibold">
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-serif font-bold mb-4">ATUL SINGH</h2>
          <p className="text-gray-400 max-w-sm mb-6 font-light">
            Redefining luxury fashion with sustainable practices and avant-garde designs. 
            Creating timeless pieces for the modern soul.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-luxury-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-luxury-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-4 text-luxury-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/portfolio" className="hover:text-white">Collections</Link></li>
            <li><Link to="/services" className="hover:text-white">Bespoke Services</Link></li>
            <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
            <li><Link to="/booking" className="hover:text-white">Appointments</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-4 text-luxury-gold">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center"><MapPin size={16} className="mr-2" /> 123 Fashion Ave, New York, NY</li>
            <li className="flex items-center"><Phone size={16} className="mr-2" /> +1 (555) 123-4567</li>
            <li className="flex items-center"><Mail size={16} className="mr-2" /> contact@atulsingh.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Atul Singh Fashion. All Rights Reserved.
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;