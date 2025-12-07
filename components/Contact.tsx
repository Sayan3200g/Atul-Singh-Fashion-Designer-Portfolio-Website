import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Get in Touch</h1>
          <p className="text-gray-500 font-light">We would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-luxury-cream p-8 md:p-12 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-serif mb-8 text-luxury-black">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full text-luxury-gold shadow-sm mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Visit Us</h5>
                    <p className="text-gray-600 font-light">
                      123 Fashion Avenue, Suite 500<br />
                      New York, NY 10018
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full text-luxury-gold shadow-sm mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Call Us</h5>
                    <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                    <p className="text-gray-600 font-light">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full text-luxury-gold shadow-sm mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Email Us</h5>
                    <p className="text-gray-600 font-light">inquiries@atulsingh.com</p>
                    <p className="text-gray-600 font-light">press@atulsingh.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 text-white w-full py-4 rounded-sm hover:bg-green-700 transition-colors uppercase text-sm font-bold tracking-widest"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] md:h-auto bg-gray-200"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.345864887349!2d-73.98808298459426!3d40.75442657932736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ac56525917%3A0x6bd7031c6a213501!2sFashion%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Google Map"
                className="grayscale"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;