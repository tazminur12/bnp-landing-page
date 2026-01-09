export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "মীর শাহে আলম",
    alternateName: "Mir Shahe Alam",
    description: "বগুড়া-২ আসনের জাতীয় সংসদ সদস্য প্রার্থী, বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)",
    image: "/Hero/alam-hero.jpg",
    jobTitle: "জাতীয় সংসদ সদস্য প্রার্থী",
    affiliation: {
      "@type": "Organization",
      name: "বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)",
      alternateName: "Bangladesh Nationalist Party (BNP)",
      logo: "/BNP/BNP3.png",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "বগুড়া",
      addressRegion: "Bogura",
      addressCountry: "BD",
    },
    knowsAbout: [
      "রাজনীতি",
      "গণতন্ত্র",
      "ন্যায়বিচার",
      "জনসেবা",
      "উন্নয়ন",
    ],
    award: "বাংলাদেশ জাতীয়তাবাদী দল মনোনীত প্রার্থী",
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "PoliticalParty",
    name: "বাংলাদেশ জাতীয়তাবাদী দল",
    alternateName: "BNP",
    description: "বাংলাদেশ জাতীয়তাবাদী দল একটি গণতান্ত্রিক, জাতীয়তাবাদী ও জনগণকেন্দ্রিক রাজনৈতিক দল।",
    logo: "/Hero/dhaner-shis-logo.png",
    foundingDate: "1978-09-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
      },
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "মীর শাহে আলম - Official Campaign",
    url: "https://yourwebsite.com",
    description: "মীর শাহে আলম, বগুড়া-২ আসনের জাতীয় সংসদ সদস্য প্রার্থী। বিএনপি থেকে ধানের শীষ প্রতীকে প্রতিদ্বন্দ্বিতা করছেন।",
    inLanguage: "bn",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
