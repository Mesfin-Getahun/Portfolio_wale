import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/DLIG4288.JPG';

const About = () => {
  return (
    <div id="about" className="py-24 relative overflow-hidden bg-white dark:bg-dark-card transition-colors duration-500">
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">Discover</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">About Me</h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-2xl blur-xl transition-all group-hover:bg-primary/30 dark:group-hover:bg-primary/20"></div>
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={profileImg} 
              alt="About Walelign Enemayehu" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl relative z-10 border border-gray-100 dark:border-white/10"
            />
            
            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white dark:bg-dark/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 z-20"
            >
              <h3 className="text-4xl font-black text-primary mb-1">4+</h3>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Years of<br/>Experience</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                I am a passionate <strong className="text-gray-900 dark:text-white font-semibold">Full Stack Developer</strong> specializing in the MERN Stack and React Native. I enjoy designing scalable systems, building intuitive user interfaces, and leading software projects from concept to deployment.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                My expertise includes <strong className="text-gray-900 dark:text-white font-semibold">frontend architecture, backend API development, database design, authentication systems, mobile application development,</strong> and cloud deployment.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                I continuously learn emerging technologies and enjoy transforming ideas into high-quality digital products.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 hover:shadow-lg transition-all"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
