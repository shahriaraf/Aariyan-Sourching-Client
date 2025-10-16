import React from "react";
import Contact from "../../../pages/Contact/Contact";
import Script from "next/script";
export const metadata = {
  title: "Aaryan Sourcing – Contact Us",
  description:
    "Reach out to Aaryan Sourcing for your apparel sourcing and manufacturing requirements. Contact our team for custom apparel orders and assistance inquiries.",
  keywords: [
    "Aaryan Sourcing",
    "Contact Aaryan Sourcing",
    "Sourcing contact",
    "Sourcing services",
    "Sourcing solutions",
    "Business sourcing support",
    "Get in touch with Aaryan",
    "Supplier contact solutions",
    "Customer service Aaryan Sourcing",
    "Sourcing experts contact",
    "Sourcing company contact",
    "Email Aaryan Sourcing",
    "Call Aaryan Sourcing",
    "Sourcing inquiries",
    "Reach out to Aaryan Sourcing",
    "Online sourcing support",
    "Contact sourcing experts",
    "Sourcing assistance",
    "Aaryan Sourcing communication",
    "Connect with Aaryan Sourcing",
    "apparel sourcing",
    "custom apparel",
    "garment manufacturing",
    "apparel production inquiries",
  ],
};
const page = () => {
  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact",
            url: "https://aaryansourcing.com/contact",
              alternateName: "Aaryan",
            description:
              "Get in touch with Aaryan Sourcing for inquiries about our apparel manufacturing services, sourcing, or any other questions. Our team is ready to assist you with your business needs.",
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
                "Aaryan Sourcing is a leading apparel manufacturing company based in Dhaka, Bangladesh, offering a full suite of services, from sourcing and production to distribution. We prioritize quality and sustainable practices.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services including sourcing, production, and distribution for fashion businesses.",
              },
              contactOption: {
                "@type": "ContactOption",
                telephone: "+8801713117849",
                contactType: "Customer Service",
              },
            },
          }),
        }}
      />
      <Contact></Contact>
    </>
  );
};

export default page;
