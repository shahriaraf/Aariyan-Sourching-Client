import Script from "next/script";
import {
  BsTag,
  BsPerson,
  BsBuilding,
  BsEnvelope,
  BsTelephone,
  BsGlobe,
  BsGeoAlt,
  BsCalendar,
  BsCreditCard,
  BsCloudUpload,
  BsChatDots,
  BsArrowRepeat,
  BsSend,
} from "react-icons/bs";
import { GiTShirt } from "react-icons/gi";

const page = () => {
  const adultSizes = ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];
  const youthSizes = [
    "0-2Y",
    "2Y-4Y",
    "4Y-6Y",
    "6Y-8Y",
    "8Y-10Y",
    "10Y-12Y",
    "12Y-14Y",
  ];

  return (
    <>
      <Script
        id="order-now-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Order Now",
              alternateName: "Aaryan",
            url: "https://aaryansourcing.com/order",
            description:
              "Place your order with Aaryan Sourcing for top-quality apparel manufacturing services. We offer custom solutions for fashion businesses with a streamlined ordering process.",
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
              action: {
                "@type": "Action",
                name: "Order Now",
                url: "https://aaryansourcing.com/order",
                target: "https://aaryansourcing.com/order",
              },
            },
          }),
        }}
      />
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#f0f4ff] to-[#e4e9ff]">
        <div className="w-full max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-lg sm:p-8 md:p-10">
          <header className="mb-8 text-center">
            <h1 className="flex items-center justify-center text-2xl font-bold text-gray-800 md:text-3xl">
              <GiTShirt className="mr-3 text-3xl text-gray-700 md:text-4xl" />
              Place Your Order
            </h1>
          </header>

          <form className="space-y-8">
            {/* --- First Part: Style Number --- */}
            <div className="p-4 rounded-lg bg-blue-50 sm:p-6">
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsTag className="text-blue-500" />
                <span className="ml-2">Style Number</span>
              </label>
              <input
                type="text"
                defaultValue="AASLTD-MST-04"
                className="w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                  <BsPerson className="text-purple-500" />
                  <span className="ml-2">Your Name</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                  <BsBuilding className="text-green-500" />
                  <span className="ml-2">Company Name</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                  <BsEnvelope className="text-red-500" />
                  <span className="ml-2">Email Address</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                  <BsTelephone className="text-yellow-500" />
                  <span className="ml-2">Phone Number</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                  <BsGlobe className="text-blue-500" />
                  <span className="ml-2">Website URL</span>
                </label>
                <input
                  type="url"
                  className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                  <BsGeoAlt className="text-pink-500" />
                  <span className="ml-2">Mailing Address</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 sm:p-6">
              <h2 className="flex items-center mb-4 text-base font-semibold text-gray-800 md:text-lg">
                <GiTShirt className="mr-2 text-xl text-green-500" />
                Adult Sizes & Quantity
              </h2>

              <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
                {adultSizes.map((size) => (
                  <div key={size} className="text-center">
                    <label className="text-sm font-medium text-gray-500">
                      {size}
                    </label>
                    <input
                      type="number"
                      defaultValue="0"
                      min="0"
                      className="w-full px-2 py-2 mt-1 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 sm:p-6">
              <h2 className="flex items-center mb-4 text-base font-semibold text-gray-800 md:text-lg">
                <span className="mr-2 text-xl">😊</span>
                Youth Sizes & Quantity
              </h2>

              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
                {youthSizes.map((size) => (
                  <div key={size} className="text-center">
                    <label className="text-sm font-medium text-gray-500">
                      {size}
                    </label>
                    <input
                      type="number"
                      defaultValue="0"
                      min="0"
                      className="w-full px-2 py-2 mt-1 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-purple-50 sm:p-6">
                <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                  <BsCalendar className="text-purple-500" />
                  <span className="ml-2">Expected Delivery Time</span>
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="p-4 rounded-lg bg-cyan-50 sm:p-6">
                <label className="flex items-center mb-2.5 text-sm text-gray-600 font-medium">
                  <BsCreditCard className="text-blue-500" />
                  <span className="ml-2">Payment Methods</span>
                </label>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <input
                      id="at-sight"
                      type="checkbox"
                      className="w-4 h-4 bg-white border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="at-sight"
                      className="ml-3 text-sm text-gray-700"
                    >
                      At Sight L/C
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="tt"
                      type="checkbox"
                      className="w-4 h-4 bg-white border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="tt" className="ml-3 text-sm text-gray-700">
                      T/T
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="western-union"
                      type="checkbox"
                      className="w-4 h-4 bg-white border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="western-union"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Western Union
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer h-40 sm:h-36 hover:bg-gray-50">
                <BsCloudUpload className="w-8 h-8 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold text-blue-600">
                    Click to upload
                  </span>{" "}
                  Primary Image (Max 5MB)
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer h-40 sm:h-36 hover:bg-gray-50">
                <BsCloudUpload className="w-8 h-8 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold text-blue-600">
                    Click to upload
                  </span>{" "}
                  Secondary Image (Max 5MB)
                </p>
              </div>
            </div>

            <div>
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsChatDots className="text-red-400" />
                <span className="ml-2">Additional Message</span>
              </label>
              <textarea
                rows="4"
                placeholder="Enter any special instructions or comments here..."
                className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <div className="p-6 text-center bg-gray-100 rounded-lg">
              <h3 className="flex items-center justify-center text-sm font-semibold text-gray-700">
                <span className="mr-2">🤖</span> CAPTCHA Verification
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <span className="text-lg font-medium text-gray-800">
                  1 + 10 = ?
                </span>
                <button
                  type="button"
                  className="text-gray-500 hover:text-blue-600"
                >
                  <BsArrowRepeat className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Answer"
                  className="w-24 px-3 py-2 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Please solve the simple math problem to verify you are not a
                robot.
              </p>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-8 py-3 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg sm:w-auto hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
              >
                <BsSend className="w-5 h-5 mr-2" />
                Place Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
