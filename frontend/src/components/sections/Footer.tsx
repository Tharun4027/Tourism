import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function FooterSection() {

  return (

    <section
      className="
        relative
        bg-[#020b12]
        overflow-hidden
        pt-14
        pb-6
        px-6
      "
    >

      {/* GOLD LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_40%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div
          className="
            grid
            md:grid-cols-4
            gap-6
            border-b
            border-white/10
            pb-8
          "
        >

          {/* LOGO */}
          <div>

            <div className="flex items-center gap-4 mb-6">

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#d4af37]
                  flex
                  items-center
                  justify-center
                  text-black
                  text-2xl
                  font-bold
                  shadow-[0_0_25px_rgba(212,175,55,0.30)]
                "
              >
                V
              </div>

              <div>

                <h1
                  className="
                    text-[#d4af37]
                    text-3xl
                    font-serif
                    leading-none
                  "
                >
                  Valarco
                </h1>

                <p
                  className="
                    uppercase
                    tracking-[5px]
                    text-white/40
                    text-[9px]
                    mt-1
                  "
                >
                  Luxury South India
                </p>

              </div>

            </div>

            <p
              className="
                text-white/55
                leading-7
                text-sm
                max-w-[280px]
              "
            >
              Premium cinematic travel experiences across Kerala and Tamil Nadu with handcrafted unforgettable luxury journeys.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2
              className="
                text-white
                text-2xl
                font-serif
                mb-5
              "
            >
              Quick Links
            </h2>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-white/55 hover:text-[#d4af37] transition-all duration-300 text-sm"
              >
                Home
              </Link>

              <Link
                to="/destinations"
                className="text-white/55 hover:text-[#d4af37] transition-all duration-300 text-sm"
              >
                Destinations
              </Link>

              <Link
                to="/experiences"
                className="text-white/55 hover:text-[#d4af37] transition-all duration-300 text-sm"
              >
                Experiences
              </Link>

              <Link
                to="/packages"
                className="text-white/55 hover:text-[#d4af37] transition-all duration-300 text-sm"
              >
                Packages
              </Link>

              <Link
                to="/about"
                className="text-white/55 hover:text-[#d4af37] transition-all duration-300 text-sm"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-white/55 hover:text-[#d4af37] transition-all duration-300 text-sm"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* DESTINATIONS */}
          <div>

            <h2
              className="
                text-white
                text-2xl
                font-serif
                mb-5
              "
            >
              Destinations
            </h2>

            <div className="flex flex-col gap-3">

              <p className="text-white/55 text-sm">Munnar</p>
              <p className="text-white/55 text-sm">Wayanad</p>
              <p className="text-white/55 text-sm">Ooty</p>
              <p className="text-white/55 text-sm">Kodaikanal</p>
              <p className="text-white/55 text-sm">Kovalam</p>
              <p className="text-white/55 text-sm">Mahabalipuram</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h2
              className="
                text-white
                text-2xl
                font-serif
                mb-5
              "
            >
              Contact
            </h2>

            <div className="flex flex-col gap-3">

              <p className="text-white/55 text-sm">
                Chennai, Tamil Nadu
              </p>

              <p className="text-white/55 text-sm">
                +91 9876543210
              </p>

              <p className="text-white/55 text-sm">
                valarcotravels@gmail.com
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            pt-6
          "
        >

          {/* COPYRIGHT */}
          <p className="text-white/35 text-xs">
            © 2026 Valarco Travels. All Rights Reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">

            <a
              href="#"
              className="
                w-9
                h-9
                rounded-full
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-white
                hover:bg-[#d4af37]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaInstagram size={15} />
            </a>

            <a
              href="#"
              className="
                w-9
                h-9
                rounded-full
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-white
                hover:bg-[#d4af37]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaWhatsapp size={15} />
            </a>

            <a
              href="#"
              className="
                w-9
                h-9
                rounded-full
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-white
                hover:bg-[#d4af37]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="
                w-9
                h-9
                rounded-full
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-white
                hover:bg-[#d4af37]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaYoutube size={15} />
            </a>

            <a
              href="#"
              className="
                w-9
                h-9
                rounded-full
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-white
                hover:bg-[#d4af37]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaXTwitter size={14} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}