"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left Section - Profile Picture and Name */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0 flex-1 min-w-0">
            <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0">
              <Image
                src="/Logo/alam-logo.jpg"
                alt="Salahuddin Ahmed"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-black leading-tight truncate">
                মীর শাহে আলম
              </h1>
              <p className="text-xs md:text-sm text-black leading-tight hidden sm:block">
                বগুড়া- ২ আসন | জাতীয় সংসদ সদস্য (প্রার্থী)
              </p>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <Link
              href="/"
              className="text-black hover:text-green-800 transition-colors text-base"
            >
              হোম
            </Link>
            <Link
              href="/about-party"
              className="text-black hover:text-green-800 transition-colors text-base"
            >
              দল সম্পর্কে
            </Link>
            <Link
              href="/about-me"
              className="text-black hover:text-green-800 transition-colors text-base"
            >
              আমার সম্পর্কে
            </Link>
            <Link
              href="/events"
              className="text-black hover:text-green-800 transition-colors text-base"
            >
              ইভেন্ট
            </Link>
            <Link
              href="/news"
              className="text-black hover:text-green-800 transition-colors text-base"
            >
              সংবাদ
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-green-800 transition-colors text-base"
            >
              যোগাযোগ
            </Link>
          </div>

          {/* Right Section - Join Us Button & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <Link
              href="/join"
              className="hidden sm:block bg-green-800 hover:bg-green-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base"
            >
              আমাদের যুক্ত হোন
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-800"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-black hover:text-green-800 transition-colors text-base py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                হোম
              </Link>
              <Link
                href="/about-party"
                className="text-black hover:text-green-800 transition-colors text-base py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                দল সম্পর্কে
              </Link>
              <Link
                href="/about-me"
                className="text-black hover:text-green-800 transition-colors text-base py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                আমার সম্পর্কে
              </Link>
              <Link
                href="/events"
                className="text-black hover:text-green-800 transition-colors text-base py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ইভেন্ট
              </Link>
              <Link
                href="/news"
                className="text-black hover:text-green-800 transition-colors text-base py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                সংবাদ
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-green-800 transition-colors text-base py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                যোগাযোগ
              </Link>
              <Link
                href="/join"
                className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-medium transition-colors text-base text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                আমাদের যুক্ত হোন
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Dark Green Footer Line */}
      <div className="h-1 bg-green-800 w-full"></div>
    </nav>
  );
}

