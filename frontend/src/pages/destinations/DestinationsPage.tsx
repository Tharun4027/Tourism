import Navbar from "../../components/Navbar/Navbar";
import FooterSection from "../../components/sections/Footer";

import InteractiveMap from "../../components/map/InteractiveMap";

import munnar from "../../assets/images/kerala/munnar.jpg";
import wayanad from "../../assets/images/kerala/Wayanad.jpg";
import kovalam from "../../assets/images/kerala/kovalam.jpg";

import ooty from "../../assets/images/tamilnadu/ooty.jpg";
import kodaikanal from "../../assets/images/tamilnadu/kodaikanal.jpg";
import mahabalipuram from "../../assets/images/tamilnadu/mahabalipuram.jpg";

import dhanushkodi from "../../assets/images/tamilnadu/dhanushkodi.jpg";

import {
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";

export default function DestinationsPage() {

  const destinations = [

    {
      title: "Munnar",
      category: "Tea Estate Luxury",
      image: munnar,
      desc:
        "Experience misty mountains, tea plantations and cinematic luxury resorts.",
    },

    {
      title: "Wayanad",
      category: "Forest Escape",
      image: wayanad,
      desc:
        "Discover waterfalls, forest retreats and premium nature experiences.",
    },

    {
      title: "Kovalam",
      category: "Beach Paradise",
      image: kovalam,
      desc:
        "Private beach resorts, sunset views and unforgettable coastal luxury.",
    },

    {
      title: "Ooty",
      category: "Hill Station",
      image: ooty,
      desc:
        "Colonial charm, luxury mountain resorts and misty scenic escapes.",
    },

    {
      title: "Kodaikanal",
      category: "Romantic Escape",
      image: kodaikanal,
      desc:
        "Lake views, luxury stays and peaceful mountain experiences.",
    },

    {
      title: "Mahabalipuram",
      category: "Heritage Coast",
      image: mahabalipuram,
      desc:
        "Ancient temples, beachside resorts and luxury heritage journeys.",
    },

    {
      title: "Dhanushkodi",
      category: "Hidden Paradise",
      image: dhanushkodi,
      desc:
        "Ocean views, untouched beauty and cinematic island experiences.",
    },

  ];

  return (

    <div className="bg-[#02111b] text-white overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] overflow-hidden">

        {/* BG IMAGE */}
        <img
          src={munnar}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* GOLD LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_40%)]"></div>

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

          <p
            className="
              uppercase
              tracking-[10px]
              text-[#d4af37]
              text-sm
              mb-6
            "
          >
            Luxury Destinations
          </p>

          <h1
            className="
              text-5xl
              md:text-8xl
              font-serif
              leading-none
              max-w-6xl
            "
          >
            Explore South India
          </h1>

          <p
            className="
              mt-8
              text-white/70
              max-w-3xl
              text-lg
              leading-9
            "
          >
            Discover cinematic journeys across Kerala and Tamil Nadu with
            luxury stays, tea estates, beaches and unforgettable experiences.
          </p>

        </div>

      </section>

      {/* INTERACTIVE MAP */}
      <InteractiveMap />

      {/* DESTINATION GRID */}
      <section className="relative py-32 px-6">

        {/* GOLD LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_45%)]"></div>

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
              Premium Destinations
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-serif
              "
            >
              Curated Luxury Journeys
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {destinations.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  h-[650px]
                  border
                  border-white/10
                  hover:-translate-y-3
                  transition-all
                  duration-700
                "
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* CONTENT */}
                <div
                  className="
                    absolute
                    bottom-0
                    p-10
                    z-10
                  "
                >

                  {/* CATEGORY */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      mb-5
                    "
                  >

                    <FaLocationDot className="text-[#d4af37]" />

                    <p
                      className="
                        uppercase
                        tracking-[5px]
                        text-[#d4af37]
                        text-xs
                      "
                    >
                      {item.category}
                    </p>

                  </div>

                  {/* TITLE */}
                  <h2
                    className="
                      text-5xl
                      font-serif
                      mb-5
                    "
                  >
                    {item.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-white/75
                      leading-8
                      mb-8
                    "
                  >
                    {item.desc}
                  </p>

                  {/* BUTTON */}
                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      bg-[#d4af37]
                      hover:bg-[#f0c94d]
                      text-black
                      px-7
                      py-4
                      rounded-full
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Explore Destination
                    <FaArrowRight />
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-32 px-6">

        <div
          className="
            max-w-6xl
            mx-auto
            rounded-[45px]
            overflow-hidden
            relative
            border
            border-white/10
          "
        >

          {/* GOLD LIGHT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_50%)]"></div>

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              text-center
              px-10
              py-24
              bg-white/5
              backdrop-blur-xl
            "
          >

            <p
              className="
                uppercase
                tracking-[8px]
                text-[#d4af37]
                text-sm
                mb-6
              "
            >
              Start Your Luxury Journey
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-serif
                mb-8
              "
            >
              Let Valarco Plan
              <br />
              Your Dream Vacation
            </h2>

            <p
              className="
                text-white/70
                max-w-3xl
                mx-auto
                leading-9
                text-lg
              "
            >
              Experience handcrafted cinematic travel experiences across South India.
            </p>

            <button
              className="
                mt-10
                bg-[#d4af37]
                hover:bg-[#f0c94d]
                text-black
                px-10
                py-5
                rounded-full
                text-lg
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Book Luxury Experience
            </button>

          </div>

        </div>

      </section>

      <FooterSection />

    </div>
  );
}