import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  return (
    <div id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="flex flex-col items-center justify-center gap-16 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">Discover</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg">
              I’m a Computer Science graduate (Class of 2026) from Bahir Dar University and a Full-Stack Developer, passionate about building scalable and user-focused web applications.
              <br/><br/>
              I work primarily with modern technologies like React, Node.js, and MongoDB to create efficient and reliable systems. From developing the Success Tutor connector platform and a comprehensive Hotel Website, to building a Course Selling application and a Netflix Clone, I enjoy turning ideas into real, working products.
              <br /><br />
              I’m especially interested in solving real-world problems through clean code, intuitive design, and continuous learning and I’m always looking for opportunities to contribute to meaningful projects and grow as a developer.
            </p>
              
      
            


          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
