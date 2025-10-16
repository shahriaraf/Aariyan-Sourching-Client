import CommonBanner from "../../components/CommonBanner";
import Image from "next/image";

import img_1 from "../../public/about/img-1.jpg";
import img_2 from "../../public/about/img-2.jpg";
import img_3 from "../../public/about/img-11.jpg";
import img_4 from "../../public/about/img-4.jpg";
import img_5 from "../../public/about/img-5.jpg";
import img_6 from "../../public/about/img-6.jpg";
import img_7 from "../../public/about/img-7.jpg";
import img_8 from "../../public/about/img-8.jpg";
import img_9 from "../../public/about/img-9.jpg";
import img_10 from "../../public/about/img-10.jpg";
import BlackQuoteBanner from "../../components/BlackQuoteBanner";
import Link from "next/link";

const AboutData = [
  {
    id: 1,
    title: "About Aaryan Sourcing",
    description: `Aaryan Sourcing, a major manufacturer and supplier of premium clothing products, has been serving the fashion and clothing supply industry for many years. As the fastest-growing economy in Bangladesh and the country's leading exporter of cotton apparel, we have been supplying high-quality clothing for many years. Fast & Skilled Our amazing team and quick turnaround make it possible to develop quality streetwear, activewear, and fashion collections. We want our clients’ style roots to be nurtured so they can live in grace. The world’s leading garment manufacturers rely on Aaryan Sourcing for the best value, supply solutions that cut costs and increase speed. Please ask about our design, material and service.`,
    image: img_1,
  },
  {
    id: 2,
    title: "Our journey",
    description: `Aaryan Sourcing was established in 2000 to meet the ever-growing demand for stylish, ready-to-wear apparel. With extensive fashion design services, we assist the industry’s hottest brands, boutiques, and startups in bringing their creations to life. We have done business with the world's top manufacturers. We partner with leading brands and stretch our products to their limits. If you have a difficult time deciding what to wear, our men's and women's collections offer a range of casual, business, and evening clothing options. Proprietary distribution channel and technologies accelerate product launch. Aaryan Sourcing brings worldwide trends to the forefront, making them accessible to everyone.`,
    image: img_2,
  },
  {
    id: 3,
    title: "Who Are We?",
    description: `With over 25 years of experience in the garment industry, Aaryan Sourcing provides excellent quality, sustainable solutions at cost-effective prices. We offer a tailor-made solution for an apparel supply model that encompasses design, sample, production, packing, and shipping, because we recognise that everyone has their own unique features. Through our skilled workforce, efficient line setup, and facilities, as well as our direct connection to Bangladesh, we can source and produce apparel at a superior level. Labour standards worldwide and fair treatment are our top priority in responsible sourcing and ethical production. We partner with vendors that help reduce waste and promote sustainability. Aryan Sourcing provided unmatched sourcing services, derived from the vision and values of new design houses, to multinational brands.`,
    image: img_3,
  },
  {
    id: 4,
    title: "Why choose us",
    description: `Bangladesh Fashion Company and Aaryan Sourcing make custom textiles and costumes for Bangladeshi fashion businesses. We can bring to bear a supply chain solution that is unique and enables us to compete at the highest level, leveraging IP, skills, and local market knowledge. Climate Smart Clothing Manufacture Co2Nscience with an environmentally friendly ranking, our playful designs cut down on waste and are kinder to the Earth compared to standard products. Our value in sustainability, design and functionality resonates with brands and retailers. As one of the market leaders in children's clothing, we understand that quality and style are our top priorities when it comes to creating clothes for children. Aaryan Sourcing ensures lasting partnerships to see your business grow.`,
    image: img_4,
  },
  {
    id: 5,
    title: "Our Expertise in Apparel Sourcing & Manufacturing",
    description: ( 
      <>
        Aaryan Sourcing is a leading garment sourcing and production company, providing high-quality readymade garments for men, women, and children worldwide. We have years of experience in the textile supply chain and thus set new standards for cost-effective, high-quality services. We are associated with some of the world's top garment manufacturers, enabling us to offer our esteemed clients a high-quality range. Our professionals assist in selecting materials and suppliers for sportswear, active wear, casual clothes, promotional wear, and high fashion. Value Optimization, we improve raw material procurement, production efficiency, packing and shipping to achieve value for our society. We are dedicated to manufacturing custom orders, with our global garment sourcing operation ensuring that your order is done in a timely and cost-effective manner.
        Learn more about our{' '}
        <Link className="font-semibold text-yellow-400 hover:underline" href="/workprocess">
          apparel sourcing process.
        </Link>
      </>
    ),
    image: img_5,
  },
  {
    id: 6,
    title: "A Reliable Clothing Sourcing Agent",
   description: (
      <>
        We, Aryan Sourcing, are a wholesale garments exporter and supplier to Fashion Brands and Stores around the Globe. Source directly from well-known domestic manufacturers who have strategic relationships instead of taking a chance on a foreign manufacturer with no QC headache. Loads better than over 1,000 other products, direct to a broad public at home and abroad. We manage clothing procurement, samples, production, shipping and logistics to streamline your supply chain. Solutions to conventional wear and modern clothing already available, from Aaryan Sourcing, are time-saving. If you need quick and affordable clothing production, our team is the way to go, as we both care and know what we are doing. Discover our{' '}
        <Link className="font-semibold text-yellow-400 hover:underline" href="/colors" >
          custom dyeing and apparel colours.
        </Link>
      </>
    ),
    image: img_6,
  },
  {
    id: 7,
    title: "Our Mission and Values",
    description: `We're on a mission to be the world's most trusted premium apparel buying platform, by delivering global fashion brands quality, performance, innovation, sustainability and brand insight. We provide garment supply chain solutions to enhance workflow, drive a lean factory floor, increase output, and respond quickly to market changes. Honesty, integrity, quality, service, ethical production, labour techniques, and sustainable manufacturing are essential to wholesale garment procurement, which is our priority. We control the quality from source to shelf. We offer affordable, sustainable and practical business wear solutions to our garment industry customers worldwide on a long-term basis.`,
    image: img_7,
  },
  {
    id: 8,
    title: "Our Vision",
    description: `Aaryan Sourcing wants to become the world capital for sustainable fashion. We provide fashion companies with the ability to bring their fabric dreams to life at affordable prices, while keeping sustainability in mind. All of our products align with the ideals of modesty and an eco-friendly lifestyle. We collaborate with our clients to create environmentally friendly products for eco-conscious consumers, utilising sustainable materials and fair production methods. We strive to be your dependable source of fast, honest, high-quality, responsibly crafted clothing — offered at a fair price. The Aryan Sourcing combines an assisted, sustainable approach with elegance.`,
    image: img_8,
  },
  {
    id: 9,
    title: "Our Commitment to Quality",
    description: `At Aaryan Sourcing, we strive for perfection. As a professional sourcer for us, we define and deliver high-quality materials to bring your idea to life. Throughout the years, we have partnered with high-quality manufacturers. We establish long-lasting textile supply chains and do business with eco-friendly companies, such as Pangaia, which produces goods from recycled or renewable resources, utilising green technologies to help reduce our carbon emissions. We are not only at great prices, but we have production capacity of 200,000 (shirts and pants) per month, thanks to our range of clothing that goes beyond basic or high fashion. Aaryan Sourcing is committed to bringing you garments that are fashion-forward and offer great value for money every day.`,
    image: img_9,
  },
  {
    id: 10,
    title: "Contact Us Our Global Reach",
    description: `Global apparel sourcing company Aaryan Sourcing supplies stores worldwide. We are a family-owned business offering superior Bangladeshi clothing for equestrians, outdoor enthusiasts, tactical professionals, and more. We strive to help our clients succeed through powerful international manufacturing connections. Buyers can source what they need with the help of our product searches. For the fastest lead times, we provide solutions based on standard products that deliver a combination of good quality and cost-effectiveness. Our featured products include knit T-shirts, polo shirts, hood tops, and sweatshirts, welcoming mass orders and OEM inquiries. Please select your style and contact us.`,
    image: img_10,
  },
];

const About = () => {
  return (
    <main className="bg-white">
      <CommonBanner backgroundImage="/about-us.jpg" breadcrumb="About" />
      <section className=" px-4 lg:px-2 py-16 md:py-24">
        <div>
          {AboutData.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white mt-6 lg:mt-12 mb-10 lg:mb-20 items-center max-w-6xl mx-auto"
            >
              <div className="w-full aspect-video relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="w-full flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                  {item.title}
                </h2>
                <p className="text-sm lg:text-base text-[#777777] text-justify leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
       <BlackQuoteBanner quote={"Your trusted partner in sourcing high-quality products with excellence."}/>
          {AboutData.slice(1).map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white mt-6 lg:mt-12 mb-10 lg:mb-20 items-center max-w-6xl mx-auto"
            >
              <div className="w-full aspect-video relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
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
                <p className="text-sm lg:text-base text-[#777777] text-justify leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
