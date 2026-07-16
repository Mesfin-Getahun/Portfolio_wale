import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaLaptopCode } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import { useTheme } from '../context/ThemeContext';

const GithubStats = () => {
  const { theme } = useTheme();
  const username = "lali-e21"; // Or Mesfin-Getahun based on codebase references

  const stats = [
    { label: "Contributions", value: "1,000+", icon: <FaCodeBranch />, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Repositories", value: "35+", icon: <BiGitRepoForked />, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Stars", value: "100+", icon: <FaStar />, color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { label: "Followers", value: "50+", icon: <FaUsers />, color: "text-purple-500", bg: "bg-purple-500/10" }
  ];

  const topLanguages = [
    { name: "JavaScript", percent: 45, color: "bg-yellow-400" },
    { name: "TypeScript", percent: 25, color: "bg-blue-500" },
    { name: "HTML/CSS", percent: 20, color: "bg-orange-500" },
    { name: "Python", percent: 10, color: "bg-blue-400" }
  ];

  return (
    <div id="github" className="py-24 relative overflow-hidden bg-white dark:bg-dark-card transition-colors duration-500">
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2 flex items-center justify-center gap-2"
          >
            <FaGithub className="text-lg" /> My Open Source
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            GitHub Activity
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Stats Cards */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-dark p-6 rounded-2xl border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Languages & Activity Graph */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Top Languages */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-dark p-6 rounded-2xl border border-gray-100 dark:border-white/5"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaLaptopCode className="text-primary" /> Top Languages
              </h3>
              
              <div className="space-y-4">
                {topLanguages.map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                      <span className="text-gray-500">{lang.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${lang.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contribution Graph (Image from github-readme-stats) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-dark p-6 rounded-2xl border border-gray-100 dark:border-white/5 overflow-x-auto"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contribution Graph</h3>
              <div className="min-w-[600px] flex justify-center">
                <img 
                  src={`https://ghchart.rshah.org/${theme === 'dark' ? '0ea5e9' : '0ea5e9'}/${username}`} 
                  alt={`${username}'s Github chart`} 
                  className={`w-full max-w-full ${theme === 'dark' ? 'opacity-90 grayscale brightness-150 contrast-125 sepia-[.2] hue-rotate-[180deg]' : ''}`}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
