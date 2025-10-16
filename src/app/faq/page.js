import Script from "next/script";
import Faq from "../../../pages/Faq/Faq";

export const metadata = {
  title: "Aaryan Sourcing. – FAQ on Apparel Sourcing",
  description:
    "Find answers to common questions about apparel sourcing, garment manufacturing, and our services at Aaryan Sourcing on our FAQ page.",
  keywords: [
    "FAQ",
    "apparel sourcing",
    "garment manufacturing",
    "custom apparel",
    "Aaryan Sourcing",
    "custom designs",
    "apparel orders",
    "fashion industry",
    "frequently asked questions",
    "Aaryan Sourcing FAQ",
    "Apparel Sourcing FAQ",
    "Apparel Manufacturing FAQ",
    "Apparel Manufacturing",
  ],
};

const FaqPage = () => {
  return (
    <>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "FAQ",
            url: "https://aaryansourcing.com/faq",
              alternateName: "Aaryan",
            description:
              "Visit Aaryan Sourcing’s FAQ page to find answers to common questions regarding our apparel manufacturing services, sourcing, production processes, and more.",
            publisher: {
              // The Organization is the publisher of the page
              "@type": "Organization",
              name: "Aaryan Sourcing",
              url: "https://aaryansourcing.com",
              logo: {
                "@type": "ImageObject",
                url: "https://aaryansourcing.com/images/logo.png",
              },
            },
            mainEntity: {
              // The FAQ content is the main entity of the page
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services do you offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aaryan Sourcing offers comprehensive apparel manufacturing services including sourcing, production, and distribution.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I place an order?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can place an order through our online platform or by contacting our customer service team directly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the minimum order quantity?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The minimum order quantity varies based on the type of apparel and customization required. Please contact us for specific details.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are your payment terms?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer flexible payment terms, including upfront deposits and payments upon completion of orders. Contact us to discuss your preferred payment method.",
                  },
                },
              ],
            },
          }),
        }}
      />
      <Faq />
    </>
  );
};

export default FaqPage;
