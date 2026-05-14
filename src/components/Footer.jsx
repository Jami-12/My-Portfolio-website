import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/mujaddidjami", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/mujaddidjami", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/mujaddidjami", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500">
      
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Brand/Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
            JAMI<span className="text-indigo-600">.</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Building digital experiences with passion and precision.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-6 mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/30"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-10 p-4 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 transition-colors group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>

        {/* Bottom Copyright */}
        <div className="w-full pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
          <p>© {new Date().getFullYear()} Mujaddid Ahmed Jami</p>
          
          <div className="flex gap-4">
            <span className="hover:text-indigo-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-indigo-500 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}