
import Link from "next/link";
import BlackQuoteBanner from "../../components/BlackQuoteBanner";
import CommonBanner from "../../components/CommonBanner";
import Image from "next/image";

const workProcessData = [
 
  {
    id: 2,
    title: "Laboratory Section",
    description:
      "Our laboratory section at Aaryan Sourcing, Fabrics / garments quality and safety standards are strictly adhered to. Our lab, using state of the art testing equipment, ranges from assessing colorfastness, shrinkage and tensile strength, to pilling resistance, and various chemical testing. Each batch of fabric is strictly tested for strength, evenness, dyeing and eco-friendliness to ensure the fabric accord with the international and buyer's standards. Our trained experts have measured this specific item for accuracy. Production line testing safeguards against risk and provides you with export ready garments for the world stage. Aaryan Sourcing lab makes it possible to source eco-friendly and high-performing textiles that have product quality and supply chain integrity.",
    imgUrl: "/workProcess/Laboratory.webp",
  },
  {
    id: 3,
    title: "Dyeing Section",
    description: (
      <>
       Our Dyeing Section, Aaryan Sourcing, are treated with the latest technology,
        environment-friendly processes for special garments with excellent 
        color consistencies and coloring fastness. To meet the demands of our global
         customers, we focus on reactive, dispersion, and vat dyeing, plus high-capacity
          dyeing equipment. They verify colors, are resistant to fading and ensure quality 
          through materials that comfortably hold up even when worn out. Our dye specialists are 
          committed to sustainably dyeing in order to conserve water and chemically safe in 
          satisfaction of international standards. For knitted, woven and technical textiles,
           we provide the full end-to-end package for apparel, sportswear, and fashion; providing
            a specialist approach to garment finishing. With boundless knowledge of dyeing at
             Aaryan Sourcing, you can rely on an environmentally safe and accurate supply of 
             excellent fabrics.Explore our{' '}
        <Link href="/colors" className=" hover:underline font-semibold text-yellow-400" >
           colour customisation options.
        </Link>
      </>
    ),
    imgUrl: "/workProcess/Dyeing.webp",
  },
  {
    id: 4,
    title: "Pattern Section",
    description:
      "Aaryan Sourcing's Pattern Section is equipped to make creative designs into production garments. Our professionals create exact, efficient, and fabric-responsive patterns on the most advanced CAD programs and auto marker programs. Each design is adjusted for various sizes and tailored to fit and style—innovation, Accuracy, and Speed. The basis of our approach is an extensive emphasis on technological innovation, accuracy, and speed in cutting and sewing operations. This is error-reducing, fast in production, and of high quality. Leveraging our wealth of pattern-making experience, we interpret every design with technical accuracy to meet the requirements of global CASUAL/SPORT/COLLECTION/BASIC wear.",
    imgUrl: "/workProcess/process-04.webp",
  },
  {
    id: 5,
    title: "Cutting Section",
    description:
      "The Knitting Section of Aaryan Sourcing is the heart and soul of quality fabric making. The department is equipped with the most modern /advanced hosiery circular and flat knitting machines to give every cloth roll a uniform hand, strength, and finish. Our efficient workforce meticulously checks yarn selection, gauge and machine setting for knitting of single jersey, rib, interlock and other fabric specifications. Stay on top of global standards and large volume production schedules with our innovation, sustainability, and efficiency. Every fabric is test-worn for strength, softness and stretch. The company is a preferred supplier to global fashion brands with stylish, comfortable, and high-quality fabrics made from the latest technology and finest craftsmanship.",
    imgUrl: "/workProcess/process-05.webp",
  },
  {
    id: 6,
    title: "Sewing Section",
    description:
      "Aaryan Sourcing Our sewing division, which is the heart of garment production where sense of accuracy precision and skill make a world-class garment. With today's modern sewing equipment and quality control, today’s products easily meet these standards. Our experienced operators adhere to stringent quality standards for the perfect seam strength, durability and beautiful finish of every garment. The sewing is controlled to meet the international clothing standards and the customer’s requirements. We minimize the waste and maximize production with emphasis on efficiency, productivity and sustainability. Sewing Technology of Aryans Sourcing offer premium quality clothing, designed for worldwide sewing casual wear, sport wear and fashion wear from its facilities.",
    imgUrl: "/workProcess/process-06.webp",
  },

  {
    id: 7,
    title: "Embroidery Section",
    description:
      "Aaryan Sourcing, we have an Embroidery section, which brings, imagination, style, and brand identity to the garment through perfection & beauty. Today, using modern computerized machines, we are perfect at sewing logos, appliqué, monograms, and ornaments. Every embroidered creation is precise and bold, guaranteeing just the right blend of identifying with and standing out for bulk creation. Our team embraces the latest technology and innovative techniques to cater to all fashion, sportswear, and business-wear requirements. We use eco-friendly threads and carry out strict quality testing to ensure the quality, sustainability, and efficiency of our bags. Aaryan Sourcing's embroidery know-how transforms the garment into high-quality, customised solutions, adding value to the product and complying with international apparel standards.",
    imgUrl: "/workProcess/Embroidery.webp",
  },
  {
    id: 8,
    title: "Finishing Section",
    description:
      "Our Complete Section: Aaryan Sourcing the Final Touch to Ensure International Standards That Every Garment Is of High Quality, Properly Packed, and Exact. On the last step of production, we perform thread cutting, ironing, labeling, folding, and packing, all under strict quality control. With professional staff and state-of-the-art equipment, we guarantee seamless finishes in line with the international garment standards and the customer’s requirements. All our garments are hand checked for quality and durability before being shipped to our worldwide customers. We eliminate waste while driving value and providing efficient, sustainable, and accurate solutions. Aaryan Sourcing's finishing service offers the perfect finish for casual wear, sportswear, and fashion apparel, ensuring your garments are ready for export in the manner your buyer prefers.",
    imgUrl: "/workProcess/Finishing Section.webp",
  },
  {
    id: 9,
    title: "Quality Control",
    description:
      "Our Quality Control (QC) Section Aaryan Sourcing is our quality control (QC) section to make sure that every garment meets our quality standard for accuracy, durability, and compliance. During the production process, our q.c team performs inspections at multiple stages, covering the stitching, fitting, labeling and measurements, to ensure that our products meet the highest standard. Every apparel item goes through in-line and final inspections to insure color, fabric performance and overall appearance. Adhering to international standards of garment quality, we ensure that the products are free from all sorts of defects and is reliable for exports. Specializing in QC, we offer precision, accountability and buyer satisfaction and ensure all clothing meets brand requirements. Aaryan Sourcing’s dedication to strict Quality inspections helps us develop long-term relations with the worldwide Clientele and helps in the on time delivery of premium apparel.",
    imgUrl: "/workProcess/process-07.webp",
  },
  {
    id: 10,
    title: "Printing Section",
    description:
      "Our Printing Section, Aaryan Sourcing, creatively combines precision to enhance the aesthetic value of the clothes. With the latest screen printing, digital printing, and heat-transfer machines, we supply innovative, unbeatable garments that are developed and sent to meet the requirements of European fashion. The highest quality archival inks are used with professional materials to finish each piece, with attention to detail, and finished with high-quality professional photo paper (or these can also be framed in canvas). We collaborate with our experienced design team to create unique designs that capture brand identity and scale up through the mass production process. Our commitment to creative development, quality control, and sustainability enables us to deliver high-performance printing solutions for casual wear, active wear, and ready-to-wear fashion. Printing prowess: By Aaryan Sourcing, our garments are truly noticeable due to their unique cuts and prints. Aaryan Sourcing’s printing capabilities ensure that the garments stand out in terms of style, quality, and world readiness.",
    imgUrl: "/workProcess/Printing.webp",
  },
  {
    id: 11,
    title: "Buyer Inspection",
    description:
      "Aaryan Sourcing we know that every garment must meet international standards, before shipping the consignment and that is why we request for Buyer Inspection. Buyers and 3rd party auditors can also perform strict checks on fabric performance, stitching correctness, finishing details, labeling, and measurements at our site. It ensures that buyer specifications and international quality standards are met. We quality control all our products so that they are made to the highest standard. Since we are so transparent, buyers can approve of production before shipment. Aaryan Sourcing, we export ready to export, zero - defect and brand compliant garments with focus on accuracy, accountability and timeliness of delivery and customer satisfaction, and our trust-based relationship with our international counterparts.",
    imgUrl: "/workProcess/process-08.webp",
  },
  {
    id: 12,
    title: "Packing Area",
    description:
      "Our Packing Area at Aaryan Sourcing for delivers garments in Excellent conditions for export to other markets worldwide. Every article is neatly folded, tagged and packed as per buyer’s requirement and international standards. We concentrate on accuracy, presentation, and secure handling with high quality materials and packaging to make sure your items will be protected during shipment. The series includes labeling, carton packing, barcoding, container loading aid to logistic and on-time delivery. The highest quality control checks are implemented at each stage to ensure consistency and prevent mistakes. With a mix of the most efficient and sustainable retail technology available today, plus an added dose of precision – Aaryan Sourcing’s packaging operations ensure every garment makes it to end buyers intact.",
    imgUrl: "/workProcess/process-10.webp",
  },
];

