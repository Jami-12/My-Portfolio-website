import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-indigo-500 text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6"
          >
            Hi, I’m <strong className="text-indigo-500">Mujaddid Ahmed Jami</strong>, 
            a <span className="font-medium">Junior Web Developer</span> from Moulvibazar, Sylhet, Bangladesh.  
            I love building <span className="font-medium">responsive, accessible, and animated</span> web applications 
            using <strong>React, Tailwind CSS</strong>, and modern tools.  
            I’m also familiar with <strong>REST APIs, Git/GitHub, and basic Node.js</strong>.  
            <br /><br />
            <span className="italic text-sm text-gray-500">
              Date of Birth: March 12, 2008
            </span>
          </motion.p>

          <div className="grid sm:grid-cols-2 sm:px-4 gap-4 mt-6">
            <motion.a
              href="mailto:mujaddidahmedjami2025@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
            >
              <FaEnvelope className="text-indigo-500" />
              <span className="text-sm">mujaddidahmedjami2025@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+8801703768306"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
            >
              <FaPhone className="text-green-500" />
              <span className="text-sm">+880 1703-768306</span>
            </motion.a>

            <motion.a
              href="https://github.com/Jami-12"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
            >
              <FaGithub className="text-gray-800 dark:text-white" />
              <span className="text-sm">github.com/Jami-12</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
            >
              <FaLinkedin className="text-blue-600" />
              <span className="text-sm">LinkedIn Profile</span>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/share/1Ce3WSz7g3/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
            >
              <FaFacebook className="text-blue-700" />
              <span className="text-sm">Facebook</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/mujaddid__jami?igsh=MXRmYmN5OGIwODZoOQ=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
            >
              <FaInstagram className="text-pink-500" />
              <span className="text-sm">Instagram</span>
            </motion.a>

            <motion.a
              href="https://mujaddid-jami-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition sm:col-span-2"
            >
              <FaGlobe className="text-purple-600" />
              <span className="text-sm">My Portfolio Website</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
