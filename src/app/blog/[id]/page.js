import Script from "next/script";
import BlogDetails from "../../../../components/BlogDetails";

export default async function page({ params }) {
  const { id } = await params;

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aaryan Sourcing",
            url: `https://www.aaryansourcing.com/blog/${id}`,
            logo: "https://www.aaryansourcing.com/logo.png",
            sameAs: [
              "https://www.facebook.com/aaryansourcing",
              "https://www.linkedin.com/company/aaryansourcing/?viewAsMember=true",
            ],
          }),
        }}
      />
      <BlogDetails id={id} />;
    </>
  );
}
