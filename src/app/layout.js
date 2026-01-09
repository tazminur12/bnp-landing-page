import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "মীর শাহে আলম | বগুড়া-২ আসন | জাতীয় সংসদ সদস্য প্রার্থী | বিএনপি",
  description: "মীর শাহে আলম, বগুড়া-২ আসনের জাতীয় সংসদ সদস্য প্রার্থী। বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) থেকে ধানের শীষ প্রতীকে প্রতিদ্বন্দ্বিতা করছেন। গণতন্ত্র, ন্যায়বিচার ও জনগণের অধিকারের জন্য প্রতিশ্রুতিবদ্ধ।",
  keywords: [
    "মীর শাহে আলম",
    "বগুড়া-২",
    "বিএনপি",
    "বাংলাদেশ জাতীয়তাবাদী দল",
    "ধানের শীষ",
    "জাতীয় সংসদ সদস্য",
    "Bogura-2",
    "BNP candidate",
    "Bangladesh election",
  ],
  authors: [{ name: "মীর শাহে আলম" }],
  creator: "মীর শাহে আলম",
  publisher: "মীর শাহে আলম Campaign",
  metadataBase: new URL("https://yourwebsite.com"), // Replace with actual URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "মীর শাহে আলম | বগুড়া-২ আসন | জাতীয় সংসদ সদস্য প্রার্থী",
    description: "মীর শাহে আলম, বগুড়া-২ আসনের জাতীয় সংসদ সদস্য প্রার্থী। বিএনপি থেকে ধানের শীষ প্রতীকে প্রতিদ্বন্দ্বিতা করছেন।",
    url: "https://yourwebsite.com", // Replace with actual URL
    siteName: "মীর শাহে আলম - Official Campaign",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/Hero/alam-hero.jpg",
        width: 1200,
        height: 630,
        alt: "মীর শাহে আলম - বগুড়া-২ আসন",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "মীর শাহে আলম | বগুড়া-২ আসন | বিএনপি প্রার্থী",
    description: "মীর শাহে আলম, বগুড়া-২ আসনের জাতীয় সংসদ সদস্য প্রার্থী। গণতন্ত্র, ন্যায়বিচার ও জনগণের অধিকারের জন্য প্রতিশ্রুতিবদ্ধ।",
    images: ["/Hero/alam-hero.jpg"],
    creator: "@yourhandle", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#166534",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link rel="icon" href="/Hero/dhaner-shis-logo.png" />
        <link rel="apple-touch-icon" href="/Hero/dhaner-shis-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#166534" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
