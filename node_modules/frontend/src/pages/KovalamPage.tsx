import Navbar from "../components/Navbar/Navbar";
import Footer from "../layouts/Footer";
import kovalam from "../assets/images/kerala/kovalam.jpg";

export default function KovalamPage() {
  return (
    <main className="bg-[#031522] min-h-screen text-white">

      <Navbar />

      <section className="relative h-screen overflow-hidden">

        <img
          src={kovalam}
          alt="Kovalam"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

          <div>

            <p className="uppercase tracking-[10px] text-[#d4af37] mb-6">
              Kerala Beach Escape
            </p>

            <h1 className="text-6xl md:text-8xl font-serif mb-8">
              Kovalam
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-white/70 leading-9">
              Relax in luxury beach resorts and experience breathtaking sunsets.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}