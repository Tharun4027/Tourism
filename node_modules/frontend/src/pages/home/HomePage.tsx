import Navbar from "../../components/Navbar/Navbar";
import FooterSection from "../../components/sections/Footer";
import EnquiryPopup from "../../components/popup/EnquiryPopup";
import TestimonialsSection from "../../components/sections/TestimonialsSection";

import heroVideo from "../../assets/videos/hero-video.mp4";

import munnar from "../../assets/images/kerala/munnar.jpg";
import wayanad from "../../assets/images/kerala/Wayanad.jpg";
import kovalam from "../../assets/images/kerala/kovalam.jpg";

import ooty from "../../assets/images/tamilnadu/ooty.jpg";
import kodaikanal from "../../assets/images/tamilnadu/kodaikanal.jpg";
import mahabalipuram from "../../assets/images/tamilnadu/mahabalipuram.jpg";

import honeymoon from "../../assets/images/packages/honeymoon.jpg";

import {
  FaArrowRight,
  FaStar,
  FaWhatsapp,
  FaPlay,
} from "react-icons/fa6";

export default function HomePage() {

  const destinations = [

    {
      title: "Munnar",
      image: munnar,
      desc: "Luxury tea estate experiences & cinematic mountain stays.",
    },

    {
      title: "Wayanad",
      image: wayanad,
      desc: "Waterfalls, forests and hidden premium escapes.",
    },

    {
      title: "Kovalam",
      image: kovalam,
      desc: "Golden beach sunsets and private resort experiences.",
    },

    {
      title: "Ooty",
      image: ooty,
      desc: "Misty colonial hills and luxury mountain retreats.",
    },

    {
      title: "Kodaikanal",
      image: kodaikanal,
      desc: "Romantic lake escapes with premium hillside views.",
    },

    {
      title: "Mahabalipuram",
      image: mahabalipuram,
      desc: "Ancient heritage temples with coastal luxury stays.",
    },

  ];

  return (

    <div className="bg-[#02111b] overflow-hidden text-white">

      <Navbar />

      <EnquiryPopup />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* GOLD LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_40%)]"></div>

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
            Luxury South India Experiences
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
            Cinematic Journeys
            <br />
            Across South India
          </h1>

          <p
            className="
              mt-8
              text-white/75
              max-w-3xl
              text-lg
              leading-9
            "
          >
            Discover misty mountains, tea plantations, luxury resorts,
            beaches, temples and handcrafted unforgettable travel experiences.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-5
              mt-10
            "
          >

            <button
              className="
                bg-[#d4af37]
                hover:bg-[#f0c94d]
                text-black
                px-10
                py-5
                rounded-full
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Explore Destinations
            </button>

            <button
              className="
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                hover:bg-white/20
                px-10
                py-5
                rounded-full
                text-lg
                flex
                items-center
                gap-3
                transition-all
                duration-300
              "
            >
              <FaPlay />
              Watch Journey
            </button>

          </div>

        </div>

      </section>

      {/* DESTINATIONS */}
      <section className="relative py-32 px-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_40%)]"></div>

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
              Explore South India
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {destinations.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  h-[500px]
                  cursor-pointer
                  hover:-translate-y-3
                  transition-all
                  duration-700
                "
              >

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

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-10 z-10">

                  <p
                    className="
                      uppercase
                      tracking-[6px]
                      text-[#d4af37]
                      text-xs
                      mb-3
                    "
                  >
                    Luxury Experience
                  </p>

                  <h2
                    className="
                      text-5xl
                      font-serif
                      mb-4
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      text-white/70
                      leading-8
                      mb-6
                    "
                  >
                    {item.desc}
                  </p>

                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      bg-[#d4af37]
                      text-black
                      px-7
                      py-4
                      rounded-full
                      font-semibold
                      hover:scale-105
                      transition-all
                    "
                  >
                    Explore
                    <FaArrowRight />
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <img
              src={honeymoon}
              alt=""
              className="
                rounded-[40px]
                h-[650px]
                w-full
                object-cover
              "
            />

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black via-transparent to-transparent"></div>

          </div>

          {/* CONTENT */}
          <div>

            <p
              className="
                uppercase
                tracking-[8px]
                text-[#d4af37]
                text-sm
                mb-6
              "
            >
              Signature Experiences
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-serif
                leading-none
                mb-8
              "
            >
              Curated Luxury
              <br />
              Travel Experiences
            </h2>

            <p
              className="
                text-white/70
                text-lg
                leading-9
                mb-10
              "
            >
              From private tea estate stays and Ayurvedic wellness retreats
              to cinematic beach escapes and luxury houseboats — every
              journey is handcrafted for unforgettable moments.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">

              {[
                "Luxury Resorts & Villas",
                "Private Houseboat Experiences",
                "Tea Estate Retreats",
                "Ayurveda & Wellness Escapes",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-[#d4af37]
                      flex
                      items-center
                      justify-center
                      text-black
                    "
                  >
                    <FaStar />
                  </div>

                  <p className="text-xl text-white/90">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <button
              className="
                mt-12
                bg-[#d4af37]
                text-black
                px-10
                py-5
                rounded-full
                font-semibold
                text-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Explore Experiences
            </button>

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}
      <TestimonialsSection />

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

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_50%)]"></div>

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
              Start Your Journey
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-serif
                mb-8
              "
            >
              Let’s Plan Your
              <br />
              Luxury Escape
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
              Connect with Valarco Travels and create unforgettable cinematic
              experiences across Kerala and Tamil Nadu.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-5
                mt-10
              "
            >

              <button
                className="
                  bg-[#d4af37]
                  text-black
                  px-10
                  py-5
                  rounded-full
                  text-lg
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                Book Luxury Journey
              </button>

              <button
                className="
                  border
                  border-white/10
                  bg-white/5
                  px-10
                  py-5
                  rounded-full
                  flex
                  items-center
                  gap-3
                  hover:bg-white/10
                  transition-all
                "
              >
                <FaWhatsapp />
                WhatsApp Us
              </button>

            </div>

          </div>

        </div>

      </section>

      <FooterSection />

    </div>
  );
}