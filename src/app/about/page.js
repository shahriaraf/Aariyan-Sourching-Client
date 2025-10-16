import Script from "next/script";
import About from "../../../pages/About/About";
export const metadata = {
  title: "About",
  description:
    "Aaryan Sourcing provides trusted global sourcing, procurement, and supply chain solutions. Connect with reliable suppliers, ensure quality, and grow your business worldwide.",
  keywords: [
    "Aaryan Sourcing",
    "global sourcing solutions",
    "international procurement",
    "product sourcing company",
    "supply chain management",
    "ethical sourcing",
    "manufacturer connections",
    "wholesale suppliers",
    "Sourcing company in Bangladesh",
    "India sourcing agent",
    "China sourcing services",
    "Dubai procurement solutions",
    "USA import sourcing",
    "Europe wholesale sourcing",
    "Asia supplier network",
  ],
  alternates: {
    canonical: "https://www.aaryansourcing.com/about",
  },
};
const Page = () => {
  return (
    <>
      <Script
        id="about-us-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Us",
            url: "https://aaryansourcing.com/about",
              alternateName: "Aaryan",
            description:
              "Learn more about Aaryan Sourcing, an apparel manufacturing company specializing in garment sourcing, production, and distribution. Discover our mission, values, and how we create high-quality apparel for businesses worldwide.",
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
                "Aaryan Sourcing is a Dhaka-based apparel manufacturing company offering comprehensive services for fashion businesses worldwide, from sourcing and production to distribution. We pride ourselves on delivering high-quality, sustainable products.",
              founder: {
                "@type": "Person",
                name: "Md. Khorshed Alam",
              },
              foundingDate: "2000-01-01",
              numberOfEmployees: "10",
              department: {
                "@type": "Organization",
                name: "Apparel Manufacturing",
              },
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services including sourcing, production, and distribution for fashion businesses.",
              },
            },
          }),
        }}
      />
      <About />
    </>
  );
};

export default Page;
