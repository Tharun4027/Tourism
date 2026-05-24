import { Link } from "react-router-dom";

import tamilnadu from "../../assets/images/tamilnadu/tamilnadu.jpg";
import ooty from "../../assets/images/tamilnadu/ooty.jpg";
import kodaikanal from "../../assets/images/tamilnadu/kodaikanal.jpg";
import madurai from "../../assets/images/tamilnadu/madurai.jpg";
import mahabalipuram from "../../assets/images/tamilnadu/mahabalipuram.jpg";
import yercaud from "../../assets/images/tamilnadu/yercaud.jpg";
import dhanushkodi from "../../assets/images/tamilnadu/dhanushkodi.jpg";

export default function TamilNaduSection() {
  const places = [
    {
      title: "Ooty Hills",
      image: ooty,
      path: "/ooty",
      description:
        "Tea estates, cool weather and scenic mountain luxury retreats.",
    },
    {
      title: "Kodaikanal",
      image: kodaikanal,
      path: "/kodaikanal",
      description:
        "Lake views, pine forests and peaceful luxury hill escapes.",
    },
    {
      title: "Madurai",
      image: madurai,
      path: "/madurai",
      description:
        "Ancient temples, heritage culture and premium experiences.",
    },
    {
      title: "Mahabalipuram",
      image: mahabalipuram,
      path: "/mahabalipuram",
      description:
        "Historic shore temples, carvings and beachside stays.",
    },
    {
      title: "Yercaud",
      image: yercaud,
      path: "/yercaud",
      description:
        "Coffee estates, waterfalls and misty hill station beauty.",
    },
    {
      title: "Dhanushkodi",
      image: dhanushkodi,
      path: "/dhanushkodi",
      description:
        "Ocean roads, hidden beaches and cinematic island vibes.",
    },
  ];

  return (
    <section className="bg-[#031522] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#d4af37] uppercase tracking-[6px] mb-4">
            Tamil Nadu Experiences
          </p>

          <h2 className="text-5xl md:text-6xl font-serif mb-6">
            Explore Tamil Nadu
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            Discover temples, mountains, beaches and premium luxury
            travel experiences across Tamil Nadu.
          </p>
        </div>

        {/* Hero Banner */}
        <div
          className="relative h-[500px] rounded-[40px] overflow-hidden mb-20 bg-cover bg-center"
          style={{
            backgroundImage: `url(${tamilnadu})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div>
              <p className="uppercase tracking-[6px] text-[#d4af37] mb-6">
                Luxury Tamil Nadu
              </p>

              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                Timeless Beauty <br /> Of Tamil Nadu
              </h1>

              <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-8">
                Luxury hill stations, heritage temples, coastal beauty
                and unforgettable cinematic travel experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((place, index) => (
            <Link key={index} to={place.path}>
              <div className="group relative h-[520px] rounded-[35px] overflow-hidden cursor-pointer">

                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 p-8 z-10">
                  <p className="uppercase tracking-[5px] text-[#d4af37] text-sm mb-3">
                    Tamil Nadu
                  </p>

                  <h3 className="text-4xl font-serif mb-4">
                    {place.title}
                  </h3>

                  <p className="text-gray-200 leading-8">
                    {place.description}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}