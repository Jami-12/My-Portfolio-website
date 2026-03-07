import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

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
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setDark(!dark);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div>
          <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Mujaddid Ahmed Jami
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Junior Web Developer
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.to}
              className="relative group text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
              onClick={() => setOpen(false)}
            >
              {l.name}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-indigo-500 dark:bg-indigo-400 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-3 shadow-lg">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.to}
              className="relative group block text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
              onClick={() => setOpen(false)}
            >
              {l.name}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-indigo-500 dark:bg-indigo-400 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
