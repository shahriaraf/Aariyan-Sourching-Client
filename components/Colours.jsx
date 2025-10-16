import Image from "next/image";

import CommonBanner from "./CommonBanner";
import ExclusiveColours from "../pages/colors/ExclusiveColours";
import HighlightColours from "../pages/colors/HighlightColours";
import BlackQuoteBanner from "./BlackQuoteBanner";
import Link from "next/link";

const banner = "/colors.jpg";
const img_1 = "/colorpageimg/colour-Photo.webp";
const img_2 = "/colorpageimg/Explore-Our-Premium-Apparel-Colors.webp";
const img_3 = "/colorpageimg/Custom-Dyeing-Services-for-Your-Brand.webp";
const img_4 = "/colorpageimg/Wide-Range-of-Colours-for-Apparel.webp";
const img_5 = "/colorpageimg/High-Quality-Custom-Colour-Matching.webp";
const img_6 = "/colorpageimg/CustomDyeing.webp";

const ColoursData = [
  {
    id: 2,
    title: "Explore Our Premium Apparel Colors",
    description: `Discover the best quality Apparel colors in Aaryan Sourcing. We
              also specialise in small batch custom color dyeing, producing a
              selection of bright shades to accent your project. Our
              professionals use individualised techniques to create vivid,
              durable colors. You can select from our garment color range, or
              we can match to any color in your brand. It comes in shades for
              every style taste, whether you fancy bright or classic colors.`,
    imgUrl: img_2,
  },
  {
    id: 3,
    title: "Custom Dyeing Services for Your Brand",
    description: (
      <>
        Aaryan Sourcing offers brand-specific dyeing. Your designs are brought
        to life without compromise by the Color Matching Specialist. We work
        with you to achieve your coloring requirements and have a large variety
        of high-vis spot colors available. Premium Apparel Colors guarantee that
        you will get season-to-season consistency in high-quality fabrics. Join
        us in turning your ideas into color.Explore our custom{" "}
        <Link
          className="font-semibold hover:underline text-yellow-400"
          href="/workprocess"
        >
          dyeing process.
        </Link>
      </>
    ),
    imgUrl: img_3,
  },
  {
    id: 4,
    title: "Wide Range of Colors for Apparel",
    description: `Aaryan Sourcing offers a rainbow spectrum of garment colors to
              make your imagination stand out. Our premium colors are dyed
              using modern methods to deliver the lustrous color, durability,
              and attractiveness in our products. Whether classic or
              contemporary, we offer colors to match your brand. These colors
              will maintain through many washes, so your shirt will always look
              good. Please browse our inventory today.`,
    imgUrl: img_4,
  },
  {
    id: 5,
    title: "High-Quality Custom Color Matching",
    description: `Aaryan Sourcing offers an excellent bespoke color-match service
              for clothes that match your brand. Our skilled team will color
              match to your specifications using advanced dyeing methods for a
              perfect finish. Check out our custom dye services to match an
              existing armour color or create your own! Our exact-matching
              bespoke colors will strengthen your brand and ensure your clothes
              stand out.`,
    imgUrl: img_5,
  },
  {
    id: 6,
    title: "Why Choose Aaryan Sourcing for Custom Dyeing?",
    description: `Aaryan Sourcing, our top-class custom dyeing service, offers the
              ultimate range of cloth colors to suit your shade. Our extensive
              color range means that we can present your brand in wonderful and
              vibrant colors. Whether you need a shade tailored to high fashion
              or everyday wear, our quality can help you create something truly
              one-of-a-kind. Unique fabrics have a uniqueness about you.`,
    imgUrl: img_6,
  },
];

const Colours = () => {
  return (
    <main>
      <CommonBanner breadcrumb={"Colors"} backgroundImage={banner} />

      <section className="max-w-6xl mx-auto px-4 lg:px-2 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="w-full aspect-video relative">
            <Image
              src={img_1}
              alt="Unlimited Customized Color Possibilities"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              Unlimited Customized Color Possibilities
            </h2>
            <p className="text-sm lg:text-base text-gray-700 text-justify leading-relaxed">
              Create the perfect project colors with endless dye options. Your
              color, your way. Our service allows you to create a custom colored
              finish that perfectly matches your vision, precision-matching,
              expert coaching, and our wide selection of finishes. We offer the
              widest range of fashion, design & print goods, with ideal color
              customization at all levels, brilliant results guaranteed. View
              our complete{" "}
              <Link
                href="/profile"
                className=" hover:underline font-semibold text-yellow-400 "
              >
                apparel manufacturing service
              </Link>
              . Be creative without limits!
            </p>
          </div>
        </div>
      </section>
      <BlackQuoteBanner quote="Discover a lively selection of colours for every style and need preference." />

      <section className="max-w-6xl mx-auto px-4 lg:px-2 py-16">
        <div className="space-y-16 md:space-y-24">
          {ColoursData.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className="w-full aspect-video relative">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div
                className={`w-full flex flex-col justify-center ${
                  index % 2 !== 0 ? "" : "lg:order-first"
                }`}
              >
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                  {item.title}
                </h2>
                <p className="text-sm lg:text-base text-gray-700 text-justify leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-2">
          <HighlightColours />
          <div className="mt-16">
            <ExclusiveColours />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Colours;
