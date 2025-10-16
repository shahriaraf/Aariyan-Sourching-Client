import Script from "next/script";
import BlackQuoteBanner from "../../../components/BlackQuoteBanner";
import CommonBanner from "../../../components/CommonBanner";
import ResourceGrid from "../../../pages/Resource/ResourceGrid";

export const metadata = {
  title: "Aaryan Sourcing – Apparel Resources",
  description:
    "Access Aaryan Sourcing's valuable apparel resources, including product images, size charts, lookbook, and more to enhance your brand’s presence.",
  keywords:
    "Apparel Resources, Product Images, Size Charts, Lookbook, Branding Tools, Aaryan Sourcing, Apparel Marketing Resources, Fashion Resources, Apparel Sourcing Resources, Sourcing Resources, Product Catalogue, Size Charts, Lookbook, Marketing Tools, print & embroidery guides",
  alternates: {
    canonical: "https://www.aaryansourcing.com/apparel-resources",
  },
};
const banner_img = "https://i.ibb.co/QFrKjBwS/resource.webp";
const ResourcePage = () => {
  return (
    <>
      <Script
        id="resources-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Resources",
            url: "https://aaryansourcing.com/resource",
              alternateName: "Aaryan",
            description:
              "Access valuable resources provided by Aaryan Sourcing, including industry insights, guides, and tools to help fashion businesses grow and improve their sourcing and manufacturing processes.",
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
                "Aaryan Sourcing is a leading apparel manufacturing company based in Dhaka, Bangladesh. We provide comprehensive services for fashion businesses, including sourcing, production, and distribution, with a focus on quality and sustainability.",
              product: {
                "@type": "Product",
                name: "Apparel Manufacturing Services",
                category: "Apparel & Fashion",
                description:
                  "Comprehensive apparel manufacturing services including sourcing, production, and distribution for fashion businesses.",
              },
              relatedLink: [
                {
                  "@type": "CreativeWork",
                  name: "Industry Insights",
                  url: "https://aaryansourcing.com/resources/industry-insights",
                },
                {
                  "@type": "CreativeWork",
                  name: "Sourcing Guides",
                  url: "https://aaryansourcing.com/resources/sourcing-guides",
                },
                {
                  "@type": "CreativeWork",
                  name: "Manufacturing Tools",
                  url: "https://aaryansourcing.com/resources/manufacturing-tools",
                },
              ],
            },
          }),
        }}
      />
      <CommonBanner breadcrumb={"resource"} backgroundImage={banner_img} />
      <div className="py-12 ">
        <div className="text-justify px-4 lg:px-0  max-w-6xl mx-auto text-gray-600 mb-6">
          You have my word that Aaryan Sourcing is the best garment sourcing
          service there is. Top Partnering We provide value-added services,
          including working with honest suppliers to ensure orders are of high
          quality and on time. Aaryan Sourcing understands the ever-growing
          needs of the fashion world and works with manufacturers to fulfil
          clients’ individual needs. Our sourcing, QC and logistical experience
          also enable startups and established brands to operate more
          effectively. Product Description About the Brand Aaryan Sourcing -Our
          passion is apparel that looks great and feels fabulous. Our clothing
          is made in individual pieces, where your own choice is encouraged.
          Shop our selection and you’ll enjoy convenient sourcing too.
        </div>
        <BlackQuoteBanner quote="Aaryan Sourcing – Your Trusted Partner for Quality, Style, and Seamless Garment Solutions." />
        <div className="px-4">
          <ResourceGrid />
        </div>
      </div>
    </>
  );
};

export default ResourcePage;
