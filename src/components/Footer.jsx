import React from 'react';

export default function Footer(){
  return (
    <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400">
      © {new Date().getFullYear()} Mujaddid Ahmed Jami — Built with 🤖
    </footer>
  )
}
