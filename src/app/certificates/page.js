import Script from "next/script";
import Certificate from "../../../pages/Certificate/Certificate";

export const metadata = {
  title:
    "Aaryan Sourcing - Certifications & Standards for Quality and Sustainability",
  description:
    "Explore Aaryan Sourcing’s commitment to excellence with industry-leading certifications and standards. Learn how our certified practices ensure top-quality products and sustainable sourcing.",
  keywords:
    "Apparel certifications, manufacturing standards, quality certifications, Aaryan Sourcing, global compliance, ethical apparel production, Quality Control, Sourcing Certifications, Manufacturing Standards, Ethical Sourcing, Sustainable Apparel, Global Apparel Standards, Aaryan Sourcing, certifications, quality standards, sustainability, eco-friendly sourcing, product certifications, industry standards, certified sourcing practices, ethical sourcing, global certifications, sustainable practices, quality assurance, responsible sourcing, supply chain certifications, eco-conscious sourcing, fair trade, sustainable development, ISO certification, ethical business practices, green certifications, certified suppliers",
  alternates: {
    canonical: "https://www.aaryansourcing.com/certifications",
  },
};

const page = () => {
  return (
    <>
      <Script
        id="certificate-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Certificate",
            url: "https://aaryansourcing.com/certificates",
            description:
              "Explore the certifications and standards Aaryan Sourcing adheres to, ensuring quality, sustainability, and ethical practices in apparel manufacturing. These certifications reflect our commitment to industry excellence and responsible sourcing.",
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
                "Aaryan Sourcing is a leading apparel manufacturing company based in Dhaka, Bangladesh. We prioritize quality control and ethical practices in every step of our production, ensuring certified manufacturing that meets international standards.",
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
      <Certificate />
    </>
  );
};

export default page;
