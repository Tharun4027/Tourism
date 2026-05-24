import { useState } from "react";

import {
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

import mapImage from "../../assets/images/map/south-india-map.webp";

import munnar from "../../assets/images/kerala/munnar.jpg";
import wayanad from "../../assets/images/kerala/Wayanad.jpg";
import kovalam from "../../assets/images/kerala/kovalam.jpg";

import ooty from "../../assets/images/tamilnadu/ooty.jpg";
import kodaikanal from "../../assets/images/tamilnadu/kodaikanal.jpg";
import mahabalipuram from "../../assets/images/tamilnadu/mahabalipuram.jpg";

export default function InteractiveMap() {

  const places = [

    {
      name: "Wayanad",
      image: wayanad,
      state: "Kerala",
      top: "38%",
      left: "33%",
      desc:
        "Luxury forest retreats, waterfalls and cinematic mountain escapes.",
    },

    {
      name: "Munnar",
      image: munnar,
      state: "Kerala",
      top: "60%",
      left: "41%",
      desc:
        "Tea estates, misty mountains and premium luxury resorts.",
    },

    {
      name: "Kovalam",
      image: kovalam,
      state: "Kerala",
      top: "84%",
      left: "45%",
      desc:
        "Private beaches, sunset resorts and unforgettable coastal journeys.",
    },

    {
      name: "Ooty",
      image: ooty,
      state: "Tamil Nadu",
      top: "50%",
      left: "46%",
      desc:
        "Colonial hill station with luxury mountain experiences.",
    },

    {
      name: "Kodaikanal",
      image: kodaikanal,
      state: "Tamil Nadu",
      top: "67%",
      left: "50%",
      desc:
        "Romantic lake escapes and cinematic luxury stays.",
    },

    {
      name: "Mahabalipuram",
      image: mahabalipuram,
      state: "Tamil Nadu",
      top: "56%",
      left: "71%",
      desc:
        "Ancient heritage temples with premium beachside experiences.",
    },

  ];

  const [selected, setSelected] = useState(places[0]);

  return (

    <section className="relative py-32 bg-[#02111b] overflow-hidden">

      {/* BACKGROUND GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_45%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">

          <p
            className="
              uppercase
              tracking-[8px]
              text-[#d4af37]
              text-sm
              mb-5
            "
          >
            Luxury Travel Map
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-serif
              text-white
            "
          >
            Discover South India
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* MAP SIDE */}
          <div className="relative flex items-center justify-center">

            {/* GOLD GLOW */}
            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                bg-[#d4af37]/10
                blur-[120px]
                rounded-full
              "
            ></div>

            {/* MAP IMAGE */}
            <img
              src={mapImage}
              alt="South India Map"
              className="
                relative
                z-10
                w-full
                max-w-[560px]
                drop-shadow-[0_0_70px_rgba(212,175,55,0.18)]
              "
            />

            {/* MAP POINTS */}
            {places.map((place, index) => (

              <button
                key={index}
                onClick={() => setSelected(place)}
                style={{
                  top: place.top,
                  left: place.left,
                }}
                className="
                  absolute
                  z-20
                  -translate-x-1/2
                  -translate-y-1/2
                  group
                "
              >

                {/* PULSE */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#d4af37]/30
                    animate-ping
                  "
                ></div>

                {/* POINT */}
                <div
                  className="
                    relative
                    w-10
                    h-10
                    rounded-full
                    bg-[#d4af37]
                    flex
                    items-center
                    justify-center
                    text-black
                    shadow-[0_0_25px_rgba(212,175,55,0.8)]
                    hover:scale-125
                    transition-all
                    duration-300
                  "
                >
                  <FaLocationDot size={16} />
                </div>

                {/* TOOLTIP */}
                <div
                  className="
                    absolute
                    top-[-50px]
                    left-1/2
                    -translate-x-1/2
                    bg-black/90
                    border
                    border-[#d4af37]/20
                    px-4
                    py-2
                    rounded-full
                    text-white
                    text-xs
                    whitespace-nowrap
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                >
                  {place.name}
                </div>

              </button>

            ))}

          </div>

          {/* RIGHT SIDE CARD */}
          <div
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[40px]
              overflow-hidden
              shadow-[0_0_60px_rgba(0,0,0,0.4)]
            "
          >

            {/* IMAGE */}
            <div className="h-[420px] overflow-hidden">

              <img
                src={selected.image}
                alt={selected.name}
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition-all
                  duration-700
                "
              />

            </div>

            {/* CONTENT */}
            <div className="p-10">

              <p
                className="
                  uppercase
                  tracking-[6px]
                  text-[#d4af37]
                  text-xs
                  mb-4
                "
              >
                {selected.state}
              </p>

              <h3
                className="
                  text-5xl
                  font-serif
                  text-white
                  mb-6
                "
              >
                {selected.name}
              </h3>

              <p
                className="
                  text-white/70
                  leading-8
                  text-lg
                "
              >
                {selected.desc}
              </p>

              <button
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  bg-[#d4af37]
                  hover:bg-[#f0c94d]
                  text-black
                  px-8
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

        </div>

      </div>

    </section>
  );
}