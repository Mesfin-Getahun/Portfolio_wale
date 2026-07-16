import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFacebook, FaTelegram, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="py-24 relative overflow-hidden text-gray-800 dark:text-white">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:basis-5/12"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">Get In Touch</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Let's Build Something Amazing Together.</h1>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Available for</h3>
              <ul className="space-y-3">
                {['Full-time', 'Freelance', 'Remote', 'Contract'].map((type, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 font-medium">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm">✔</span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a aria-label="Email" href="mailto:walelign2129@gmail.com" className="w-12 h-12 rounded-full bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all hover:-translate-y-1">
                <FaEnvelope className="text-xl" />
              </a>
             
              <a aria-label="Instagram" href="https://www.instagram.com/lalie_2129/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all hover:-translate-y-1">
                <FaInstagram className="text-xl" />
                </a>
              <a aria-label="GitHub" href="https://github.com/lali-e21" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all hover:-translate-y-1">
                <FaGithub className="text-xl" />
              </a>
              <a aria-label="Telegram" href="https://t.me/walie_21" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all hover:-translate-y-1">
                <FaTelegram className="text-xl" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:basis-7/12 w-full"
          >
            <div className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-3xl shadow-xl shadow-black/5 dark:shadow-black/20 border border-gray-100 dark:border-white/5">
              <form 
                action="https://formspree.io/f/meengqzq" 
                method="POST" 
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      className="w-full bg-gray-50 dark:bg-darker text-gray-900 dark:text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-gray-200 dark:border-transparent focus:border-primary dark:focus:border-primary focus:bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      required 
                      className="w-full bg-gray-50 dark:bg-darker text-gray-900 dark:text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-gray-200 dark:border-transparent focus:border-primary dark:focus:border-primary focus:bg-white"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Message</label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    required
                    placeholder="How can I help you?" 
                    className="w-full bg-gray-50 dark:bg-darker text-gray-900 dark:text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y border border-gray-200 dark:border-transparent focus:border-primary dark:focus:border-primary focus:bg-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-white w-full md:w-auto md:px-14 py-4 rounded-xl text-lg font-medium hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'SUCCESS' && (
                  <p className="text-green-500 dark:text-green-400 font-medium mt-2">Thank you! Your message has been sent successfully.</p>
                )}
                {status === 'ERROR' && (
                  <p className="text-red-500 dark:text-red-400 font-medium mt-2">Oops! There was a problem submitting your form.</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
