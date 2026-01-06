import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-green-800 overflow-hidden">
      {/* Rice Stalk Graphic - Top Left */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-30">
        <Image
          src="/Hero/dhaner-shis-logo.png"
          alt="Rice Stalk"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="relative z-20 space-y-4 md:space-y-6">
            {/* "ভোট দিন" Text */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-outline-yellow">
                ভোট দিন
              </h1>
            </div>

            {/* Candidate Info Box */}
            <div className="bg-green-900 rounded-lg px-3 py-2 md:px-4 md:py-3 inline-block">
              <p className="text-white text-xs sm:text-sm md:text-base">
              বগুড়া- ২ আসন | জাতীয় সংসদ সদস্য (প্রার্থী)
              </p>
            </div>

            {/* Candidate Name */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            মীর শাহে আলম
            </h2>

            {/* Slogan */}
            <p className="text-yellow-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              মানুষের ভোট, মানুষের অধিকার এবং একটি নিরাপদ ভবিষ্যতের প্রত্যয়ে
            </p>

            {/* Party Mission Statement */}
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)-এর আদর্শে বিশ্বাসী হয়ে গণতন্ত্র, ন্যায়বিচার ও মানবিক মূল্যবোধ প্রতিষ্ঠার লক্ষ্যে এই ক্যাম্পেইনের পথচলা।
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Link
                href="/join"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors text-center"
              >
                আমাদের সঙ্গে থাকুন
              </Link>
              <Link
                href="/donate"
                className="border-2 border-green-300 hover:border-green-200 text-green-300 hover:text-green-200 bg-transparent px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors text-center"
              >
                অনুদান করুন
              </Link>
            </div>
          </div>

          {/* Right Section - Candidate Image */}
          <div className="relative lg:min-h-[600px] mt-8 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-tl-2xl rounded-br-2xl md:rounded-tl-3xl md:rounded-br-3xl overflow-hidden border-2 md:border-4 border-yellow-400/50 border-r-0 border-b-0">
              <Image
                src="/Hero/alam-hero.jpg"
                alt="Salahuddin Ahmed"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Electoral Symbol Button - Bottom Right */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8">
              <Link
                href="/vote"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-3 py-2 md:px-6 md:py-4 rounded-lg font-bold text-xs sm:text-sm md:text-base lg:text-lg transition-colors flex items-center gap-2 md:gap-3 shadow-lg"
              >
                <Image
                  src="/Hero/dhaner-shis-logo.png"
                  alt="Rice Stalk"
                  width={20}
                  height={20}
                  className="w-4 h-4 md:w-6 md:h-6"
                />
                <span className="hidden sm:inline">ধানের শীষে ভোট দিন</span>
                <span className="sm:hidden">ভোট দিন</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

