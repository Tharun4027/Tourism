export default function PackagesSection() {
  const packages = [
    {
      title: "Honeymoon Escape",
      desc: "Romantic luxury experiences across Kerala and Tamil Nadu.",
    },
    {
      title: "Family Adventure",
      desc: "Premium family tours with unforgettable cinematic destinations.",
    },
    {
      title: "Luxury Retreat",
      desc: "Private resorts, wellness retreats and cinematic journeys.",
    },
  ];

  return (
    <section className="bg-[#031522] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-[#d4af37] uppercase tracking-[8px] mb-4">
            Luxury Packages
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-white">
            Signature Journeys
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-3xl font-serif text-white mb-6">
                {item.title}
              </h2>

              <p className="text-gray-300 leading-8 mb-8">
                {item.desc}
              </p>

              <button className="bg-[#d4af37] text-black px-6 py-3 rounded-full font-semibold">
                View Package
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}