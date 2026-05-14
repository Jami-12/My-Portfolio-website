import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const videoData = [
  {
    id: 1,

    videoSrc: "/my-vedio.mp4",
  },
];

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [video.videoSrc]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative group p-2 bg-black rounded-[2rem] border border-gray-800 shadow-2xl transition-all duration-500 hover:border-indigo-500/50">
      {/* Height reduced for better visibility (h-[350px] to h-[450px]) */}
      <div
        className="relative overflow-hidden rounded-[1.5rem] h-[300px] md:h-[420px] bg-gray-900 cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          poster={video.poster}
        >
          <source src={video.videoSrc} type="video/mp4" />
        </video>

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20"
          >
            {isPlaying ? (
              <Pause className="text-white fill-white" size={28} />
            ) : (
              <Play className="text-white fill-white ml-1" size={28} />
            )}
          </motion.div>
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-indigo-600 transition-all"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <div className="mt-4 px-4 pb-4 text-center">
        <p className="text-[9px] font-black uppercase tracking-[2px] text-indigo-400 mb-1">
          {video.tech}
        </p>
        <h3 className="text-lg md:text-xl font-black text-white">
          {video.title}
        </h3>
      </div>
    </div>
  );
};

export default function VideoSection() {
  return (
    // Reduced padding (py-12) to fit in screen
    <section
      id="portfolio-video"
      className="py-12 md:py-16 bg-gray-950 overflow-hidden relative min-h-fit"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white"
          >⛎<span className="text-indigo-600">Jami</span>{" "}
          </motion.h2>
        </div>

        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1.2 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="video-swiper !pb-12"
          >
            {videoData.map((video) => (
              <SwiperSlide key={video.id}>
                <VideoCard video={video} />
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-pagination-bullet {
              background: #6366f1 !important;
              height: 8px;
              width: 8px;
            }
            .swiper-pagination-bullet-active {
              width: 30px !important;
              border-radius: 8px !important;
            }
            .swiper-slide {
              transition: all 0.5s ease;
              filter: blur(2px);
              transform: scale(0.85);
              opacity: 0.4;
            }
            .swiper-slide-active {
              filter: blur(0);
              transform: scale(1);
              opacity: 1;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
