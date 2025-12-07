import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

const categories = ['All', 'Couture', 'Bridal', 'Ready-to-Wear', 'Accessories'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-luxury-cream py-20 px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">The Collection</h1>
        <p className="text-gray-500 font-light max-w-xl mx-auto">
          Explore our latest works, where tradition meets modern innovation.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm uppercase tracking-widest pb-1 transition-all duration-300 ${
                activeCategory === category 
                  ? 'text-luxury-black border-b border-luxury-gold' 
                  : 'text-gray-400 hover:text-luxury-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
                  <p className="text-xs uppercase tracking-widest text-luxury-gold mb-2">{item.category}</p>
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <button className="mt-4 p-2 border border-white/50 rounded-full hover:bg-white hover:text-black transition-colors">
                    <ZoomIn size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-light">
            No items found in this category.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-luxury-gold transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>
            
            <div 
              className="max-w-5xl w-full flex flex-col md:flex-row bg-white overflow-hidden max-h-[90vh]" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 bg-gray-100">
                 <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white text-luxury-black">
                <p className="text-sm text-luxury-gold uppercase tracking-widest mb-2">{selectedItem.category}</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">{selectedItem.title}</h2>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  {selectedItem.description}
                </p>
                <div className="mt-auto">
                   <button 
                    className="w-full border border-luxury-black text-luxury-black py-3 uppercase tracking-widest text-xs font-bold hover:bg-luxury-black hover:text-white transition-colors"
                    onClick={() => {
                        window.location.hash = '#/booking';
                    }}
                   >
                     Inquire About This Piece
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;