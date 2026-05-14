import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: '#home' },
  { name: 'About', to: '#about' },
  { name: 'Skills', to: '#skills' },
  { name: 'Projects', to: '#projects' },
  { name: 'Education', to: '#education' },
  { name: 'Contact', to: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    opened: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed w-full top-4 z-[100] px-4"
    >
      <div className="max-w-6xl mx-auto bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-2xl shadow-black/5 dark:shadow-indigo-500/10 transition-colors duration-500">
        <div className="flex items-center justify-between p-3 px-6">
          
          {/* Logo */}
          <div className="flex flex-col cursor-pointer group">
            <span className="text-lg font-black tracking-tighter text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
              MUJADDID<span className="text-indigo-500 text-2xl">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.to}
                className="relative px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-500/10 group"
              >
                {l.name}
                <motion.span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-indigo-500 rounded-full group-hover:w-1/2 transition-all" />
              </a>
            ))}

            <div className="w-[1px] h-6 bg-gray-200 dark:bg-gray-800 mx-2" />

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={toggle}
              className="p-2.5 rounded-xl bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-yellow-400 border border-indigo-100 dark:border-gray-700 shadow-sm transition-all"
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.div
                    key="moon"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                  >
                    <Moon size={18} fill="currentColor" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                  >
                    <Sun size={18} fill="currentColor" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggle} className="p-2 text-gray-700 dark:text-gray-300">
              {dark ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 bg-indigo-500 rounded-lg text-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 h-screen w-full bg-white dark:bg-gray-950 z-[-1] flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((l, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={l.name}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-black text-gray-900 dark:text-white hover:text-indigo-500 transition-colors"
                >
                  {l.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}