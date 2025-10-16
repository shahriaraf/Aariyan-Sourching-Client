import Script from "next/script";
import CookiePage from "../../../pages/Cookie/CookiePage";

const page = () => {
  return (
    <>
      <Script
        id="cookie-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cookie Policy",
            url: "https://aaryansourcing.com/Cookie",
              alternateName: "Aaryan",
            description:
              "Learn about Aaryan Sourcing’s cookie policy, which explains how we use cookies to enhance user experience, track site usage, and improve the functionality of our website. This page outlines the types of cookies we use and how you can manage your preferences.",
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
                "Aaryan Sourcing is a leading apparel manufacturing company providing comprehensive garment sourcing, production, and distribution services worldwide. Our Cookie Policy ensures compliance with privacy regulations and enhances your user experience on our site.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services including sourcing, production, and distribution for fashion businesses.",
              },
              cookiePolicy: {
                "@type": "WebPage",
                name: "Cookie Policy",
                url: "https://aaryansourcing.com/Cookie",
                description:
                  "Aaryan Sourcing’s Cookie Policy explains the use of cookies on our website and how we collect and store information for site optimization and user experience enhancement.",
              },
            },
          }),
        }}
      />
      <CookiePage></CookiePage>
    </>
  );
};

export default page;
