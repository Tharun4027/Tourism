import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Experiences", path: "/experiences" },
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (

    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-6
        pt-6
      "
    >

      <nav
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-8
          py-5
          rounded-full
          border
          border-white/10
          bg-black/40
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(0,0,0,0.45)]
        "
      >

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-4"
        >

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
              font-bold
              text-2xl
              shadow-[0_0_25px_rgba(212,175,55,0.45)]
            "
          >
            V
          </div>

          <div>

            <h1
              className="
                text-[#d4af37]
                text-4xl
                font-serif
                leading-none
              "
            >
              Valarco
            </h1>

            <p
              className="
                text-white/60
                uppercase
                tracking-[6px]
                text-[10px]
                mt-1
              "
            >
              Luxury South India
            </p>

          </div>

        </Link>

        {/* MENU */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-10
          "
        >

          {navItems.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              className="
                relative
                text-white/85
                text-[15px]
                font-medium
                hover:text-[#d4af37]
                transition-all
                duration-300
              "
            >

              {item.name}

              {location.pathname === item.path && (

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-[2px]
                    bg-[#d4af37]
                    rounded-full
                  "
                ></span>

              )}

            </Link>

          ))}

        </div>

        {/* BUTTON */}
        <Link to="/contact">

          <button
            className="
              bg-[#d4af37]
              text-black
              px-7
              py-3
              rounded-full
              text-[15px]
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_25px_rgba(212,175,55,0.35)]
            "
          >
            Book Journey
          </button>

        </Link>

      </nav>

    </header>

  );
}