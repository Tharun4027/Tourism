import munnar from "../../assets/images/kerala/munnar.jpg";
import wayanad from "../../assets/images/kerala/Wayanad.jpg";
import ooty from "../../assets/images/tamilnadu/ooty.jpg";
import yercaud from "../../assets/images/tamilnadu/yercaud.jpg";

export default function GallerySection() {
  const images = [munnar, wayanad, ooty, yercaud];

  return (
    <section className="bg-[#031522] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-[#d4af37] uppercase tracking-[8px] mb-4">
            Gallery
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-white">
            Cinematic Moments
          </h1>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-[30px] h-[350px]">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}