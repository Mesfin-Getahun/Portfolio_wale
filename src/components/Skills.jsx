import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaMobileAlt, FaGithub, FaDocker, 
  FaFigma, FaLaptopCode, FaServer, FaTools, FaHtml5, FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux, 
  SiExpress, SiMongodb, SiJsonwebtokens, SiMongoose, 
  SiExpo, SiGit, SiPostman, SiVercel, SiNetlify, SiFirebase 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaLaptopCode />,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    skills: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ]
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-black dark:text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'REST API', icon: <TbApi className="text-gray-600 dark:text-gray-300" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-[#000000] dark:text-white" /> },
      { name: 'Mongoose', icon: <SiMongoose className="text-[#880000]" /> },
    ]
  },
  {
    title: 'Mobile',
    icon: <FaMobileAlt />,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    skills: [
      { name: 'React Native', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Expo', icon: <SiExpo className="text-black dark:text-white" /> },
    ]
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    skills: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
      { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7]" /> },
      { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
    ]
  }
];

const marqueeTechs = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", 
  "React Native", "Expo", "Tailwind", "Redux", "Docker", "Git", 
  "Figma", "Firebase", "JWT", "REST API"
];

// Duplicate the array for seamless scrolling
const duplicatedMarquee = [...marqueeTechs, ...marqueeTechs, ...marqueeTechs, ...marqueeTechs];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Skills = () => {
  return (
    <div id="skills" className="py-24 bg-gray-50/50 dark:bg-dark-card/30 relative overflow-hidden transition-colors duration-500">
      
      {/* Modern Tech Stack Marquee */}
      <div className="w-full overflow-hidden bg-white dark:bg-dark-card py-6 mb-16 border-y border-gray-100 dark:border-white/5 relative flex items-center">
        {/* Gradients for fade effect on edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-white dark:from-dark-card to-transparent z-10"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-white dark:from-dark-card to-transparent z-10"></div>
        
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap pl-4"
        >
          {duplicatedMarquee.map((tech, index) => (
            <div key={index} className="mx-6 text-xl font-bold text-gray-400 dark:text-gray-500/50 uppercase tracking-widest inline-flex items-center gap-4">
              <span>{tech}</span>
              <span className="text-primary/50 text-3xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2"
          >
            My Expertise
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 ${category.bg} ${category.color} rounded-2xl flex items-center justify-center text-2xl shadow-inner`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-dark/50 border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="text-2xl">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
