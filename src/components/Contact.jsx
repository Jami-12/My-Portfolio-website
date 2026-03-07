import React from 'react';
import { motion } from 'framer-motion';

export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-500 text-center mb-8">Contact</h2>
        <motion.form initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <input placeholder="Your name" className="w-full p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"/>
          <input placeholder="Your email" className="w-full p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"/>
          <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"></textarea>
          <button className="w-full py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold">Send Message</button>
        </motion.form>
      </div>
    </section>
  )
}
