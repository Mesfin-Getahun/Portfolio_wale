import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    rating: 5,
    text: "Walelign consistently delivers high-quality software with exceptional attention to detail.",
    author: "Software Engineer",
  },
  {
    rating: 5,
    text: "Professional communication and excellent technical skills. Highly recommended for full stack roles.",
    author: "Project Manager",
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-24 bg-gray-50/50 dark:bg-dark-card/30 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2"
          >
            Feedback
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Testimonials
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((feedback, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-8 right-8 text-primary opacity-20 text-6xl font-serif">"</div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(feedback.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
                "{feedback.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {feedback.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{feedback.author}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
