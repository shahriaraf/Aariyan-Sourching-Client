import Script from "next/script";
import Sustainability from "../../../pages/SustainabilityPage/Sustainability";

export const metadata = {
  title:
    "Aaryan Sourcing | Sustainable Sourcing & Ethical Manufacturing Practices",
  description:
    "At Aaryan Sourcing, sustainability is at the core of our business. We focus on eco-friendly sourcing, ethical manufacturing, and transparent supply chains that reduce environmental impact while supporting fair labor practices. Together, we create responsible fashion for a better future.",
  keywords: [
    "Aaryan Sourcing sustainability",
    "sustainable sourcing",
    "ethical manufacturing",
    "eco-friendly textiles",
    "green garment sourcing",
    "sustainable fashion supply chain",
    "corporate social responsibility",
    "ethical apparel production",
    "responsible sourcing practices",
    "sustainable sourcing Bangladesh",
    "ethical garment manufacturing Dhaka",
    "eco-friendly apparel sourcing Asia",
    "responsible fashion supply chain Bangladesh",
    "sustainable textile production Dhaka",
    "ethical apparel sourcing South Asia",
  ],
  internalLinks: [
    {
      text: "Explore our sourcing process and how sustainability plays a role",
      url: "/workProcess",
    },
    {
      text: "Learn more about our ethical certifications",
      url: "/certificate",
    },
    {
      text: "Check out our apparel resources for sustainable branding tools",
      url: "/resources",
    },
  ],
};

const page = () => {
  return (
    <>
    <Script
        id="sustainability-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sustainability",
            url: "https://aaryansourcing.com/Sustainability",
              alternateName: "Aaryan",
            description:
              "Aaryan Sourcing is dedicated to sustainable practices in apparel manufacturing. Our sustainability efforts include using eco-friendly materials, reducing waste, and supporting fair labor practices, ensuring responsible production for the fashion industry.",
            mainEntity: {
              "@type": "Organization",
              name: "Aaryan Sourcing",
              url: "https://aaryansourcing.com",
              logo: "https://aaryansourcing.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/aaryansourcing",
                "https://www.linkedin.com/company/aaryansourcing",
                "https://twitter.com/aaryansourcing",
                "https://www.instagram.com/aaryansourcing",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "House #19, Road #07, Flat #5-A, Sector #10, Uttara Model Town",
                addressLocality: "Dhaka",
                postalCode: "1230",
                addressCountry: "BD",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+8801713117849",
                contactType: "Customer Service",
                areaServed: "BD",
                availableLanguage: "English",
              },
              description:
                "Aaryan Sourcing is a leading apparel sourcing and manufacturing company based in Dhaka, Bangladesh. We specialize in sustainable manufacturing practices and eco-friendly fabrics, ensuring a lower environmental footprint in the apparel industry.",
              product: {
                "@type": "Product",
                name: "Sustainable Apparel Manufacturing Services",
                category: "Textiles & Fashion",
                description:
                  "Sustainable and eco-friendly apparel manufacturing services focusing on ethical practices and minimizing environmental impact.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "Contact for pricing",
                  eligibleRegion: "Worldwide",
                  priceValidUntil: "2025-12-31",
                },
              },
            },
          }),
        }}
      />
      <Sustainability />
    </>
  );
};

export default page;
