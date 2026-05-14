import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Swiper styles import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import p1 from '../assets/project1.png';
import p2 from '../assets/project2.png';
import p3 from '../assets/project3.png';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    desc: 'A full-featured shopping experience with product listing and cart management.',
    tags: ['React', 'Tailwind', 'Vercel'],
    img: p1,
    link: 'http://sc-website-one.vercel.app',
  },
  {
    id: 2,
    title: 'Task Management',
    desc: 'Highly interactive task tracker built for efficiency and smooth workflow.',
    tags: ['React', 'Framer Motion', 'UI/UX'],
    img: p2,
    link: 'https://react-website-two-alpha.vercel.app/',
  },
  {
    id: 3,
    title: 'Hotel Booking System',
    desc: 'Premium hotel landing page with booking API integration and node backend.',
    tags: ['React', 'Node.js', 'MongoDB'],
    img: p3,
    link: 'https://jami-12.github.io/Assaingment-4',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#FDFBF6] dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[4px] font-bold text-indigo-500 mb-2"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 }
          }}
          className="pb-16 !overflow-visible"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <motion.div
                className="group relative bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden h-full flex flex-col"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-indigo-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={p.link} 
                      target="_blank" 
                      className="p-3 bg-white rounded-full text-indigo-600 hover:bg-indigo-50 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {p.desc}
                  </p>

                  <div className="pt-6 border-t border-gray-50 dark:border-gray-800">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-4 transition-all"
                    >
                      LIVE PREVIEW <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Global Styles for Swiper Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #6366f1 !important;
          width: 10px;
          height: 10px;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}