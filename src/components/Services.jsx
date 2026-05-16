import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaCode, FaReact, FaDatabase, FaServer, FaNetworkWired } from 'react-icons/fa';
import { FaCropSimple } from 'react-icons/fa6';

const services = [
  {
    icon: <FaCode className="text-4xl" />,
    title: 'Frontend Web Development',
    description: 'I specialize in building interactive and animated user interfaces with modern tech stacks.',
  },
  {
    icon: <FaCropSimple className="text-4xl" />,
    title: 'UI/UX Design',
    description: 'I build thoughtful UX/UI designs for websites to create seamless user journeys.',
  },
  {
    icon: <FaReact className="text-4xl" />,
    title: 'React Development',
    description: 'I can build scalable websites using reusable components, clean code, and API integrations.',
  },
  {
    icon: <FaDatabase className="text-4xl" />,
    title: 'Backend Development',
    description: 'I build secure and scalable server-side applications and database architectures.',
  },
  {
    icon: <FaServer className="text-4xl" />,
    title: 'Hosting Websites',
    description: 'I deploy and manage web applications on reliable cloud hosting platforms.',
  },
  {
    icon: <FaNetworkWired className="text-4xl" />,
    title: 'API Integration',
    description: 'I seamlessly connect frontend applications with robust REST and third-party APIs.',
  }
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50/50 dark:bg-dark-card/30">
      <div className="container mx-auto px-5 md:px-[10%]">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2"
          >
            What I Do
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            My Services
          </motion.h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-dark-card p-[1px] rounded-2xl transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 relative flex flex-col h-full overflow-hidden"
            >
              {/* Subtle Animated Gradient Border effect on hover - completely transparent in light mode */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-blue-100/50 dark:from-white/5 dark:to-white/5 dark:group-hover:from-primary/50 dark:group-hover:to-blue-400/50 transition-all duration-500"></div>
              
              <div className="relative bg-white dark:bg-dark-card p-8 rounded-[15px] flex flex-col h-full w-full z-10 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-[2]"></div>
                
                <div className="w-14 h-14 rounded-xl bg-light dark:bg-darker flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100 dark:border-white/5">
                  {service.icon}
                </div>
                
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300">{service.description}</p>
                
                <Link to="contact" smooth={true} duration={500} className="inline-flex items-center gap-2 text-gray-900 dark:text-white text-sm uppercase tracking-wider font-bold group-hover:text-primary transition-colors mt-auto cursor-pointer">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
