import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiVercel,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", shadow: "hover:shadow-orange-500/20", val: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", shadow: "hover:shadow-blue-500/20", val: 90 },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500", shadow: "hover:shadow-yellow-500/20", val: 85 },
    { name: "React", icon: <FaReact />, color: "text-cyan-500", shadow: "hover:shadow-cyan-500/20", val: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400", shadow: "hover:shadow-sky-400/20", val: 85 },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600", shadow: "hover:shadow-purple-600/20", val: 75 },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600", shadow: "hover:shadow-green-600/20", val: 60 },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", shadow: "hover:shadow-green-500/20", val: 55 },
    { name: "GitHub", icon: <SiGithub />, color: "text-gray-700 dark:text-white", shadow: "hover:shadow-gray-500/20", val: 80 },
    { name: "Vercel", icon: <SiVercel />, color: "text-black dark:text-white", shadow: "hover:shadow-gray-500/20", val: 75 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 bg-[#FDFBF6] dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[4px] font-bold text-indigo-500 mb-2"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            My Tech Stack
          </motion.h2>
        </div>

        {/* Skills Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all duration-300 shadow-sm ${skill.shadow} hover:border-transparent`}
            >
              {/* Icon Container */}
              <div className={`text-4xl ${skill.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-tight">
                {skill.name}
              </h3>

              {/* Mini Progress Indicator */}
              <div className="w-full mt-2">
                <div className="flex justify-between text-[10px] font-black text-gray-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>LEVEL</span>
                  <span>{skill.val}%</span>
                </div>
                <div className="w-full h-[3px] bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.val}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color.replace('text', 'bg')} opacity-60`}
                  />
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${skill.color.replace('text', 'from')}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Knowledge Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-gray-400 text-sm italic"
        >
          * Always learning and expanding my stack with modern frameworks and best practices.
        </motion.p>
      </div>
    </section>
  );
}