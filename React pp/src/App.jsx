import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa6';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import PortfolioWork from './components/PortfolioWork';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-light dark:bg-dark min-h-screen font-inter text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden flex flex-col">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Services />
      <PortfolioWork />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-5 md:px-[10%]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                <span className="text-primary">M</span>esfin <span className="text-primary">G</span>.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Full-Stack Developer</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {['header', 'about', 'services', 'portfolio', 'skills', 'contact'].map((item) => (
                <Link 
                  key={item}
                  to={item} 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-600 dark:text-gray-300 text-sm uppercase tracking-wider font-medium cursor-pointer hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {item === 'header' ? 'Home' : item}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
              title="Back to Top"
            >
              <FaArrowUp />
            </button>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200 dark:border-white/5 text-gray-500 dark:text-gray-400 text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} Mesfin Getahun. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
