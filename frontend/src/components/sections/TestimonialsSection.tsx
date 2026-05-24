import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun & Meera",
    location: "Bangalore",
    review:
      "Valarco gave us the most unforgettable honeymoon experience across Kerala. Every destination felt cinematic and luxurious.",
  },

  {
    name: "Rahul Sharma",
    location: "Chennai",
    review:
      "The resorts, private cab service and personalized itinerary were beyond expectations. Truly premium travel experience.",
  },

  {
    name: "Sophia Williams",
    location: "London",
    review:
      "One of the most beautiful South India journeys I've ever experienced. The tea estates and backwaters were magical.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#041826] py-40 px-6 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[10px] text-[#d4af37] mb-6 text-sm">
            Testimonials
          </p>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-white leading-tight">
            Stories From
            <br />
            Our Travelers
          </h1>

          <p className="text-white/60 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-9">
            Luxury journeys crafted with unforgettable cinematic experiences
            across Kerala and Tamil Nadu.
          </p>

        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-10
                hover:-translate-y-3
                hover:border-[#d4af37]/30
                transition-all
                duration-500
                group
              "
            >

              {/* GOLD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* QUOTE */}
              <div className="relative z-10">

                <div className="text-[#d4af37] text-6xl mb-8 font-serif">
                  “
                </div>

                <p className="text-white/80 text-lg leading-9 mb-10">
                  {item.review}
                </p>

                {/* PROFILE */}
                <div className="border-t border-white/10 pt-6">

                  <h3 className="text-white text-2xl font-serif mb-2">
                    {item.name}
                  </h3>

                  <p className="text-[#d4af37] tracking-[3px] uppercase text-sm">
                    {item.location}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}