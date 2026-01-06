import Image from "next/image";

export default function Events() {
  const events = [
    {
      date: "২০ জানুয়ারি ২০২৬",
      location: "ঢাকা-৪, মতিঝিল মাঠ",
      time: "বিকাল ৪:০০ টা",
    },
    {
      date: "২৫ জানুয়ারি ২০২৬",
      location: "ঢাকা-৪, গুলশান মাঠ",
      time: "সকাল ১০:০০ টা",
    },
    {
      date: "৩০ জানুয়ারি ২০২৬",
      location: "ঢাকা-৪, ধানমন্ডি মাঠ",
      time: "বিকাল ৫:০০ টা",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BNP Flag/bnp-people.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-900/90 backdrop-blur-md rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
          {/* Top Label */}
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 rounded-lg px-6 py-2 inline-flex items-center gap-2">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-white font-semibold text-sm md:text-base">
                কর্মসূচি
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            আসন্ন কর্মসূচি
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto mb-12 md:mb-16">
            আমাদের ক্যাম্পেইনের অংশ হিসেবে জনগণের সাথে সরাসরি মতবিনিময় ও সমাবেশে আপনাকে আমন্ত্রণ।
          </p>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Calendar Icon */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 space-y-2">
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                      {event.date}
                    </p>
                    <p className="text-base text-gray-700">
                      {event.location}
                    </p>
                    <p className="text-base text-gray-600">
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

