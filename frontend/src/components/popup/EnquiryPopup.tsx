import { useEffect, useState } from "react";

import {
  FaXmark,
  FaWhatsapp,
} from "react-icons/fa6";

export default function EnquiryPopup() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  if (!open) return null;

  return (

    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-md
        px-4
      "
    >

      {/* POPUP */}
      <div
        className="
          relative
          w-full
          max-w-5xl
          rounded-[40px]
          overflow-hidden
          border
          border-white/10
          bg-[#07141f]
          shadow-[0_0_80px_rgba(0,0,0,0.7)]
          grid
          md:grid-cols-2
        "
      >

        {/* LEFT IMAGE */}
        <div
          className="
            relative
            hidden
            md:block
          "
        >

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/45
            "
          />

          <div
            className="
              absolute
              bottom-0
              p-10
              z-10
            "
          >

            <p
              className="
                uppercase
                tracking-[6px]
                text-[#d4af37]
                text-xs
                mb-4
              "
            >
              Valarco Luxury Journeys
            </p>

            <h2
              className="
                text-5xl
                font-serif
                leading-none
                mb-5
              "
            >
              Start Your
              <br />
              Luxury Escape
            </h2>

            <p
              className="
                text-white/70
                leading-8
              "
            >
              Curated cinematic experiences across Kerala and Tamil Nadu.
            </p>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div
          className="
            relative
            p-10
          "
        >

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              top-5
              right-5
              w-10
              h-10
              rounded-full
              bg-white/10
              hover:bg-[#d4af37]
              hover:text-black
              transition-all
              duration-300
              flex
              items-center
              justify-center
            "
          >
            <FaXmark />
          </button>

          <p
            className="
              uppercase
              tracking-[6px]
              text-[#d4af37]
              text-xs
              mb-4
            "
          >
            Enquiry Form
          </p>

          <h2
            className="
              text-4xl
              font-serif
              mb-8
            "
          >
            Plan Your Journey
          </h2>

          {/* FORM */}
          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
                text-white
              "
            />

            <input
              type="text"
              placeholder="WhatsApp Number"
              className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
                text-white
              "
            />

            <select
              className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
                text-white
              "
            >

              <option>Choose Destination</option>
              <option>Munnar</option>
              <option>Wayanad</option>
              <option>Ooty</option>
              <option>Kodaikanal</option>
              <option>Kovalam</option>

            </select>

            <input
              type="date"
              className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
                text-white
              "
            />

            <textarea
              rows={4}
              placeholder="Tell us about your dream journey..."
              className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
                text-white
                resize-none
              "
            />

            {/* BUTTONS */}
            <div className="flex gap-4 pt-3">

              <button
                className="
                  flex-1
                  bg-[#d4af37]
                  hover:bg-[#f0c94d]
                  text-black
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Send Enquiry
              </button>

              <button
                className="
                  w-16
                  rounded-full
                  bg-green-500
                  flex
                  items-center
                  justify-center
                  text-white
                  text-xl
                "
              >
                <FaWhatsapp />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}