import Script from "next/script";
import FabricShowcase from "../../../pages/FabricShowcase/FabricShowcase";

export const metadata = {
  title: "Aaryan Sourcing | Yarn & Fabric Types Guide",
  description:
    "Explore yarn & fabric types we supply: cotton, polyester, viscose, modal, blends, denim, jersey, fleece, linen, wool—plus organic and recycled options.",
  keywords: [
    "Aaryan Sourcing",
    "yarn types",
    "fabric types",
    "cotton yarn",
    "polyester yarn",
    "viscose yarn",
    "modal yarn",
    "spandex elastane",
    "organic cotton",
    "recycled polyester",
    "bamboo fabric",
    "linen fabric",
    "wool fabric",
    "denim fabric",
    "jersey knit",
    "fleece fabric",
    "twill fabric",
    "satin fabric",
    "chiffon fabric",
    "textile sourcing",
  ],
};

const FabricsPage = () => {
  return (
    <>
      <Script
        id="fabric-showcase-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Fabric Showcase",
            url: "https://aaryansourcing.com/FabricShowcase",
              alternateName: "Aaryan",
            description:
              "Explore Aaryan Sourcing’s wide range of high-quality fabrics, including cotton, polyester, and blends. Our fabric showcase highlights diverse materials for apparel manufacturing, ensuring durability, comfort, and style for your garments.",
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
                "Aaryan Sourcing is a leading apparel sourcing and manufacturing company based in Dhaka, Bangladesh. Specializing in a wide array of fabric options, we cater to global fashion businesses, offering top-quality sourcing, production, and delivery solutions.",
              product: {
                "@type": "Product",
                name: "Fabric Showcase",
                category: "Textiles & Fabrics",
                description:
                  "A wide selection of fabrics including cotton, polyester, blends, and specialty fabrics for various apparel manufacturing needs.",
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
      <FabricShowcase />
    </>
  );
};

export default FabricsPage;
