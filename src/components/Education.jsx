import React from 'react';
import { motion } from 'framer-motion';

export default function Education(){
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-500 text-center mb-8">Education</h2>
        <div className="space-y-4">
          <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
            <h3 className="font-semibold">Higher Secondary Certificate (HSC)</h3>
            <p className="text-gray-600 dark:text-gray-400">Moulvibazar Govt College — Inter First Year</p>
          </motion.div>
          <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
            <h3 className="font-semibold">Secondary School Certificate (SSC)</h3>
            <p className="text-gray-600 dark:text-gray-400">Moulvibazar Govt High School — 2025</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
