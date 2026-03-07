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
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-500 text-2xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 text-2xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-2xl" /> },
    { name: "Node.js (Basic)", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
    { name: "MongoDB (Basic)", icon: <SiMongodb className="text-green-500 text-2xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white text-2xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black dark:text-white text-2xl" /> },
  ];

  const progressSkills = [
    { name: "HTML5", val: 95, icon: <FaHtml5 className="text-orange-500 text-xl" /> },
    { name: "CSS3", val: 90, icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
    { name: "JavaScript (ES6+)", val: 85, icon: <SiJavascript className="text-yellow-500 text-xl" /> },
    { name: "React.js", val: 80, icon: <FaReact className="text-cyan-500 text-xl" /> },
    { name: "Tailwind CSS", val: 80, icon: <SiTailwindcss className="text-sky-400 text-xl" /> },
    { name: "Bootstrap", val: 75, icon: <SiBootstrap className="text-purple-600 text-xl" /> },
    { name: "Node.js (Basic)", val: 60, icon: <FaNodeJs className="text-green-600 text-xl" /> },
    { name: "MongoDB (Basic)", val: 55, icon: <SiMongodb className="text-green-500 text-xl" /> },
    { name: "GitHub", val: 75, icon: <SiGithub className="text-gray-800 dark:text-white text-xl" /> },
    { name: "Vercel", val: 70, icon: <SiVercel className="text-black dark:text-white text-xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-500 text-center mb-12">
          Skills
        </h2>

        {/* Top Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.08 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-slate-200 text-sm flex flex-col items-center gap-2 shadow-sm"
            >
              {s.icon}
              <span className="font-medium">{s.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Progress bars with icons */}
        <div className="grid md:grid-cols-2 gap-6">
          {progressSkills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-medium">
                  {s.icon}
                  <span>{s.name}</span>
                </div>
                <span className="text-sm text-gray-500">{s.val}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full mt-3 overflow-hidden">
                <motion.div
                  className="h-3 bg-gradient-to-r from-indigo-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: s.val + "%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
