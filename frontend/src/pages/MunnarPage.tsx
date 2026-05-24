import Navbar from "../components/Navbar/Navbar";

import Footer from "../layouts/Footer";

import munnar from "../assets/images/kerala/munnar.jpg";

export default function MunnarPage() {
  return (
    <main className="bg-[#031522] min-h-screen text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <img
          src={munnar}
          alt="Munnar"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <p className="uppercase tracking-[10px] text-[#d4af37] mb-6">
            Kerala Luxury Destination
          </p>

          <h1 className="text-6xl md:text-8xl font-serif mb-8">
            Munnar
          </h1>

          <p className="max-w-3xl text-xl text-white/70 leading-9">
            Discover misty tea plantations, luxury resorts, waterfalls and cinematic mountain landscapes in the heart of Kerala.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div>

            <img
              src={munnar}
              alt="Munnar"
              className="rounded-[35px] w-full h-[700px] object-cover"
            />

          </div>

          {/* TEXT */}
          <div>

            <p className="uppercase tracking-[8px] text-[#d4af37] mb-6">
              Explore Munnar
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-10">
              Tea Estates & Luxury Escapes
            </h1>

            <p className="text-white/70 text-lg leading-9 mb-8">
              Munnar is one of South India’s most breathtaking luxury hill destinations surrounded by rolling tea plantations, waterfalls and mist-covered mountains.
            </p>

            <p className="text-white/70 text-lg leading-9 mb-12">
              Experience private resorts, tea factory visits, jeep adventures and cinematic viewpoints crafted for unforgettable journeys.
            </p>

            <button
              className="
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
              Book Munnar Journey
            </button>

          </div>

        </div>

      </section>

      {/* EXPERIENCE GRID */}
      <section className="bg-[#071c2b] py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[8px] text-[#d4af37] mb-6">
              Experiences
            </p>

            <h1 className="text-5xl md:text-7xl font-serif">
              Things To Experience
            </h1>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

              <h2 className="text-3xl font-serif mb-6">
                Tea Estate Tours
              </h2>

              <p className="text-white/70 leading-8">
                Walk through breathtaking tea plantations with cinematic mountain views.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

              <h2 className="text-3xl font-serif mb-6">
                Luxury Resorts
              </h2>

              <p className="text-white/70 leading-8">
                Stay in premium luxury resorts surrounded by misty mountains.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

              <h2 className="text-3xl font-serif mb-6">
                Waterfall Adventures
              </h2>

              <p className="text-white/70 leading-8">
                Explore hidden waterfalls and scenic cinematic viewpoints.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}