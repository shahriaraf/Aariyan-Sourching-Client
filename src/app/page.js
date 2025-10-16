import Home from "../../pages/Home/Home";
import featuredData from "../../lib/featured";
import newarrivalData from "../../lib/newarrival";
import trendingData from "../../lib/trending";
import Script from "next/script";
export const metadata = {
  title: "Aaryan Sourcing Best Quality Apparel Sourcing Experts",
  description:
    "Partner with Aaryan Sourcing for dependable clothing manufacturing in Bangladesh, offering high-quality T-shirts, jeans, and sweaters to international markets.",
  keywords: [
    "Aaryan Apparel Sourcing",
    "Bangladesh garment manufacturer",
    "wholesale clothing supplier",
    "T-shirt manufacturer",
    "polo shirt sourcing",
    "jeans exporter",
    "sweater supplier",
    "apparel sourcing Bangladesh",
    "clothing manufacturer Dhaka",
    "ethical garment sourcing",
    "custom apparel Bangladesh",
    "knitwear supplier",
    "woven garment exporter",
    "fashion sourcing Bangladesh",
    "bulk clothing supplier",
    "Bangladesh apparel exporter",
    "sustainable clothing sourcing",
    "private label apparel",
    "OEM clothing manufacturer",
    "ODM apparel supplier",
    "Bangladesh fashion sourcing",
    "textile sourcing Bangladesh",
    "Bangladesh clothing manufacturer",
    "apparel production Bangladesh",
    "Bangladesh garment industry",
    "wholesale apparel sourcing",
    "Bangladesh fashion exporter",
    "custom T-shirt supplier",
    "Bangladesh clothing exporter",
    "Bangladesh sweater manufacturer",
    "Bangladesh jeans supplier",
    "Dhaka, Bangladesh",
    "Uttara Model Town",
    "Dhaka Division",
    "Bangladesh garment industry",
    "Bangladesh textile hub",
    "Dhaka apparel market",
    "Bangladesh clothing manufacturing",
    "Dhaka fashion sourcing",
    "Bangladesh wholesale clothing",
    "Dhaka clothing supplier",
    "Bangladesh garment exporters",
    "Dhaka knitwear manufacturers",
    "Bangladesh woven garment suppliers",
    "Dhaka sweater manufacturers",
  ],
};

export default async function page() {
  let slides = [];
  let blogs = [];
  let commentCounts = {};

  const featured = await featuredData();
  const newarrival = await newarrivalData();
  const trending = await trendingData();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/banners`, {
      next: { revalidate: 3 },
    });
    if (res.ok) {
      const data = await res.json();
      slides = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Error fetching banners:", error);
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs?limit=4`,
      { next: { revalidate: 2 } }
    );
    if (res.ok) {
      const data = await res.json();
      blogs = data.blogs || [];
      if (blogs.length > 0) {
        const commentsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`,
          { next: { revalidate: 10 } }
        );
        if (commentsRes.ok) {
          const allComments = await commentsRes.json();
          commentCounts = allComments.reduce((acc, comment) => {
            const blogId = comment.blogId;
            if (blogId) acc[blogId] = (acc[blogId] || 0) + 1;
            return acc;
          }, {});
        }
      }
    }
  } catch (error) {
    console.error("Error fetching latest news:", error);
  }

  return (
    <>
      <Script
        id="organization-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aaryan Sourcing",
            alternateName: "Aaryan",
            url: "https://aaryansourcing.com",
            logo: "https://aaryansourcing.com/logo.png",
            sameAs: [
              "https://www.facebook.com/aaryansourcing",
              "https://www.linkedin.com/company/aaryansourcing",
              "https://twitter.com/aaryansourcing",
              "https://www.instagram.com/aaryansourcing",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+8801713117849",
              contactType: "Customer Service",
              areaServed: "BD",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "House #19, Road #07, Flat #5-A, Sector #10, Uttara Model Town",
              addressLocality: "Dhaka",
              postalCode: "1230",
              addressCountry: "BD",
            },
            description:
              "Aaryan Sourcing is a Dhaka-based apparel manufacturing company offering comprehensive services for fashion businesses worldwide, from sourcing and production to distribution. We pride ourselves on delivering high-quality, sustainable products.",
            founder: { "@type": "Person", name: "Md. Khorshed Alam" },
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
          }),
        }}
      />
      <Home
        slides={slides}
        blogs={blogs}
        commentCounts={commentCounts}
        featuredData={featured}
        newarrivalData={newarrival}
        trendingData={trending}
      />
    </>
  );
}
