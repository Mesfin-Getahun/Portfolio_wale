import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa6';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import PortfolioWork from './components/PortfolioWork';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-light dark:bg-dark min-h-screen font-inter text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden flex flex-col">
      <Header />
      <About />
      <Experience />
      <Services />
      <PortfolioWork />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-white/5 pt-16 pb-8 text-center transition-colors duration-500">
        <div className="container mx-auto px-5 md:px-[10%]">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
              Walelign Enemayehu
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Senior Full Stack MERN Developer</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mb-6">Building modern digital experiences.</p>
            
            <div className="flex gap-4">
              <a href="https://github.com/lali-e21" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-semibold">GitHub</a>
              <a href="mailto:walelign2129@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-semibold">Email</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-white/5">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
              title="Back to Top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
