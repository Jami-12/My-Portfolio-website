import React from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, FaPhone, FaGithub, FaLinkedin, 
  FaGlobe, FaFacebook, FaInstagram, FaMapMarkerAlt, FaBirthdayCake 
} from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-[#FDFBF6] dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[4px] font-bold text-indigo-500 mb-3"
          >
            Story
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            About Me
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Intro Card - Occupies 2 columns */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                I am <span className="text-indigo-600 dark:text-indigo-400">Mujaddid Ahmed Jami</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                "Building responsive, accessible, and animated web applications using React, Tailwind CSS, and modern tools."
              </p>
              <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                Based in Moulvibazar, Sylhet, I focus on crafting clean user interfaces. 
                I’m highly motivated to explore modern frontend architectures and backend basics like Node.js.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-gray-50 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-600">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Sylhet, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-50 dark:bg-pink-500/10 rounded-2xl text-pink-600">
                  <FaBirthdayCake />
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">March 12, 2008</span>
              </div>
            </div>
          </motion.div>

          {/* Social Bento Grid - Occupies 1 column */}
          <div className="grid grid-cols-2 gap-4">
            <SocialCard 
              href="https://github.com/Jami-12" 
              icon={<FaGithub size={24} />} 
              label="GitHub" 
              color="hover:text-black dark:hover:text-white"
            />
            <SocialCard 
              href="https://www.linkedin.com/in/your-linkedin-id" 
              icon={<FaLinkedin size={24} />} 
              label="LinkedIn" 
              color="hover:text-blue-600"
            />
            <SocialCard 
              href="https://www.facebook.com/share/1Ce3WSz7g3/" 
              icon={<FaFacebook size={24} />} 
              label="Facebook" 
              color="hover:text-blue-700"
            />
            <SocialCard 
              href="https://www.instagram.com/mujaddid__jami" 
              icon={<FaInstagram size={24} />} 
              label="Instagram" 
              color="hover:text-pink-500"
            />
            
            {/* Contact Large Card */}
            <motion.a
              variants={itemVariants}
              href="mailto:mujaddidahmedjami2025@gmail.com"
              className="col-span-2 p-6 rounded-[2rem] bg-indigo-600 text-white flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <FaEnvelope size={28} className="mb-4" />
                <p className="font-bold text-lg">Let's Talk</p>
                <p className="text-indigo-100 text-xs truncate">mujaddidahmedjami2025@gmail.com</p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            </motion.a>
          </div>
        </motion.div>

        {/* Portfolio Link Footer */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6"
        >
          <a
            href="https://mujaddid-jami-portfolio.vercel.app"
            target="_blank"
            className="w-full p-6 rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-between group hover:border-indigo-500 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl text-purple-600 group-hover:rotate-12 transition-transform">
                <FaGlobe size={22} />
              </div>
              <span className="font-bold text-gray-800 dark:text-gray-200">Visit Main Portfolio Website</span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
              <FaGlobe />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for Social Cards
function SocialCard({ href, icon, label, color }) {
  return (
    <motion.a
      whileHover={{ y: -5 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 transition-all group ${color}`}
    >
      <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
    </motion.a>
  );
}