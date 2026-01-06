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
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                <path
                  d="M12 2v20c5.16-1.26 9-6.45 9-12V7l-9-5z"
                  fill="#fbbf24"
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
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-amber-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2v2H8v2H6v2H4v2H2v8h2v2h2v2h2v2h2v2h8v-2h2v-2h2v-2h2v-2h2V8h-2V6h-2V4h-2V2H10zm0 2h8v2h2v2h2v8h-2v2h-2v2H8v-2H6v-2H4V8h2V6h2V4zm2 4v2h2v2h2v2h-2v2h-2v2H8v-2H6v-2h2v-2h2V8h2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              কর্মসংস্থান ও অর্থনৈতিক উন্নয়ন
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              স্থানীয় ব্যবসা সহায়তা, উদ্যোক্তা তৈরি ও বেকারত্ব হ্রাস।
            </p>
          </div>

          {/* Card 3 - স্বাস্থ্যসেবা ও সামাজিক নিরাপত্তা */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              স্বাস্থ্যসেবা ও সামাজিক নিরাপত্তা
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              স্বল্পমূল্যে মানসম্মত চিকিৎসা, বয়স্ক ও অসহায়দের জন্য বিশেষ সেবা।
            </p>
          </div>

          {/* Card 4 - বাসস্থান ও অবকাঠামো উন্নয়ন */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-amber-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 20v-6H4v-2h6V4h2v8h8v2h-8v6h-2z" />
                <path
                  d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                  fill="#dc2626"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              বাসস্থান ও অবকাঠামো উন্নয়ন
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              নিরাপদ বাসস্থান, উন্নত রাস্তা, ড্রেনেজ ও নাগরিক সুবিধা নিশ্চিত করা।
            </p>
          </div>

          {/* Card 5 - আইন-শৃঙ্খলা ও নিরাপত্তা */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              আইন-শৃঙ্খলা ও নিরাপত্তা
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              মাদকমুক্ত সমাজ, নারী ও শিশু নিরাপত্তা এবং শক্তিশালী আইন প্রয়োগ।
            </p>
          </div>

          {/* Card 6 - স্বচ্ছ ও দায়িত্বশীল নেতৃত্ব */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2v-2h-2v-2zm-2 4h2v2h-2v-2zm0-8h2v2h-2V7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              স্বচ্ছ ও দায়িত্বশীল নেতৃত্ব
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              দুর্নীতিমুক্ত প্রশাসন ও জনগণের কাছে জবাবদিহিতা নিশ্চিত করা।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

