import Image from "next/image";
import Link from "next/link";

export default function LeaderProfile() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section - Party Mission with Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          {/* Left Section - Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-400 flex flex-col items-center justify-center shadow-lg">
                <div className="mb-4">
                  <Image
                    src="/Hero/dhaner-shis-logo.png"
                    alt="Rice Stalk"
                    width={120}
                    height={120}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
                <p className="text-green-800 font-bold text-xl md:text-2xl">
                  ধানের শীষ
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Mission Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              সবার আগে বাংলাদেশ
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              ধানের শীষ বাংলার কৃষক, শ্রমজীবী মানুষ ও সাধারণ জনগণের আশা ও সমৃদ্ধির প্রতীক। এই প্রতীক আত্মনির্ভরতা, ঐক্য ও একটি শক্তিশালী বাংলাদেশের প্রতিচ্ছবি।
            </p>
            
            {/* Principles Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-green-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  সমৃদ্ধি
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-green-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  আত্মনির্ভরতা
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-green-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  ঐক্য
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-green-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  মানবিকতা
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Candidate Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-12">
          {/* Left Section - Text Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            {/* Top Label */}
            <p className="text-gray-500 text-xs sm:text-sm font-medium">
              ভোট দিন
            </p>
            
            {/* Candidate Name */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              মীর শাহে আলম
            </h2>
            
            {/* Candidate Title */}
            <p className="text-yellow-600 text-base sm:text-lg md:text-xl font-semibold">
              বগুড়া- ২ আসন | জাতীয় সংসদ সদস্য (প্রার্থী)
            </p>
            
            {/* Introductory Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              ঢাকা-৪ আসনের একজন সচেতন নাগরিক হিসেবে সালাহউদ্দিন আহমেদ দীর্ঘদিন ধরে জনসেবায় নিবেদিত। তিনি এই এলাকার মানুষের আনন্দ, দুঃখ, সমস্যা ও সম্ভাবনা গভীরভাবে পর্যবেক্ষণ করেছেন।
            </p>
            
            {/* Mission Statement */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold">
                আমার রাজনীতি ক্ষমতার জন্য নয়-
              </p>
              <div className="flex items-start gap-2">
                <span className="text-yellow-500 text-lg md:text-xl">✦</span>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  জনগণের অধিকার ও উন্নয়ন নিশ্চিত করার জন্য।
                </p>
              </div>
            </div>
            
            {/* Beliefs Section */}
            <div className="space-y-2 md:space-y-3 pt-2">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                আমি বিশ্বাস করি-
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700">
                    কথা নয়, কাজই হবে পরিচয়
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700">
                    উন্নয়ন হবে স্বচ্ছ ও দুর্নীতিমুক্ত
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700">
                    জনগণই হবে সব সিদ্ধান্তের মূল কেন্দ্র
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Call to Action Button */}
            <div className="pt-2 md:pt-4">
              <Link
                href="/"
                className="inline-block bg-green-800 hover:bg-green-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg transition-colors"
              >
                অনুদান করুন
              </Link>
            </div>
          </div>

          {/* Right Section - Candidate Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/Hero/alam-hero.jpg"
              alt="Salahuddin Ahmed"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

