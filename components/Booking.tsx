import React from 'react';
import BookingForm from './BookingForm';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 relative bg-luxury-black min-h-[40vh] md:min-h-full">
        <img 
          src="https://picsum.photos/1000/1500?random=88" 
          alt="Studio" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r"></div>
        <div className="relative z-10 p-12 h-full flex flex-col justify-end text-white">
          <h2 className="text-4xl font-serif mb-4">Visit Our Atelier</h2>
          <p className="font-light text-gray-300 max-w-md">
            Experience the luxury firsthand. Book a private consultation with our design team to bring your vision to life.
          </p>
          <div className="mt-8 space-y-2 text-sm text-luxury-gold">
            <p>Monday - Saturday</p>
            <p>10:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <h1 className="text-3xl font-serif mb-8 text-center text-luxury-black">Book an Appointment</h1>
          <BookingForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;