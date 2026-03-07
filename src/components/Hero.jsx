import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse mix-blend-screen"></div>
          <motion.img
            src={profile}
            alt="profile"
            className="w-56 h-56 rounded-full border-4 border-indigo-500 object-cover shadow-lg image-rendering-auto"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-indigo-400">Mujaddid Ahmed Jami</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-3">
            <Typewriter
              words={['Junior Web Developer', 'Frontend Enthusiast', 'React.js Lover']}
              cursor
              loop={true}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-xl">
            Motivated and detail-oriented Junior Web Developer with a passion for building user-friendly websites and web applications. Skilled in React, Tailwind, and modern frontend tools.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow 
             transition-all duration-300 ease-in-out transform cursor-pointer
             hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 
             transition-all duration-300 ease-in-out transform cursor-pointer
             hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Contact
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
