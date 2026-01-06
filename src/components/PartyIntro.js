import Image from "next/image";

export default function PartyIntro() {
  return (
    <section className="w-full bg-amber-50 py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-8 md:mb-12">
          {/* Label Box */}
          <div className="inline-block bg-gray-200 rounded-lg px-4 py-2 mb-4">
            <p className="text-gray-700 text-sm font-medium">
              দল সম্পর্কে
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
            বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) একটি গণতান্ত্রিক, জাতীয়তাবাদী ও জনগণকেন্দ্রিক রাজনৈতিক দল।
          </p>
        </div>

        {/* Middle Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-[200px] md:h-[250px] rounded-2xl overflow-hidden bg-cyan-100">
            <Image
              src="/BNP/BNP3.png"
              alt="BNP Leaders"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-4">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              বিএনপি বিশ্বাস কর, রাষ্ট্র পরিচালনার একমাত্র বৈধ শক্তি জনগণ। ভোটাধিকার, আইনের শাসন ও মানবিক মর্যাদা এই দলের রাজনীতির মূল ভিত্তি।
            </p>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              বহুদলীয় গণতন্ত্র, সংবাদপত্রের স্বাধীনতা ও জাতীয় সার্বভৌমত্ব রক্ষায় বিএনপি শুরু থেকেই আপসহীন ভূমিকা পালন করে আসছে।
            </p>
          </div>
        </div>

        {/* Bottom Section - Four Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 - ভোটাধিকার */}
          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-yellow-100 hover:bg-green-200 flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-7 h-7 text-yellow-600 hover:text-green-700 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              ভোটাধিকার
            </h3>
          </div>

          {/* Card 2 - আইনের শাসন */}
          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-yellow-50 transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-7 h-7 text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              আইনের শাসন
            </h3>
          </div>

          {/* Card 3 - জনগণের ক্ষমতা */}
          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-yellow-50 transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-7 h-7 text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              জনগণের ক্ষমতা
            </h3>
          </div>

          {/* Card 4 - গণতন্ত্র */}
          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-yellow-50 transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-7 h-7 text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              গণতন্ত্র
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

