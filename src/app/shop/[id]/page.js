import Script from "next/script";
import ProductDetails from "../../../../pages/Shop/ProductDetails";
export default async function page({ params }) {
  const { id } = await params;
  let allProduct = {};
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_ALL}find-single-products/${id}`,
      {
        revalidate: 0,
      }
    );
    if (res.ok) {
      const data = await res.json();
      allProduct = data;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: `${allProduct.title}`,
            url: `https://www.aaryansourcing.com/shop/${allProduct._id}`,
            logo: "https://www.aaryansourcing.com/logo.png",
            sameAs: [
              "https://www.facebook.com/aaryansourcing",
              "https://www.linkedin.com/company/aaryansourcing/?viewAsMember=true",
            ],
          }),
        }}
      />
      <ProductDetails myProductData={allProduct} id={id} />
    </>
  );
}
