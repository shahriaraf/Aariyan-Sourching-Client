import Script from "next/script";
import Colours from "../../../components/Colours";

export const metadata = {
  title: "Aaryan Sourcing – Custom Apparel Colours",
  description:
    "Explore Aaryan Sourcing's extensive colour palette for custom apparel. Choose from a variety of shades to create the perfect look for your brand.",
  keywords:
    "custom apparel colors, color palette, fabric colours, apparel design colours, aaryan sourcing, custom colours, fashion colour options, premium apparel colours, premium apparel colours & custom dye services, apparel colours, colour palette, premium shades, custom colour dyeing, apparel colour palette, colour matching",
  alternates: {
    canonical: "https://www.aaryansourcing.com/apparel-colours",
  },
};

const page = () => {
  return (
    <>
      <Script
        id="color-card-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Color Card",
            url: "https://aaryansourcing.com/colors",
            description:
              "Explore Aaryan Sourcing’s Color Card, showcasing a wide range of fabric colors available for your apparel manufacturing needs. Our color palette offers endless possibilities to help you create the perfect designs for your brand.",
            mainEntity: {
              "@type": "Organization",
              name: "Aaryan Sourcing",
              url: "https://aaryansourcing.com",
                alternateName: "Aaryan",
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
                "Aaryan Sourcing is an apparel manufacturing company offering fabric sourcing, production, and distribution services. Our Color Card page allows you to explore the variety of colors available for your custom apparel designs.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services, including sourcing, production, and distribution for fashion businesses.",
              },
              media: {
                "@type": "MediaObject",
                name: "Color Card",
                url: "https://aaryansourcing.com/colors",
                contentUrl:
                  "https://aaryansourcing.com/images/color-card-sample.jpg",
                description:
                  "A digital version of Aaryan Sourcing’s Color Card, showcasing the available fabric colors for apparel production.",
              },
            },
          }),
        }}
      />
      <Colours></Colours>
    </>
  );
};

export default page;
