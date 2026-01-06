import Image from "next/image";

export default function Support() {
  const supportUses = [
    "ক্যাম্পেইন পোস্টার ও ব্যানার",
    "জনসংযোগ ও সভা",
    "ভোটার সচেতনতা কার্যক্রম",
    "ডিজিটাল প্রচারণা",
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-10 md:mb-12">
          {/* Yellow Button */}
          <div className="mb-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold text-base md:text-lg transition-colors">
              আমাদের সঙ্গে পরিবর্তন আনুন
            </button>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ক্যাম্পেইনকে শক্তিশালী করুন
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            আপনার সহযোগিতা আমাদের পৌঁছে দেবে আরও বেশি মানুষের কাছে।
          </p>
        </div>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Panel - How Support Will Be Used */}
          <div className="bg-green-800 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              আপনার সহায়তা ব্যবহার হবে
            </h3>

            {/* List of Uses */}
            <ul className="space-y-4 mb-8">
              {supportUses.map((use, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-base md:text-lg">{use}</span>
                </li>
              ))}
            </ul>

            {/* Payment Logos */}
            <div className="space-y-4">

              {/* Payment Logo Image */}
              <div className="flex justify-center mt-4">
                <Image
                  src="/Logo/payment-logo.png"
                  alt="Payment Methods"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Donation Details */}
          <div className="bg-green-800 rounded-2xl p-6 md:p-8 text-white">
            {/* Bank Transfer Section */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                ব্যাংকের মাধ্যমে টাকা পাঠানোর বিবরণ।
              </h3>
              <div className="space-y-3 text-sm sm:text-base md:text-lg">
                <div>
                  <span className="font-semibold">একাউন্ট নাম:</span>{" "}
                  <span>হাসনাত আব্দুল্লাহ</span>
                </div>
                <div>
                  <span className="font-semibold">একাউন্ট নম্বর:</span>{" "}
                  <span className="break-all">012345678900000</span>
                </div>
                <div>
                  <span className="font-semibold">ব্যাঙ্ক নাম:</span>{" "}
                  <span>পূবালী ব্যাঙ্ক লিমিটেড</span>
                </div>
                <div>
                  <span className="font-semibold">রাউটিং নম্বর:</span>{" "}
                  <span>12345678</span>
                </div>
              </div>
            </div>

            {/* bKash Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                বিকাশের বিবরণ।
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* bKash Details */}
                <div className="space-y-3 text-sm sm:text-base md:text-lg">
                  <div>
                    <span className="font-semibold">একাউন্ট নাম:</span>{" "}
                    <span>হাসনাত আব্দুল্লাহ</span>
                  </div>
                  <div>
                    <span className="font-semibold">বিকাশ নম্বর:</span>{" "}
                    <span className="break-all">012345678999</span>
                  </div>
                  <div>
                    <span className="font-semibold">একাউন্ট টাইপ:</span>{" "}
                    <span>পার্সোনাল</span>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="flex items-center justify-center md:justify-end">
                  <div className="bg-white p-3 md:p-4 rounded-lg">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs text-center">
                        QR Code
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

