import Navbar from "../components/Navbar/Navbar";
import Footer from "../layouts/Footer";
import madurai from "../assets/images/tamilnadu/madurai.jpg";

export default function MaduraiPage() {
  return (
    <main className="bg-[#031522] min-h-screen text-white">

      <Navbar />

      <section className="relative h-screen overflow-hidden">

        <img
          src={madurai}
          alt="Madurai"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

          <div>

            <p className="uppercase tracking-[10px] text-[#d4af37] mb-6">
              Temple Heritage
            </p>

            <h1 className="text-6xl md:text-8xl font-serif mb-8">
              Madurai
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-white/70 leading-9">
              Discover historic temples, cultural heritage and luxury Tamil experiences.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}