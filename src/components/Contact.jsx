import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="contact" className="py-28 bg-[#FDFBF6] dark:bg-gray-950 transition-colors duration-500 overflow-hidden relative">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-[4px] font-bold text-indigo-500 mb-4">
              Get in touch
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              Let’s build something <span className="text-indigo-600">extraordinary</span> together.
            </motion.h2>
            
            <div className="space-y-8 mt-12">
              <ContactInfo 
                icon={<Mail className="text-indigo-500" />} 
                title="Email Me" 
                detail="mujaddidahmedjami2025@gmail.com" 
                href="mailto:mujaddidahmedjami2025@gmail.com"
              />
              <ContactInfo 
                icon={<Phone className="text-green-500" />} 
                title="Call Me" 
                detail="+880 1703-768306" 
                href="tel:+8801703768306"
              />
              <ContactInfo 
                icon={<MapPin className="text-red-500" />} 
                title="Location" 
                detail="Moulvibazar, Sylhet, BD" 
              />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-950 outline-none transition-all duration-300 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-950 outline-none transition-all duration-300 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can I help you?" 
                  className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-950 outline-none transition-all duration-300 dark:text-white resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 transition-all duration-300"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, detail, href }) {
  const content = (
    <div className="group flex items-center gap-6 p-2">
      <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[2px]">{title}</p>
        <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{detail}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}