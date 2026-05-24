import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa6";

export default function TestimonialSection() {

  const testimonials = [

    {
      name: "Arjun Kumar",
      location: "Chennai",

      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      review:
        "Valarco created one of the most unforgettable luxury experiences for our family. The resorts, destinations and hospitality were absolutely cinematic.",
    },

    {
      name: "Priya & Rahul",
      location: "Bangalore",

      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

      review:
        "Our honeymoon trip across Kerala was beautifully planned. Every location felt premium and luxurious. Truly an international-level experience.",
    },

    {
      name: "Sanjay Menon",
      location: "Coimbatore",

      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",

      review:
        "From tea estates to private beach resorts, everything was perfectly organized. Valarco gives a truly luxury travel feeling.",
    },

  ];

  return (

    <section
      className="
        relative
        py-32
        px-6
        overflow-hidden
      "
    >

      {/* GOLD LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_40%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p
            className="
              uppercase
              tracking-[8px]
              text-[#d4af37]
              text-sm
              mb-5
            "
          >
            Client Experiences
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-serif
            "
          >
            What Travelers Say
          </h2>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {testimonials.map((item, index) => (

            <div
              key={index}
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
                transition-all
                duration-500
              "
            >

              {/* QUOTE ICON */}
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-[#d4af37]
                  flex
                  items-center
                  justify-center
                  text-black
                  text-2xl
                  mb-8
                "
              >
                <FaQuoteLeft />
              </div>

              {/* REVIEW */}
              <p
                className="
                  text-white/75
                  leading-9
                  text-lg
                  mb-10
                "
              >
                {item.review}
              </p>

              {/* STARS */}
              <div className="flex gap-2 mb-8">

                {[1,2,3,4,5].map((star) => (

                  <FaStar
                    key={star}
                    className="text-[#d4af37]"
                  />

                ))}

              </div>

              {/* USER */}
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-16
                    h-16
                    rounded-full
                    object-cover
                    border
                    border-[#d4af37]
                  "
                />

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-white/50 text-sm">
                    {item.location}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}