const WorkProcess = () => {
  return (
    <main>
      <CommonBanner
        backgroundImage={"/work-process.jpg"}
        breadcrumb={"Work Process"}
      />

     <section className="max-w-6xl mx-auto px-4 lg:px-2 py-12 md:py-16">
        <p className="text-gray-700 leading-relaxed text-justify">
          At Aaryan Sourcing, we are committed to headache-free apparel sourcing
          that you can trust, at competitive prices, with no compromise on
          quality. We alleviate the pressure of clothing production for our
          clients, knowing that we keep everyone informed through regular
          communication and maintain transparency throughout. We oversee all
          parts of the value chain, from raw materials to the production of
          clothes. We work with talented suppliers to bring you the treasures
          you seek, in high-quality wholesale women’s clothing. Learn more about our <Link  href="/profile" className=" hover:underline font-semibold text-yellow-400">sourcing solutions.</Link>
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mt-4">
          We dedicate time and resources to understanding your needs and product
          requirements, guiding you toward a solution that aligns with your
          brand vision, budget, and timeline. Whether you search by part number
          or part name, we will always find the equipment that you need! Let us
          help you save both time and money on your next online equipment
          purchase. Aaryan Sourcing is your trusted Sourcing Partner for all of
          your sourcing and production requirements from end-to-end sourcing to
          production, ensuring peace of mind at all times. Check out our posts
          for branding and marketing your clothing.See our <Link  href="/resource" className=" hover:underline font-semibold text-yellow-400">resources</Link> for garment branding and marketing.
        </p>
      </section>
 <BlackQuoteBanner quote="Efficient and clear steps to deliver quality solutions each time."/>

      <section className="max-w-6xl mx-auto px-4 lg:px-2 pb-12">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Knitting Section
            </h3>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              Our Knitting Section at Aaryan Sourcing is equipped with modern circular knitting machines for the quality and accuracy of the fabric. Our experienced employees produce single jersey, rib, pique, and interlock knitted fabric using the best quality yarns, enabling all clients to meet their requirements perfectly. We value efficiency, strength, and long–lasting power, which increase productivity and lower environmental waste. Control of GSM, Shrinkage, and Dimensional Stability in Knitting. This ensures you get fabrics complying with international standards. Utilizing the latest in technology infused with quality control, we serve the garment, sportswear, and fashion industry. Aaryan Sourcing Innovative, well-trained Knitter assists companies in saving costs and time to ship the best quality goods in a perfect Lead time.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video">
              <Image
                src={"/workProcess/Knitting.webp"}
                alt="Knitting Section"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
     
      <section className="max-w-6xl mx-auto px-4 lg:px-2 py-12 space-y-20 md:space-y-24">
        {workProcessData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row gap-10 lg:gap-14 items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default WorkProcess;