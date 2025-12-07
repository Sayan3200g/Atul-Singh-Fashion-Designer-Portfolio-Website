import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Calendar } from 'lucide-react';
import { BookingFormData } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    styleInterest: 'Bridal',
    budget: '',
    date: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Fake API call to JSONPlaceholder
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.ok) {
        // Simulate network delay for better UX
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', styleInterest: 'Bridal', budget: '', date: '' });
        }, 1500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 text-center shadow-lg border-t-4 border-luxury-gold max-w-2xl mx-auto"
      >
        <div className="flex justify-center mb-6 text-green-500">
          <CheckCircle size={64} />
        </div>
        <h3 className="text-3xl font-serif mb-4">Request Received</h3>
        <p className="text-gray-600 mb-8 font-light">
          Thank you for choosing Atul Singh. Your appointment request has been submitted successfully. 
          Our team will contact you within 24 hours to confirm the details.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-luxury-gold font-bold uppercase tracking-widest text-xs border-b border-luxury-gold pb-1"
        >
          Book Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent transition-colors placeholder-gray-300"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent transition-colors placeholder-gray-300"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent transition-colors placeholder-gray-300"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Requested Date</label>
          <div className="relative">
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent transition-colors"
            />
            <Calendar className="absolute right-0 top-3 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Interest</label>
          <select
            name="styleInterest"
            value={formData.styleInterest}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent transition-colors"
          >
            <option value="Bridal">Bridal Couture</option>
            <option value="Custom Design">Custom Design</option>
            <option value="Wardrobe">Wardrobe Consultation</option>
            <option value="Event">Event Styling</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Estimated Budget (USD)</label>
          <select
             name="budget"
             value={formData.budget}
             onChange={handleChange}
             className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent transition-colors"
          >
             <option value="">Select Budget Range</option>
             <option value="2k-5k">$2,000 - $5,000</option>
             <option value="5k-10k">$5,000 - $10,000</option>
             <option value="10k+">$10,000+</option>
          </select>
        </div>
      </div>

      <div className="pt-8">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-luxury-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-luxury-gold transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {status === 'submitting' ? <Loader2 className="animate-spin mr-2" /> : null}
          {status === 'submitting' ? 'Processing...' : 'Confirm Appointment'}
        </button>
      </div>
      
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default BookingForm;