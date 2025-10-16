import Script from "next/script";
import Profile from "../../../pages/Profile/Profile";

const page = () => {
  return (
    <>
      <Script
        id="company-profile-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Company Profile",
            url: "https://aaryansourcing.com/profile",
              alternateName: "Aaryan",
            description:
              "Learn more about Aaryan Sourcing, a leading apparel manufacturing company. Explore our history, values, services, and commitment to high-quality, sustainable production practices.",
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
                "Aaryan Sourcing is an apparel manufacturing company specializing in garment sourcing, production, and distribution. We offer a comprehensive suite of services for fashion businesses worldwide, ensuring top-quality production with a commitment to sustainable practices.",
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
              award: [
                "WRAP Certified",
                "BSCI Certified",
                "OEKO-TEX® Certified",
                "GOTS Certified",
                "GRS Certified",
                "ISO 9001:2015 Certified",
                "ISO 14001 Certified",
              ],
            },
          }),
        }}
      />
      <Profile />
    </>
  );
};

export default page;
