import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    { src: "/people/1.jpg", alt: "Gallery Image 1" },
    { src: "/people/2.jpg", alt: "Gallery Image 2" },
    { src: "/people/3.jpg", alt: "Gallery Image 3" },
    { src: "/people/4.jpg", alt: "Gallery Image 4" },
    { src: "/people/5.jpg", alt: "Gallery Image 5" },
    { src: "/people/6.jpg", alt: "Gallery Image 6" },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-10 md:mb-12">
          {/* Gallery Title */}
          <p className="text-gray-500 text-sm md:text-base mb-4 font-medium">
            গ্যালারি
          </p>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            জনগণের পাশে, জনগণের সঙ্গে
          </h2>
          
          {/* Descriptive Subtitle */}
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            জনসভা, মতবিনিময় সভা, তরুণদের সাথে আলোচনা ও মাঠপর্যায়ের কার্যক্রমের কিছু স্মরণীয় মুহূর্ত।
          </p>
        </div>

        {/* Gallery Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

