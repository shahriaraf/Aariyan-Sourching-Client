import Script from "next/script";
import WorkProcess from "../../../pages/WorkProcess/WorkProcess";

export const metadata = {
  title: "Aaryan Sourcing – Our Work Process",
  description:
    "Discover Aaryan Sourcing's step-by-step work process for apparel sourcing and manufacturing, from design to delivery, with a focus on quality and efficiency.",
  keywords:
    "Work process, apparel sourcing, garment manufacturing, custom apparel production, Aaryan Sourcing, apparel production steps, manufacturing process, Quality Control, Apparel Manufacturing Process, Garment Production, Fabric Sourcing, On-Time Delivery",
  alternates: {
    canonical: "https://www.aaryansourcing.com/lookbook",
  },
};
const page = () => {
  return (
    <>
      <Script
        id="work-process-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Work Process",
            url: "https://aaryansourcing.com/workprocess",
              alternateName: "Aaryan",
            description:
              "Discover Aaryan Sourcing’s structured and efficient work process that ensures the highest quality in apparel sourcing, manufacturing, and delivery. Our step-by-step approach emphasizes precision, quality control, and timely delivery.",
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
                "Aaryan Sourcing specializes in apparel sourcing, production, and distribution. Our work process ensures high-quality production, from concept to delivery, with a focus on timely and precise execution.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services, focusing on high-quality production and efficient delivery.",
              },
              process: {
                "@type": "HowTo",
                name: "Aaryan Sourcing Work Process",
                description:
                  "A detailed, step-by-step guide to Aaryan Sourcing's apparel manufacturing process, from design to delivery.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Design & Development",
                    description:
                      "The process starts with collaboration on design, using the latest technology to meet client specifications.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Fabric Sourcing",
                    description:
                      "We source high-quality fabrics from trusted suppliers to ensure durability and comfort.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Sampling",
                    description:
                      "We create prototypes and samples to validate design, fabric choice, and production feasibility.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Production Planning",
                    description:
                      "Production schedules are meticulously planned to ensure efficiency and timely delivery.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Manufacturing",
                    description:
                      "Skilled labor and modern machinery are employed to manufacture the apparel with high precision.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Quality Control",
                    description:
                      "We perform multiple rounds of quality checks to ensure the final product meets the highest standards.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Finishing & Packaging",
                    description:
                      "The final step involves garment finishing, ironing, and packing according to international standards.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Shipping & Delivery",
                    description:
                      "Once the product is packed, it is shipped to customers using the most reliable logistics partners.",
                  },
                ],
              },
            },
          }),
        }}
      />
      <WorkProcess />
    </>
  );
};

export default page;
