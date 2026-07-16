import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2026",
    role: "Senior Full Stack Developer",
    description: "Leading web and mobile application development using MERN Stack and React Native."
  },
  {
    year: "2025",
    role: "React Native Developer",
    description: "Developed cross-platform mobile applications using Expo and React Native."
  },
  {
    year: "2024",
    role: "Frontend Developer",
    description: "Built responsive React applications and modern UI components."
  }
];

const Experience = () => {
  return (
    <div id="experience" className="py-24 relative overflow-hidden bg-light dark:bg-dark transition-colors duration-500">
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">My Journey</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Experience Timeline</h1>
        </motion.div>

        <div className="max-w-3xl mx-auto relative cursor-default">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center mb-12 last:mb-0">
              
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-10 ring-4 ring-light dark:ring-dark"></div>

              {/* Year - Positioned based on odd/even */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1 md:text-left md:pl-12' : 'md:order-1 md:text-right md:pr-12'} hidden md:block`}
              >
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg mb-2">
                  {exp.year}
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pr-12 text-right' : 'md:order-2 md:pl-12 text-left'} ml-12 md:ml-0`}
              >
                <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors">
                  <div className="md:hidden inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-md mb-3 text-sm">
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
                
                {/* Mobile timeline line connector */}
                <div className="md:hidden absolute left-4 top-[40px] w-6 h-[2px] bg-gray-200 dark:bg-white/10"></div>
                {/* Mobile dot */}
                <div className="md:hidden absolute left-[14px] top-[34px] w-3 h-3 rounded-full bg-primary z-10 ring-4 ring-light dark:ring-dark"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
