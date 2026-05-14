import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/profile.png'; 

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smooth sequential animation
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 18,
      },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.85, opacity: 0, y: 15 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1], // Playful spring
        delay: 0.4
      } 
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#FDFBF6] dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Backdrop Glow Simulation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[500px] opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-[#1F6E66] blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* Main Container - flex-col-reverse makes image go TOP on mobile */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 px-6 py-16 md:py-12 relative z-10">
        
        {/* Left Side: Content (Now on Bottom on Mobile) */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 w-full"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#1A202C] dark:text-white leading-[1.1] md:leading-[1]"
            >
              Hey There,<br /> I'm <span className="text-[#38706B] dark:text-indigo-400">Jami</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[#4A5568] dark:text-gray-400 mt-6 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
            >
              Junior Web Developer from Bangladesh. <br className="hidden md:block" />
              <span className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-500">I design beautifully simple websites, and I love what I do.</span>
            </motion.p>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-4xl font-semibold text-[#1F6E66] dark:text-indigo-300 mt-4 h-12"
            >
              <Typewriter
                words={['React.js Master', 'Frontend Architect', 'Tailwind Expert']}
                cursor
                loop={true}
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={2500}
              />
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-8 md:px-10 py-4 rounded-full bg-[#1A202C] dark:bg-gray-800 text-white font-bold shadow-lg
                transition-all duration-300 hover:bg-[#38706B] dark:hover:bg-indigo-600 hover:scale-[1.04]"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 md:px-10 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-[#4A5568] dark:text-gray-100 font-semibold
                transition-all duration-300 hover:border-[#1A202C] hover:scale-[1.04]"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Profile Image (Now on Top on Mobile) */}
        <div className="flex-none relative md:mr-10">
          <motion.div
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 opacity-60">
              <div className="absolute inset-0 rounded-full bg-[#1F6E66] blur-2xl"></div>
            </div>

            {/* PROFILE IMAGE with floating animation */}
            <motion.img
              src={profile}
              alt="Mujaddid Ahmed Jami - Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl relative z-20
              ring-4 md:ring-8 ring-white dark:ring-gray-900 ring-offset-4 ring-offset-[#FDFBF6] dark:ring-offset-gray-950"
              animate={{ y: [0, -10, 0] }} // Gentle float animation
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          
          <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] uppercase font-semibold tracking-[4px] text-gray-400">
            JUNIOR DEVELOPER
          </div>
        </div>

      </div>
    </section>
  );
}