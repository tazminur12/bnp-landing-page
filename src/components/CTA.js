import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  const stats = [
    { number: "50,000+", label: "সক্রিয় সমর্থক" },
    { number: "16", label: "ইউনিয়ন" },
    { number: "100%", label: "স্বচ্ছ হিসাব" },
  ];

  return (
    <section className="relative w-full bg-green-800 py-16 md:py-20 overflow-hidden">
      {/* Rice Stalk Background Decorations */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 opacity-20 pointer-events-none">
        <Image
          src="/Hero/dhaner-shis-logo.png"
          alt="Rice Stalk"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 opacity-20 pointer-events-none">
        <Image
          src="/Hero/dhaner-shis-logo.png"
          alt="Rice Stalk"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Heading and Tagline */}
        <div className="text-center mb-10 md:mb-12">
          {/* Heart Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-400 flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            একসাথে গড়ি নতুন বাংলাদেশ
          </h2>

          {/* Tagline */}
          <div className="space-y-2 text-white text-lg md:text-xl">
            <p>আপনার একটি পদক্ষেপ পারে লক্ষ মানুষের জীবন বদলে দিতে।</p>
            <p>আজই আমাদের সাথে যোগ দিন।</p>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
          {/* Volunteer Button */}
          <Link
            href="/"
            className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
            <span>স্বেচ্ছাসেবক হোন</span>
          </Link>

          {/* Donate Button */}
          <Link
            href="/"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>ডোনেট করুন</span>
          </Link>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-3">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl font-semibold text-gray-900">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-white">
          {/* Phone 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-base md:text-lg">0123456789</span>
          </div>

          {/* Phone 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-base md:text-lg">0123456789</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-base md:text-lg">yourmail@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

