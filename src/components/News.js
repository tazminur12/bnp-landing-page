import Image from "next/image";

export default function News() {
  const newsItems = [
    {
      image: "/people/1.jpg",
      date: "৩ জানুয়ারি ২০২৬",
      title: "ঢাকা-৪ আসনের জনগণের কথা শোনা: আমাদের সম্প্রদায়ের সবচেয়ে বেশি প্রয়োজন কী",
      description: "সত্যিকারের নেতৃত্ব শোনা দিয়ে শুরু হয়। গত কয়েক সপ্তাহ ধরে, আমি আমাদের সম্প্রদায়ের সদস্যদের সাথে সরাসরি কথা বলেছি...",
      author: "সালাহউদ্দিন আহমেদ",
      authorImage: "/Logo/alam-logo.jpg",
    },
    {
      image: "/people/2.jpg",
      date: "৩ জানুয়ারি ২০২৬",
      title: "ঢাকা-৪ আসনকে আরও শক্তিশালী ও নিরাপদ করে গড়ে তোলা",
      description: "একটি শক্তিশালী আসন সহযোগিতার মাধ্যমে গড়ে তোলা হয়। একসাথে কাজ করে আমরা আমাদের লক্ষ্য অর্জন করতে পারি...",
      author: "সালাহউদ্দিন আহমেদ",
      authorImage: "/Logo/alam-logo.jpg",
    },
    {
      image: "/people/3.jpg",
      date: "৩ জানুয়ারি ২০২৬",
      title: "স্থানীয় নেতৃত্বে স্বচ্ছতা, জবাবদিহিতা ও আস্থা",
      description: "আস্থা কার্যকর নেতৃত্বের ভিত্তি। আমি প্রতিশ্রুতি দিচ্ছি যে স্বচ্ছতা এবং জবাবদিহিতা আমার নেতৃত্বের মূল স্তম্ভ হবে...",
      author: "সালাহউদ্দিন আহমেদ",
      authorImage: "/Logo/alam-logo.jpg",
    },
  ];

  return (
    <section className="w-full bg-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-10 md:mb-12">
          {/* Label */}
          <div className="inline-block bg-gray-200 rounded-full px-6 py-2 mb-4">
            <p className="text-gray-700 text-sm md:text-base font-medium">
              সংবাদ
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            সংবাদ ও আপডেট
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* News Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* News Content */}
              <div className="p-5 md:p-6">
                {/* Date */}
                <p className="text-sm text-gray-500 mb-3">
                  {item.date}
                </p>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Posted By Section */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.authorImage}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Posted By</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

