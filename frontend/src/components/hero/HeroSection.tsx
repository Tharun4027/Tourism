import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "../../assets/videos/hero-video.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-min-h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#031522]"></div>

      {/* LIGHT EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_45%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-min-h-screen px-6">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[10px] text-[#d4af37] mb-6 text-sm md:text-base"
        >
          Luxury South India Experiences
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-5xl md:text-7xl xl:text-[110px] font-serif leading-[1.05] max-w-7xl"
        >
          Cinematic Journeys
          <br />
          Across South India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 text-white/80 text-lg md:text-2xl max-w-4xl leading-9"
        >
          Discover misty mountains, luxury resorts, tea estates,
          heritage temples and unforgettable handcrafted travel experiences.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="flex flex-col md:flex-row gap-6 mt-14"
        >
          <Link to="/destinations">
            <button className="bg-[#d4af37] text-black px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 hover:bg-[#f1d77a] transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.35)]">
              Explore Destinations
            </button>
          </Link>

          <Link to="/packages">
            <button className="border border-white/20 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
              View Luxury Packages
            </button>
          </Link>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 flex flex-col items-center text-white/60"
        >
          <p className="tracking-[4px] uppercase text-xs mb-3">
            Scroll
          </p>

          <div className="w-[1px] h-16 bg-white/40"></div>
        </motion.div>

      </div>

    </section>
  );
}