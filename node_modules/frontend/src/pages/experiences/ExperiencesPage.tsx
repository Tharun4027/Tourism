import { motion } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../layouts/Footer";

import resort from "../../assets/images/experiences/resort.jpg";
import houseboat from "../../assets/images/experiences/houseboat.jpg";
import temple from "../../assets/images/experiences/temple.jpg";
import teaEstate from "../../assets/images/experiences/tea-estate.jpg";
import ayurveda from "../../assets/images/experiences/ayurveda.jpg";
import waterfall from "../../assets/images/experiences/waterfall.jpg";

export default function ExperiencesPage() {

  const experiences = [
    {
      title: "Luxury Resorts",
      subtitle: "Premium Stays",
      image: resort,
    },

    {
      title: "Houseboat Cruises",
      subtitle: "Kerala Backwaters",
      image: houseboat,
    },

    {
      title: "Temple Heritage",
      subtitle: "Cultural Journeys",
      image: temple,
    },

    {
      title: "Tea Estate Tours",
      subtitle: "Misty Mountains",
      image: teaEstate,
    },

    {
      title: "Ayurveda Retreats",
      subtitle: "Luxury Wellness",
      image: ayurveda,
    },

    {
      title: "Waterfall Adventures",
      subtitle: "Nature Escapes",
      image: waterfall,
    },
  ];

  return (
    <main className="bg-[#031522] min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden">

        {/* BACKGROUND */}
        <img
          src={houseboat}
          alt="Experiences"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            scale-110
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* GOLD LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%)]"></div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            h-full
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
          "
        >

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              uppercase
              tracking-[10px]
              text-[#d4af37]
              mb-6
            "
          >
            Curated Luxury Experiences
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              text-white
              text-6xl
              md:text-8xl
              font-serif
              leading-tight
              max-w-6xl
            "
          >
            Experience South India
            <br />
            Like Never Before
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="
              text-white/70
              text-xl
              max-w-4xl
              mx-auto
              mt-8
              leading-9
            "
          >
            Discover cinematic journeys, luxury stays, tea plantations, backwaters, temples and unforgettable handcrafted travel experiences.
          </motion.p>

        </div>

      </section>

      {/* EXPERIENCE GRID */}
      <section className="py-40 px-6">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-24">

            <p className="uppercase tracking-[8px] text-[#d4af37] mb-6">
              Signature Experiences
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-serif">
              Curated Premium Activities
            </h1>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  h-[600px]
                  cursor-pointer
                "
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-1000
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

                {/* BORDER */}
                <div className="absolute inset-0 border border-white/10 rounded-[35px]"></div>

                {/* CONTENT */}
                <div className="absolute bottom-10 left-8">

                  <p className="uppercase tracking-[5px] text-[#d4af37] text-sm mb-3">
                    {item.subtitle}
                  </p>

                  <h2 className="text-white text-5xl font-serif mb-6">
                    {item.title}
                  </h2>

                  <button
                    className="
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/20
                      px-6
                      py-3
                      rounded-full
                      text-white
                      hover:bg-white/20
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    Explore Experience
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY EXPERIENCE */}
      <section className="bg-[#071c2b] py-40 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[8px] text-[#d4af37] mb-6">
              Why Choose Valarco
            </p>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-10">
              Luxury Experiences Crafted With Elegance
            </h1>

            <p className="text-white/70 text-lg leading-9">
              Every Valarco journey is carefully designed with cinematic destinations, luxury stays and unforgettable emotional experiences.
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">

              <h2 className="text-5xl text-[#d4af37] font-serif mb-4">
                50+
              </h2>

              <p className="text-white/70 leading-8">
                Curated Experiences
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">

              <h2 className="text-5xl text-[#d4af37] font-serif mb-4">
                10K+
              </h2>

              <p className="text-white/70 leading-8">
                Happy Travelers
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">

              <h2 className="text-5xl text-[#d4af37] font-serif mb-4">
                5★
              </h2>

              <p className="text-white/70 leading-8">
                Luxury Service
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">

              <h2 className="text-5xl text-[#d4af37] font-serif mb-4">
                24/7
              </h2>

              <p className="text-white/70 leading-8">
                Dedicated Support
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />

    </main>
  );
}