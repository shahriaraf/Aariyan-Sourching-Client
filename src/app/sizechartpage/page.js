import Script from "next/script";
import SizeChartPage from "../../../pages/SizeChartPage";

export default function page() {
  return (
    <>
      <Script
        id="size-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Size Guide",
            url: "https://aaryansourcing.com/Sizechart",
            description:
              "Visit Aaryan Sourcing’s Size Guide to find detailed measurements and sizing charts for various apparel types. Ensure a perfect fit for your custom designs by using our easy-to-follow guide.",
            mainEntity: {
              "@type": "Organization",
              name: "Aaryan Sourcing",
              url: "https://aaryansourcing.com",
              logo: "https://aaryansourcing.com/images/logo.png",
                alternateName: "Aaryan",
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
                "Aaryan Sourcing is a leading apparel manufacturing company providing sourcing, production, and distribution services worldwide. Our Size Guide ensures you choose the perfect size for your apparel designs, from tops to bottoms.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services including sourcing, production, and distribution for fashion businesses.",
              },
              sizeGuide: {
                "@type": "CreativeWork",
                name: "Size Guide",
                url: "https://aaryansourcing.com/Sizechart",
                description:
                  "A detailed size guide to help businesses ensure accurate sizing for their apparel products, with charts for various garment types such as shirts, pants, and dresses.",
              },
            },
          }),
        }}
      />
      <SizeChartPage />
    </>
  );
}
