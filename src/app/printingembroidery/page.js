import Script from "next/script";
import PrintingEmbroidery from "../../../pages/PrintingEmbroidery/PrintingEmbroidery";

export const metadata = {
  title:
    "Aaryan Sourcing — Custom Printing & Embroidery Services | Premium Apparel Branding",
  description:
    "Aaryan Sourcing offers professional custom printing and embroidery services for apparel. From t-shirts and uniforms to fashion collections, we provide high-quality branding solutions with precision, durability, and modern design.",
  keywords:
    "Aaryan Sourcing, printing and embroidery, custom apparel printing, logo embroidery, garment branding, t-shirt printing, embroidered uniforms, screen printing, premium embroidery, embroidered polo shirts, custom clothing design, fashion embroidery, wholesale apparel printing, sustainable apparel branding, clothing customization, textile embroidery, embroidered jackets, apparel manufacturing services, branded apparel solutions, custom fashion embroidery, Printing & Embroidery New York, Printing & Embroidery Los Angeles, Printing & Embroidery London, Printing & Embroidery Paris, Printing & Embroidery Milan, Printing & Embroidery Dubai, Printing & Embroidery Mumbai, Printing & Embroidery Dhaka, Printing & Embroidery Hong Kong, Printing & Embroidery Tokyo, Printing & Embroidery Toronto, Printing & Embroidery Sydney, Printing & Embroidery Singapore, Printing & Embroidery Cape Town, Printing & Embroidery Berlin",
  alternates: {
    canonical: "https://www.aaryansourcing.com/printing-embroidery",
  },
};

const page = () => {
  return (
    <>
    <Script
        id="printing-embroidery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Printing & Embroidery",
            url: "https://aaryansourcing.com/printingembroidery",
              alternateName: "Aaryan",
            description:
              "Discover Aaryan Sourcing’s expert printing and embroidery services. We offer custom branding solutions for apparel, including screen printing, embroidery, and digital printing, to bring your designs to life with high-quality results.",
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
                "Aaryan Sourcing is a leading apparel manufacturing company that specializes in custom garment production, offering services like printing, embroidery, and fabric sourcing. We bring your unique design ideas to life with precision and quality.",
              product: {
                "@type": "Product",
                name: "Printing & Embroidery Services",
                category: "Apparel & Fashion",
                description:
                  "Custom printing and embroidery services for apparel, including screen printing, embroidery, and digital printing.",
              },
              service: [
                // <-- Correction is here
                {
                  "@type": "Service",
                  name: "Custom Printing",
                  description:
                    "High-quality custom screen printing for apparel, perfect for branding, promotional items, and custom designs.",
                  url: "https://aaryansourcing.com/printingembroidery",
                },
                {
                  "@type": "Service",
                  name: "Custom Embroidery",
                  description:
                    "Precision embroidery for logos, designs, and text on apparel, offering a professional, durable finish.",
                  url: "https://aaryansourcing.com/printingembroidery",
                },
              ],
            },
          }),
        }}
      />
      <PrintingEmbroidery />
    </>
  );
};

export default page;
