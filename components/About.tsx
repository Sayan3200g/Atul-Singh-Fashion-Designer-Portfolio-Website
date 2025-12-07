import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://picsum.photos/800/1000?random=20" 
            alt="Atul Singh Designer" 
            className="w-full h-auto shadow-xl"
          />
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-2">The Designer</h4>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-luxury-black">Atul Singh</h1>
          <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
            <p>
              Born with a passion for textiles and a vision for the extraordinary, Atul Singh has emerged as a vanguard of modern luxury fashion. 
              With over a decade of experience in the industry, his designs are characterized by a unique blend of architectural structure and fluid elegance.
            </p>
            <p>
              His journey began at the prestigious Parsons School of Design, followed by apprenticeships with legendary couturiers in Paris and Milan. 
              Returning to his roots, he launched his eponymous label to bring global sensibilities to traditional craftsmanship.
            </p>
            <p>
              "My goal is to create clothing that makes the wearer feel invincible. Every stitch is a promise of quality, and every silhouette tells a story."
            </p>
          </div>
          <div className="mt-8">
            <img src="https://picsum.photos/200/80?random=99" alt="Signature" className="opacity-60 h-16 grayscale" />
          </div>
        </motion.div>
      </section>

      {/* Timeline/Achievements */}
      <section className="bg-luxury-cream py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-16">Milestones</h2>
          <div className="space-y-12">
            {ACHIEVEMENTS.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center border-l-2 border-luxury-gold pl-8 md:pl-0 md:border-l-0 relative"
              >
                {/* Desktop layout: alternating */}
                <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                   {index % 2 === 0 && (
                     <>
                       <h3 className="text-2xl font-serif">{item.title}</h3>
                       <p className="text-gray-500">{item.org}</p>
                     </>
                   )}
                </div>
                
                {/* Center dot for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-luxury-gold text-white font-bold text-xs z-10">
                </div>
                
                {/* Line for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 -z-0"></div>

                <div className="md:w-1/2 md:pl-12">
                   <span className="text-luxury-gold font-bold text-xl md:hidden block mb-1">{item.year}</span>
                   
                   {/* Mobile View */}
                   <div className="md:hidden">
                      <h3 className="text-xl font-serif">{item.title}</h3>
                      <p className="text-gray-500">{item.org}</p>
                   </div>

                   {/* Desktop Right Side Content */}
                   {index % 2 !== 0 && (
                     <div className="hidden md:block">
                       <h3 className="text-2xl font-serif">{item.title}</h3>
                       <p className="text-gray-500">{item.org}</p>
                     </div>
                   )}
                   {/* Desktop Left Side Year */}
                   {index % 2 === 0 && (
                     <div className="hidden md:block">
                       <span className="text-4xl font-serif text-gray-300 font-bold">{item.year}</span>
                     </div>
                   )}
                   {/* Desktop Right Side Year (for odd items, year is on left actually, let's simplify logic visually) */}
                   {index % 2 !== 0 && (
                     <div className="hidden md:block absolute left-[35%] top-0 text-right w-[10%]">
                        <span className="text-4xl font-serif text-gray-300 font-bold">{item.year}</span>
                     </div>
                   )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-luxury-gold">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-zinc-900 p-8 rounded-sm relative"
              >
                <Quote className="text-luxury-gold mb-6 opacity-50" size={40} />
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h5 className="text-white font-serif text-lg">{t.name}</h5>
                  <span className="text-xs uppercase tracking-wider text-gray-500">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;