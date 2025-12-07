import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Home: React.FC = () => {
  const featuredItems = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-stone-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=10" 
            alt="Atul Singh Runway Collection" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-luxury-gold font-semibold">
            Luxury . Elegance . Timelessness
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
            Redefining <span className="italic">Modern</span> Couture
          </motion.h1>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/portfolio" className="bg-white text-luxury-black px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-luxury-gold hover:text-white transition-all duration-300">
              View Collections
            </Link>
            <Link to="/booking" className="border border-white text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-luxury-black transition-all duration-300">
              Book Appointment
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-luxury-black">The Art of Silhouette</h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              "Fashion is not just about clothing; it is a language, a statement, and a way of life. 
              My designs bridge the gap between traditional craftsmanship and modern avant-garde aesthetics, 
              creating pieces that empower and inspire."
            </p>
            <p className="mt-4 text-luxury-gold font-serif italic text-xl">— Atul Singh</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-luxury-black">Featured Works</h2>
              <p className="text-gray-500 mt-2 font-light">Highlights from our latest runway.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center text-xs uppercase tracking-widest font-bold hover:text-luxury-gold transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group cursor-pointer relative"
              >
                <div className="overflow-hidden aspect-[3/4]">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-luxury-gold uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="text-xl font-serif text-luxury-black group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center text-xs uppercase tracking-widest font-bold border-b border-luxury-black pb-1">
              View All Designs
            </Link>
          </div>
        </div>
      </section>

      {/* Infinite Scroll/Marquee Placeholder */}
      <section className="py-16 bg-luxury-black text-white overflow-hidden">
         <div className="flex space-x-12 animate-pulse justify-center items-center opacity-50">
           <span className="text-2xl font-serif italic">Vogue</span>
           <span className="text-2xl font-serif italic">Harper's Bazaar</span>
           <span className="text-2xl font-serif italic">Elle</span>
           <span className="text-2xl font-serif italic">GQ</span>
           <span className="text-2xl font-serif italic">Cosmopolitan</span>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to create your masterpiece?</h2>
           <p className="text-gray-600 mb-10 max-w-2xl mx-auto font-light">
             Whether it's your wedding day or a red carpet event, let us craft something uniquely yours.
           </p>
           <Link to="/booking" className="inline-block bg-luxury-gold text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-black transition-colors duration-300">
             Book a Consultation
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;