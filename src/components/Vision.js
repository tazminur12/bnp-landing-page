export default function Vision() {
  return (
    <section className="w-full bg-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Small Introductory Title */}
          <p className="text-gray-500 text-sm md:text-base mb-2">
            একটি উন্নত বাংলাদেশের জন্য
          </p>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            একটি উন্নত বাংলাদেশের জন্য
          </h2>
          
          {/* Descriptive Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            আমি এমন একটি বাংলাদেশ গড়তে চাই যেখানে সবাই সমান সুযোগ পাবে।
          </p>
        </div>

        {/* Feature Cards Grid - 2x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 - শিক্ষা ও যুব উন্নয়ন */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              শিক্ষা ও যুব উন্নয়ন
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              গুণগত শিক্ষা, কারিগরি প্রশিক্ষণ এবং যুবকদের কর্মসংস্থানের সুযোগ নিশ্চিত করা।
            </p>
          </div>

          {/* Card 2 - কর্মসংস্থান ও অর্থনৈতিক উন্নয়ন */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center bg-green-100 rounded-lg">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              কর্মসংস্থান ও অর্থনৈতিক উন্নয়ন
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              স্থানীয় ব্যবসা সহায়তা, উদ্যোক্তা তৈরি ও বেকারত্ব হ্রাস।
            </p>
          </div>

          {/* Card 3 - স্বাস্থ্যসেবা ও সামাজিক নিরাপত্তা */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center bg-red-100 rounded-lg">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              স্বাস্থ্যসেবা ও সামাজিক নিরাপত্তা
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              স্বল্পমূল্যে মানসম্মত চিকিৎসা, বয়স্ক ও অসহায়দের জন্য বিশেষ সেবা।
            </p>
          </div>

          {/* Card 4 - বাসস্থান ও অবকাঠামো উন্নয়ন */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center bg-amber-100 rounded-lg">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-amber-600"
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
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              বাসস্থান ও অবকাঠামো উন্নয়ন
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              নিরাপদ বাসস্থান, উন্নত রাস্তা, ড্রেনেজ ও নাগরিক সুবিধা নিশ্চিত করা।
            </p>
          </div>

          {/* Card 5 - আইন-শৃঙ্খলা ও নিরাপত্তা */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center bg-purple-100 rounded-lg">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              আইন-শৃঙ্খলা ও নিরাপত্তা
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              মাদকমুক্ত সমাজ, নারী ও শিশু নিরাপত্তা এবং শক্তিশালী আইন প্রয়োগ।
            </p>
          </div>

          {/* Card 6 - স্বচ্ছ ও দায়িত্বশীল নেতৃত্ব */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center bg-indigo-100 rounded-lg">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-indigo-600"
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
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              স্বচ্ছ ও দায়িত্বশীল নেতৃত্ব
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              দুর্নীতিমুক্ত প্রশাসন ও জনগণের কাছে জবাবদিহিতা নিশ্চিত করা।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

