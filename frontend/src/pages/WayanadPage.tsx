import Navbar from "../components/Navbar/Navbar";

import Footer from "../layouts/Footer";

import wayanad from "../assets/images/kerala/Wayanad.jpg";

export default function WayanadPage() {
  return (
    <main className="bg-[#031522] min-h-screen text-white">

      <Navbar />

      <section className="relative h-screen overflow-hidden">

        <img
          src={wayanad}
          alt="Wayanad"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <p className="uppercase tracking-[10px] text-[#d4af37] mb-6">
            Kerala Luxury Destination
          </p>

          <h1 className="text-6xl md:text-8xl font-serif mb-8">
            Wayanad
          </h1>

          <p className="max-w-3xl text-xl text-white/70 leading-9">
            Discover waterfalls, forests, wildlife and cinematic luxury escapes in Wayanad.
          </p>

        </div>

      </section>

      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <img
              src={wayanad}
              alt="Wayanad"
              className="rounded-[35px] w-full h-[700px] object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[8px] text-[#d4af37] mb-6">
              Explore Wayanad
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-10">
              Forests & Waterfall Escapes
            </h1>

            <p className="text-white/70 text-lg leading-9 mb-8">
              Wayanad offers lush greenery, wildlife experiences and breathtaking waterfalls perfect for premium travelers.
            </p>

            <p className="text-white/70 text-lg leading-9 mb-12">
              Experience luxury resorts, trekking adventures and cinematic rainforest landscapes.
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
              Book Wayanad Journey
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}