import Navbar from "../components/Navbar/Navbar";

import Footer from "../layouts/Footer";

import ooty from "../assets/images/tamilnadu/ooty.jpg";

export default function OotyPage() {
  return (
    <main className="bg-[#031522] min-h-screen text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <img
          src={ooty}
          alt="Ooty"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <p className="uppercase tracking-[10px] text-[#d4af37] mb-6">
            Tamil Nadu Luxury Destination
          </p>

          <h1 className="text-6xl md:text-8xl font-serif mb-8">
            Ooty
          </h1>

          <p className="max-w-3xl text-xl text-white/70 leading-9">
            Discover misty mountains, luxury resorts, pine forests and cinematic hill station experiences in Ooty.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div>

            <img
              src={ooty}
              alt="Ooty"
              className="rounded-[35px] w-full h-[700px] object-cover"
            />

          </div>

          {/* TEXT */}
          <div>

            <p className="uppercase tracking-[8px] text-[#d4af37] mb-6">
              Explore Ooty
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-10">
              Misty Hills & Luxury Escapes
            </h1>

            <p className="text-white/70 text-lg leading-9 mb-8">
              Ooty is one of South India’s most iconic hill stations surrounded by lush greenery, pine forests and breathtaking viewpoints.
            </p>

            <p className="text-white/70 text-lg leading-9 mb-12">
              Experience luxury resorts, scenic toy train rides and unforgettable cinematic landscapes crafted for premium travelers.
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
              Book Ooty Journey
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
                Toy Train Ride
              </h2>

              <p className="text-white/70 leading-8">
                Experience scenic mountain train journeys through misty hills.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

              <h2 className="text-3xl font-serif mb-6">
                Pine Forest Walks
              </h2>

              <p className="text-white/70 leading-8">
                Explore breathtaking pine forests and cinematic landscapes.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

              <h2 className="text-3xl font-serif mb-6">
                Luxury Resorts
              </h2>

              <p className="text-white/70 leading-8">
                Stay in premium luxury resorts surrounded by scenic mountains.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}