import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import p1 from '../assets/project1.png';
import p2 from '../assets/project2.png';
import p3 from '../assets/project3.png';

const projects = [
  {id:1, title:'E-commerce Website', desc:'React + Tailwind, product listing, cart', img:p1, link:'http://sc-website-one.vercel.app'},
  {id:2, title:'Task Management', desc:'Task  built with React & Tailwind', img:p2, link:'https://react-website-two-alpha.vercel.app/'},
  {id:3, title:'Hotel Project', desc:'This Wev with React & Node', img:p3, link:' https://jami-12.github.io/Assaingment-4'},
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-500 text-center mb-12">Projects</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 } }}
          className="overflow-visible">
          {projects.map(p => (
            <SwiperSlide key={p.id} className="flex justify-center">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col w-full sm:max-w-xs md:max-w-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-56 overflow-hidden cursor-pointer">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-indigo-500 hover:underline font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


