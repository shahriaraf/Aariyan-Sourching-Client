import Script from "next/script";
import CodeOfConduct from "../../../pages/CodeofConduct/CodeOfConduct";

export const metadata = {
  title: "Aaryan Sourcing. – Global Code of Conduct",
  description:
    "Explore Aaryan Sourcing's Global Code of Conduct. Learn about our commitment to business ethics, compliance, and sustainability in operations.",
  keywords: [
    "Global Code of Conduct",
    "business ethics",
    "compliance",
    "sustainability",
    "corporate responsibility",
    "fair labor practices",
    "Aaryan Sourcing",
    "ethical sourcing",
    "Aaryan Sourcing Code of Conduct",
    "Business Ethics",
    "Compliance",
    "Sustainability",
    "Fair Labor Practices",
    "Corporate Responsibility",
    "Environmental Responsibility",
  ],
  alternates: {
    canonical: "https://www.aaryansourcing.com/global-code-of-conduct",
  },
};

const page = () => {
  return (
    <>
      <Script
        id="code-of-conduct-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Code of Conduct",
            url: "https://aaryansourcing.com/code-of-conduct",
              alternateName: "Aaryan",
            description:
              "Read Aaryan Sourcing’s Code of Conduct outlining the ethical standards and values we uphold in our operations. This policy ensures transparency, fairness, and responsibility in all our dealings with customers, suppliers, and employees.",
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
                "Aaryan Sourcing is a leading apparel manufacturing company offering sourcing, production, and distribution services globally. Our Code of Conduct ensures that we operate with integrity, respect, and fairness across all our business practices.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services including sourcing, production, and distribution for fashion businesses.",
              },
              policy: {
                "@type": "CreativeWork",
                name: "Code of Conduct",
                url: "https://aaryansourcing.com/code-of-conduct",
                description:
                  "Aaryan Sourcing’s Code of Conduct sets forth the ethical principles and standards that guide our operations and interactions with stakeholders.",
              },
            },
          }),
        }}
      />
      <CodeOfConduct />
    </>
  );
};

export default page;
