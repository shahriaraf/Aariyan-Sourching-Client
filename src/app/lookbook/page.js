import Script from "next/script";
import Book from "../../../pages/Lookbook/Book";

export const metadata = {
  title:
    "Aaryan Sourcing – Apparel Lookbook | Premium Fashion & Modern Clothing",
  description:
    "Discover the Aaryan Sourcing Apparel Lookbook with premium fashion, sustainable clothing, and stylish collections. Explore curated outfits, wardrobe essentials, and global trends.",
  keywords: [
    "Apparel lookbook",
    "custom apparel designs",
    "fashion lookbook",
    "apparel collections",
    "Aaryan Sourcing",
    "fashion inspiration",
    "custom clothing designs",
    "Fashion Lookbook",
    "Custom Apparel Lookbook",
    "Aaryan Sourcing Lookbook",
    "Lookbook for Apparel Brands",
    "Lookbook for Fashion Brands",
    "Custom Apparel Collections",
    "apparel lookbook",
    "fashion sourcing",
    "clothing catalog",
    "premium apparel",
    "stylish outfits",
    "sustainable fashion",
    "textile sourcing",
    "designer clothing",
    "fashion suppliers",
    "wholesale apparel",
    "global fashion trends",
    "contemporary clothing",
    "fashion photography",
    "lifestyle apparel",
    "wardrobe essentials",
    "curated outfits",
    "garment manufacturing",
    "brand apparel collections",
    "modern clothing",
    "Aaryan Sourcing New York",
    "Aaryan Sourcing Los Angeles",
    "Aaryan Sourcing London",
    "Aaryan Sourcing Paris",
    "Aaryan Sourcing Milan",
    "Aaryan Sourcing Dubai",
    "Aaryan Sourcing Mumbai",
    "Aaryan Sourcing Dhaka",
    "Aaryan Sourcing Hong Kong",
    "Aaryan Sourcing Tokyo",
    "Aaryan Sourcing Toronto",
    "Aaryan Sourcing Sydney",
    "Aaryan Sourcing Singapore",
    "Aaryan Sourcing Cape Town",
    "Aaryan Sourcing Berlin",
  ],
  alternates: {
    canonical: "https://www.aaryansourcing.com/lookbook",
  },
};

const page = () => {
  return (
    <>
      <Script
        id="lookbook-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lookbook",
            url: "https://aaryansourcing.com/lookbook",
              alternateName: "Aaryan",
            description:
              "Explore Aaryan Sourcing’s Lookbook, showcasing the latest apparel designs, trends, and styles curated for fashion brands. Get inspiration from our custom-made collections that represent our commitment to quality and design excellence.",
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
                "Aaryan Sourcing is a leading apparel manufacturing company offering design and production services for fashion businesses worldwide. Our Lookbook highlights a curated collection of designs that exemplify our capabilities and design expertise.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services including sourcing, production, and distribution for fashion businesses.",
              },
              media: {
                "@type": "MediaObject",
                name: "Lookbook Collection",
                url: "https://aaryansourcing.com/lookbook/collection",
                contentUrl:
                  "https://aaryansourcing.com/lookbook/collection.jpg",
                description:
                  "A curated collection of the latest apparel designs and trends offered by Aaryan Sourcing.",
              },
            },
          }),
        }}
      />
      <Book />
    </>
  );
};

export default page;
