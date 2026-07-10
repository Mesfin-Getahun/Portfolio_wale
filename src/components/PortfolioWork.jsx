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

const projects = [
  {
    title: 'Success Tutor',
    description: 'Success Tutor Connector Platform\nA full-stack web and mobile application that connects students with tutors for online learning.',
    images: [img1, img2, img3],
    link: '#',
    github: '#',
    tags: ['Full-stack', 'Web', 'Mobile']
  },
  {
    title: 'Hotel Website',
    description: 'Designed and developed a modern and responsive hotel booking website that allows users to explore rooms, check availability, and make reservations easily. The website includes features such as room listings, image galleries, pricing details, contact forms, and an intuitive booking interface. Focused on clean UI/UX, fast performance, and mobile responsiveness to ensure a smooth user experience across all devices. Built using modern web technologies with attention to usability, accessibility, and professional design.',
    images: [ht1, ht2, ht3],
    link: '#',
    github: '#',
    tags: ['Web Technologies', 'UI/UX', 'Responsive Design']
  },
  {
    title: 'Course sell app',
    description: 'Developed a course-selling mobile application with an admin web dashboard that allows users to browse, purchase, and access online courses easily. The mobile app provides features such as course listings, secure payments, video lessons, and course book. The admin web panel enables administrators to manage courses, instructors, users, and sales. The project focuses on a clean UI, smooth user experience, and efficient content management for scalable e-learning platforms.',
    images: [cs1, cs2],
    link: '#',
    github: '#',
    tags: ['Mobile App', 'Admin Dashboard', 'E-Learning']
  },
  {
    title: 'Netflix Clone',
    description: 'A robust streaming platform clone featuring real-time movie data from TMDB API, secure Firebase authentication, and a fully responsive media-rich interface built for performance.',
    images: [netflixImg],
    link: 'https://netflix-clone-two-coral.vercel.app/', 
    github: 'https://github.com/Mesfin-Getahun/Netflix-Clone.git', 
    tags: ['React', 'Firebase', 'TMDB API', 'Vite']
  },
  {
    title: 'Graphics Design Book Cover',
    description: 'A creative and visually appealing graphics design project for a professional book cover.',
    images: [bookCoverImg],
    link: '#',
    github: '#',
    tags: ['Graphics Design', 'Book Cover', 'Design']
  },
  {
    title: 'AI CV Maker and Editor',
    description: 'An intelligent AI-powered platform for creating, editing, and optimizing professional resumes and CVs easily.',
    images: [aiCvImg],
    link: '#',
    github: '#',
    tags: ['AI', 'Web App', 'CV Maker']
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
                className="relative aspect-video overflow-x-auto flex snap-x snap-mandatory border-b border-gray-100 dark:border-white/5 bg-white dark:bg-white" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.images.map((imgSrc, imgIndex) => (
                  <div key={imgIndex} className="w-full h-full flex-shrink-0 snap-center relative transition-transform duration-700 group-hover:scale-[1.02]">
                    {project.link && project.link !== '#' ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="w-full h-full inline-block cursor-pointer flex items-center justify-center">
                        <img
                          src={imgSrc}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      </a>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={imgSrc}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          loading="lazy"
                          className="w-full h-full object-contain"
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
