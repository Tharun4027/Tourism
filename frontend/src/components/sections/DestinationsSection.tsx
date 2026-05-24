import { motion } from "framer-motion";

import munnar from "../../assets/images/kerala/munnar.jpg";
import wayanad from "../../assets/images/kerala/Wayanad.jpg";
import ooty from "../../assets/images/tamilnadu/ooty.jpg";
import yercaud from "../../assets/images/tamilnadu/yercaud.jpg";

export default function DestinationsSection() {
  const destinations = [
    {
      title: "Munnar",
      image: munnar,
      subtitle: "Tea Estate Luxury",
    },
    {
      title: "Wayanad",
      image: wayanad,
      subtitle: "Waterfalls & Forests",
    },
    {
      title: "Ooty",
      image: ooty,
      subtitle: "Misty Hill Escape",
    },
    {
      title: "Yercaud",
      image: yercaud,
      subtitle: "Hidden Luxury Hills",
    },
  ];

  return (
    <section className="bg-[#031522] py-40 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-20 flex-wrap gap-10">

          <div>
            <p className="uppercase tracking-[8px] text-[#d4af37] mb-5">
              Signature Destinations
            </p>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight max-w-3xl">
              Explore South India Through Cinematic Luxury
            </h1>
          </div>

          <p className="text-white/60 max-w-xl text-lg leading-8">
            Premium handcrafted journeys across Kerala and Tamil Nadu designed for unforgettable experiences.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {destinations.map((place, index) => (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="group relative overflow-hidden rounded-[35px] h-[600px] cursor-pointer"
            >

              <img
                src={place.image}
                alt={place.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

              <div className="absolute inset-0 border border-white/10 rounded-[35px]"></div>

              <div className="absolute bottom-10 left-8">

                <p className="uppercase tracking-[5px] text-[#d4af37] text-sm mb-3">
                  {place.subtitle}
                </p>

                <h2 className="text-white text-5xl font-serif mb-6">
                  {place.title}
                </h2>

                <button className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300">
                  Explore Destination
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}