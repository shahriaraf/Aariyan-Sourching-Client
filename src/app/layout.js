import "./globals.css";
import LayoutWrapper from "../../components/LayoutWrapper";
import AuthProvider from "../../Context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import WattsAppButton from "../../components/WattsAppButton";
import Provider from "../../Context/Provider";
import QueryProvider from "../../Context/QueryProvider";
import { FilterProvider } from "../../Context/FilterContext";
import GeminiButton from "../../components/ChatGPT/GeminiButton";
import localFont from "next/font/local";
import newarrivalData from "../../lib/newarrival";
import getNewsLetterEmail from "../../lib/getNewsLetterEmail";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "400",
  style: "normal",
});

async function getFilterData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_ALL}find-productAttributes`,
      { next: { revalidate: 10 } }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch filter attributes: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}

export const metadata = {
  title: "Aaryan Sourcing Best Quality Apparel Sourcing Experts",
  description:
    "Partner with Aaryan Sourcing for dependable clothing manufacturing in Bangladesh, offering high-quality T-shirts, jeans, and sweaters to international markets.",
  icons: {
    icon: "/fav.png",
  },
  verification: {
    google: "TlkBs1xqfz1FbnA48hZbyF2XEMEp8a92_0ZssqBXoNg",
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default async function RootLayout({ children }) {
  const data = await newarrivalData();
  const newsData = await getNewsLetterEmail();
  const filterAttributes = await getFilterData();
  return (
    <html lang="en">
      <head>
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <QueryProvider>
          <Provider>
            <AuthProvider
              newsLetterEmail={newsData}
              filterAttributes={filterAttributes}
              data={data}
            >
              <FilterProvider>
                <LayoutWrapper>{children}</LayoutWrapper>
                <Toaster position="top-right" reverseOrder={false} />
                <WattsAppButton />
                <GeminiButton />
              </FilterProvider>
            </AuthProvider>
          </Provider>
        </QueryProvider>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          id="google-translate-api"
          strategy="afterInteractive"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </body>
    </html>
  );
}
