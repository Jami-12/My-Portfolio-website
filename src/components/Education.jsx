import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Moulvibazar Govt College',
    duration: 'Inter First Year (Present)',
    location: 'Moulvibazar, Sylhet',
    desc: 'Focusing on Science group with a keen interest in Mathematics and Physics.',
    status: 'Ongoing'
  },
  {
    id: 2,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Moulvibazar Govt High School',
    duration: 'Graduated in 2025',
    location: 'Moulvibazar, Sylhet',
    desc: 'Successfully completed with a strong academic record and active participation in science fairs.',
    status: 'Completed'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#FDFBF6] dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 mb-4"
          >
            <GraduationCap size={30} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Academic Journey
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-4 md:ml-10 space-y-12 pb-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-0">
                <div className={`w-5 h-5 rounded-full border-4 border-[#FDFBF6] dark:border-gray-950 ${
                  edu.status === 'Ongoing' ? 'bg-indigo-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-600'
                }`} />
                {edu.status === 'Ongoing' && (
                  <div className="absolute -inset-2 bg-indigo-500/20 rounded-full animate-ping" />
                )}
              </div>

              {/* Education Card */}
              <div className="group bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    {edu.degree}
                  </h3>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
                    edu.status === 'Ongoing' 
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold italic">
                    <MapPin size={16} className="text-indigo-500" />
                    {edu.institution}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    {edu.duration}
                  </div>

                  <p className="pt-4 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}