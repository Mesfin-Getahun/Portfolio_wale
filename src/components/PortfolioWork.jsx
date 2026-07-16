import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import img1 from '../assets/photo_2026-07-09_19-45-40.jpg';
import img2 from '../assets/photo_2026-07-09_19-45-45.jpg';
import img3 from '../assets/photo_2026-07-09_19-45-50.jpg';
import ht1 from '../assets/photo_2026-07-09_19-46-00.jpg';
import ht2 from '../assets/photo_2026-07-09_19-46-08.jpg';
import ht3 from '../assets/photo_2026-07-09_19-46-16.jpg';
import cs1 from '../assets/photo_2026-07-09_19-46-20.jpg';
import cs2 from '../assets/photo_2026-07-09_19-46-23.jpg';
import netflixImg from '../assets/netflix.png';
import bookCoverImg from '../assets/photo_2026-07-10_12-21-20.jpg';
import aiCvImg from '../assets/photo_2026-07-10_12-21-02.jpg';
import pharm1 from '../assets/photo_2026-07-14_22-10-03.jpg';
import pharm2 from '../assets/photo_2026-07-14_22-10-07.jpg';
import ecom1 from '../assets/photo_2026-07-14_22-10-16.jpg';
import ecom2 from '../assets/photo_2026-07-14_22-10-19.jpg';
import fyp1 from '../assets/photo_2026-07-15_11-19-09.jpg';
import fyp2 from '../assets/photo_2026-07-15_11-19-12.jpg';
import fyp3 from '../assets/photo_2026-07-15_11-19-18.jpg';

const projects = [
  {
    title: 'Success Tutor',
    description: 'A modern tutoring platform connecting students, parents, and tutors with scheduling, payments, dashboards, and learning management.',
    images: [img1, img2, img3],
    link: '#',
    github: '#',
    tags: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind']
  },
  {
    title: 'Pharmacy Inventory System',
    description: 'Enterprise inventory management platform with stock tracking, sales management, supplier management, reports, and authentication.',
    images: [pharm1, pharm2],
    link: '#',
    github: '#',
    tags: ['MERN Stack', 'Management System', 'React']
  },
  {
    title: 'AI CV Maker',
    description: 'AI-powered resume builder supporting multiple professional templates with PDF export and editing.',
    images: [aiCvImg],
    link: '#',
    github: '#',
    tags: ['AI', 'Web App', 'Resume Builder']
  },
  {
    title: 'E-Commerce Platform',
    description: 'Complete MERN e-commerce platform featuring authentication, shopping cart, orders, payments, admin dashboard, and product management.',
    images: [ecom2, ecom1],
    link: '#',
    github: '#',
    tags: ['MERN', 'E-commerce', 'Payment Gateway']
  },
  {
    title: 'React Native Mobile App',
    description: 'Cross-platform mobile application with authentication, notifications, offline storage, and responsive design.',
    images: [fyp1, fyp2, fyp3],
    link: '#',
    github: '#',
    tags: ['React Native', 'Expo', 'Mobile']
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website designed to showcase my skills, projects, and services. Built with React and Tailwind CSS, featuring dark mode, animations using Framer Motion, and a highly responsive design.',
    images: [ht1], // using hotel website image as a placeholder
    link: '#',
    github: '#',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  }
];

const PortfolioWork = () => {
  return (
    <div id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-5 md:px-[10%]">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2"
          >
            Portfolio
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div 
                className="relative h-64 sm:h-72 md:h-80 overflow-x-auto flex snap-x snap-mandatory border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-dark-card/50" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.images.map((imgSrc, imgIndex) => (
                  <div key={imgIndex} className="w-full h-full flex-shrink-0 snap-center relative transition-transform duration-700 group-hover:scale-[1.02]">
                    {project.link && project.link !== '#' ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="w-full h-full inline-block cursor-pointer flex items-center justify-center p-2">
                        <img
                          src={imgSrc}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          loading="lazy"
                          className="w-full h-full object-contain rounded-lg shadow-sm"
                        />
                      </a>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-2">
                        <img
                          src={imgSrc}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          loading="lazy"
                          className="w-full h-full object-contain rounded-lg shadow-sm"
                        />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Scroll Indicator hint */}
                {project.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/50 text-white/90 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide backdrop-blur-sm shadow-sm pointer-events-none">
                    Scroll ➜
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  {project.link && project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group-hover:text-primary transition-colors"
                    >
                      <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="font-bold text-2xl text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  )}

                  <div className="flex gap-3 mt-1 shrink-0">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        title="Source Code"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <FaGithub className="text-[22px]" />
                      </a>
                    )}
                    {project.link && project.link !== '' && project.link !== '#' && (
                      <a
                        href={project.link}
                        title="Live Demo"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary hover:scale-110 transition-all duration-300"
                      >
                        <FaArrowUpRightFromSquare className="text-[20px]" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[13px] font-medium px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-100 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/lali-e21"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
          >
            <FaGithub className="text-xl" />
            View More Projects in Github
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioWork;
