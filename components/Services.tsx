import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenTool, Heart, Camera, User, Check } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool size={32} />,
  Heart: <Heart size={32} />,
  Camera: <Camera size={32} />,
  User: <User size={32} />,
};

const Services: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-white py-20 px-6 text-center shadow-sm">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto">
          From concept to creation, we offer a full suite of design services tailored to your unique needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-luxury-gold/20"
            >
              <div className="text-luxury-gold mb-6">{iconMap[service.iconName]}</div>
              <h3 className="text-2xl font-serif mb-4 text-luxury-black">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                <span className="text-sm font-semibold text-luxury-black">{service.priceRange}</span>
                <Link 
                  to="/booking" 
                  className="text-xs uppercase tracking-widest font-bold text-luxury-gold hover:text-black transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-luxury-black text-white p-8 md:p-16 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-6 text-luxury-gold">The Process</h3>
              <ul className="space-y-6">
                {[
                  "Initial Consultation & Style Analysis",
                  "Sketching & Fabric Selection",
                  "First Fitting & Toile adjustments",
                  "Final Fitting & Delivery"
                ].map((step, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-luxury-gold/20 p-1 rounded-full mr-4 text-luxury-gold">
                      <Check size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Step 0{i+1}</h5>
                      <p className="text-gray-400 font-light text-sm">{step}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/booking" className="bg-luxury-gold text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-luxury-black transition-colors">
                  Start Your Journey
                </Link>
              </div>
            </div>
            <div className="relative h-96 hidden lg:block">
              <img 
                src="https://picsum.photos/600/800?random=55" 
                alt="Process" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-sm"
              />
              <div className="absolute -bottom-6 -left-6 border-2 border-luxury-gold w-full h-full -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;