import Image from "next/image";
import CommonBanner from "../../components/CommonBanner";
import { IoFlash, IoPeople, IoEye } from "react-icons/io5";
import Link from "next/link";
const Sustainability = () => {
  const imgSocial1 = "/sustainability-image/banner.jpg";
  const imgSocial2 = "/sustainability-image/Commitment.jpg";
  const imgSocial3 = "/sustainability-image/ecofriendly.jpg";
  const imgSocial4 = "/sustainability-image/ethicalfair.jpg";
  const imgSocial5 = "/sustainability-image/reducingimpact.jpg";
  const imgEnv1 = "/sustainability-image/materials.jpg";
  const imgEnv2 = "/sustainability-image/green.jpg";
  const imgTech1 = "/sustainability-image/socialfair.jpg";

  const socialComplianceData = [
    {
      id: 1,
      title: "Sustainability at Aaryan Sourcing",
      image: imgSocial1,
      alt: "GSV Logo",
      text: "Aaryan Sourcing. We prioritise sustainability and ethical sourcing. We are a mission-driven team focused on revolutionising the fashion industry. It does not harm the environment, making this product eco-friendly. Our fabric is also easy to keep looking new with a cold-water wash and low tumble dry. We conduct a rigorous multiple selection process to identify Sustainability Apparel manufacturers that uphold high environmental and ethical standards, passing these benefits on to you. Sustainable clothing should prioritise the care of our world for future generations. We also work with suppliers who share our values for transparency, fairness, and doing the right thing so that we can ensure our products are sourced responsibly. Feel good while wearing them, sourced from Aaryan Sourcing – your friendly home of beautiful, ethical Apparel Manufacturing producers that make a difference, providing you with environmentally friendly fabrics and green apparel manufacturing options. Join us in our journey toward a more sustainable world, one piece of clothing at a time.",
    },
    {
      id: 2,
      title: "Our Commitment to Sustainable Apparel",
      image: imgSocial2,
      alt: "SMETA Sedex Logo",
      text: "With our eco-friendly clothing, we are disrupting the status quo in fashion and fighting for a world that’s good to everyone. Sustainable clothing production is easier on the environment, limits waste, and uses less energy to produce. Our signature is written on the design of each piece, which is a testament to our commitment to sustainability, with meticulous selection of fabrics and avant-garde technology. Our earth- friendly clothing factory maintains the strictest ethical and quality standards while keeping the environment and community in mind. At Aaryan Sourcing, we are confident that we are the world’s best green garment manufacturer. We can also do our part by adopting ethical clothing choices. Eco-fashion can also teach us how to effect substantive change.",
    },
    {
      id: 3,
      title: "Eco-Friendly Manufacturing Practices",
      image: imgSocial3,
      alt: "WRAP Logo",
      text: "Aaryan Sourcing passionately believes in the sustainability of garment manufacturing. We are a fashion brand with a low environmental footprint. We are working closely with trusted vendors that share our commitment to the environment, and every step in creating a garment is done in line with the values we believe in. Using cutting-edge technology and environmentally conscious clothing production, we can eliminate waste and use less water (two of our most basic resources!), and energy-efficient machinery helps reduce our impact on the environment. Our earth-friendly garments are made with environmentally responsible manufacturing processes to comply with all our sustainability and social responsibility goals. Aaryan Sourcing leads the way in green fashion. We aim to provide sustainable fashion without sacrificing style, proving that the two can live harmoniously.",
    },
    {
      id: 4,
      title: "Ethical Sourcing and Fair Trade",
      image: imgSocial4,
      alt: "Amfori BSCI Logo",
      text: "At Aaryan Sourcing, we're very committed to fairtrade and ethical sourcing. We create eco and community- minded fashion for the road, using responsible, sustainable materials that make a world of difference. We buy sustainably and work with other retailers who share our values of fairness, transparency, and respect for workers. With fair trade, we ensure that all our products are eco-friendly and that everyone in the production chain receives fair wages and safe working conditions for each wooden piece. Our sustainable baby and infant clothing collection is respectful and light on the planet - meaning essential organic newborns' babywear has never cost so little. For people and planet, Aaryan Sourcing is an exceptional option. Provides trendy and sustainable clothing you can feel good about.",
    },
    {
      id: 5,
      title: "Reducing Environmental Impact in Apparel Production",
      image: imgSocial5,
      alt: "ICS Logo",
      text: "So, the sustainability strategy of Aaryan Sourcing is absolutely underpinned by fair trade and ethical garment sourcing. ABOUT THE SHOP We produce eco-friendly products inspired by nature and the community, synergizing sustainable clothing perfect for both work and play. We care about where clothing comes from and strive to build a community of vendors who value justice, transparency, and fair treatment for employees as we do. Fair-trade We're fully committed to fair trade standards, working conditions, and the finest quality products, which is why we've just become officially certified Fair Trade. That means our factories meet rigorous factory certification requirements, and our products are produced ethically, too. Our green practices serve as an example to our employees, suppliers, and customers, demonstrating that we can all contribute to a healthier planet. This enables you to provide a cleaner, brighter future for your baby with our environmentally friendly newborn items. Aaryan Sourcing is a company that considers the people and the Earth. It has fantastic, eco-friendly clothing that you’ll feel comfortable wearing all day.",
    },
  ];

  const environmentComplianceData = [
    {
      id: 1,
      title: "Sustainable Materials and Fabrics.",
      image: imgEnv1,
      alt: "ZDHC Logo",
      text: "Aaryan Sourcing is environmentally friendly, using eco-friendly materials and fabrics to help protect the environment. Eco materials. We are constantly doing our best to build the most sustainable products that use less material, produce less waste, and consume less energy. We take great care to source all of our materials ethically and sustainably, including organic cotton and recycled polyester. Our environmentally-friendly clothing production eliminates the release of harmful toxins and slowly degrades into the environment, thereby minimising our overall carbon footprint. Our production process is low carbon, our garments are delightful for the planet, and look smashing on you. We focus on sustainable materials to design a fashionable, eco-friendly garment. It is indeed a stylish as well as beneficial approach to Aaryan Sourcing.",
    },
    {
      id: 2,
      title: "Green Manufacturing & Waste Reduction",
      image: imgEnv2,
      alt: "Higg Index Logo",
      text: "At Aaryan Sourcing, we are dedicated to creating sustainable clothing and a greener footprint! The one-of- a-kind is made with the environment in mind and constructed out of sustainable materials. We have a lower waste, low energy use, and low carbon process for manufacturing high-quality apparel products. We pay our workers fairly, treat them humanely, and maintain safe working conditions. It is on this principle that we have formed the opinion that sustainability is not just about being environmentally responsible and that it clearly includes workers’ rights. We bring you good looks, well-made clothing at a great price, and we do it responsibly by not being wasteful and using environmentally responsible fabrics. Aaryan Sourcing is leading the way for sustainable fashion production, proving that fashion can be a vehicle in which we support both our environment and the world's workforce.",
    },
  ];

  const technicalComplianceData = [
    {
      id: 1,
      title: "Social Responsibility and Fair Labour Practices",
      image: imgTech1,
      alt: "OCS Logo",
      text: "Aaryan Sourcing, sustainability in clothing means social responsibility, fair wages, and safe working conditions, as well as eco-friendly fabrics and responsible garment manufacturing. We maintain a strict Code of Conduct for all participants in our sustainable garment production projects. We work with like-minded suppliers who also offer fair pay, safe working conditions, competitive benefits, and workers' rights. We maintain an emphasis on realistic production costs while continuing our commitment to responsible, fair wages for every item we produce—a sustainable garment. We make sustainable clothing because fashion should never come at the cost of those who make it or the world. we call home. We are mindful of the eco-friendly materials we choose, and our social responsibility by adopting conscientious business practices to preserve the environment without compromising employee integrity. Aaryan Sourcing. Proudly provides gorgeous & sustainable clothing to help make a more ethical and fair fashion industry globally",
    },
  ];
  const mainPillarsData = [
    {
      id: 1,
      icon: "/sustainability-image/people.webp",
      title: "People",
      description:
        "Our organization's core is the value of caring, which fosters a happy and productive workforce. We believe that the true legacy of any life is the humanity we contribute, and we integrate this principle into every aspect of our operations.",
    },
    {
      id: 2,
      icon: "/sustainability-image/planet.png",
      title: "Planet",
      description:
        "We value respect and gratitude, recognizing that climate change and the depletion of finite resources impact everyone. Our proactive approach focuses on minimizing resource use and seeking sustainable alternatives.",
    },
    {
      id: 3,
      icon: "/sustainability-image/product.webp",
      title: "Product",
      description:
        "We are deeply passionate about our product and are driven by an experienced team dedicated to meeting the diverse needs of our global customers. Our success is supported by advanced production capabilities.",
    },
  ];

  const complianceData = [
    {
      categoryTitle: "Social & Security Compliance",
      items: [
        {
          id: "ssc1",
          logo: "/sustainability-image/GSV-Logo-Web.png",
          description:
            "GSV integrates global supply chain security initiatives like C-TPAT, PIP, and AEO to enhance safety, risk control, and efficiency. By collaborating with international suppliers and importers, GSV aims to develop a robust global security verification process.",
        },
        {
          id: "ssc2",
          logo: "/sustainability-image/combi-sedex-smeta.webp",
          description:
            "SEDEX is a not-for-profit membership organization focused on improving responsible and ethical business practices in global supply chains. It uses the SMETA audit methodology to ensure ethical compliance.",
        },
        {
          id: "ssc3",
          logo: "/sustainability-image/wrap.webp",
          description:
            "WRAP is a globally recognized certification program dedicated to ensuring ethical practices in manufacturing. It certifies facilities against 12 Principles that promote safe, legal, and responsible manufacturing.",
        },
        {
          id: "ssc4",
          logo: "/sustainability-image/amfori.webp",
          description:
            "BSCI, an initiative by the Foreign Trade Association (FTA), is a platform that unites over 1,500 retailers, importers, brands, and national associations to promote sustainable trade practices and ethical labor practices.",
        },
        {
          id: "ssc5",
          logo: "/sustainability-image/ICS.webp",
          description:
            "The ICS (International Code of Conduct) is built on Human Rights Principles and key ILO conventions. By signing the code, suppliers commit to adhering to its standards and ensuring respect for human rights.",
        },
      ],
    },
    {
      categoryTitle: "Environment Compliance Initiatives",
      items: [
        {
          id: "eci1",
          logo: "/sustainability-image/ZDHC.webp",
          description:
            "Our mission is to empower brands and retailers in the textile, apparel, and footwear industries to adopt sustainable chemical management practices, promoting environmental sustainability and safer working conditions.",
        },
        {
          id: "eci2",
          logo: "/sustainability-image/HiggIndex.webp",
          description:
            "The Higg FEM (Facility Environmental Module) offers facilities a comprehensive assessment of their environmental impacts. It enables them to identify areas where they can improve performance and enhance sustainability.",
        },
      ],
    },
    {
      categoryTitle: "Technical Compliance",
      items: [
        {
          id: "tc1",
          logo: "/sustainability-image/organic.webp",
          description:
            "The Organic Content Standard (OCS) certifies non-food products containing 95-100% organic material, ensuring transparency in the supply chain and tracking the raw material from its origin to the end product.",
        },
        {
          id: "tc2",
          logo: "/sustainability-image/images.webp",
          description:
            "The Global Recycled Standard (GRS) is an international, voluntary certification that sets rigorous requirements for the third-party verification of recycled content, traceability, and responsible practices.",
        },
        {
          id: "tc3",
          logo: "/sustainability-image/ORGANIC-100.webp",
          description:
            "The Recycled Claim Standard (RCS) is a chain of custody standard designed to trace recycled raw materials through the supply chain. It ensures transparency and accountability by verifying the amount of recycled content.",
        },
        {
          id: "tc4",
          logo: "/sustainability-image/GOTS2New.webp",
          description:
            "The Global Organic Textile Standard (GOTS) guarantees the organic integrity of textiles throughout the entire supply chain, from harvesting raw materials to eco-friendly manufacturing and ethical labor practices.",
        },
        {
          id: "tc5",
          logo: "/sustainability-image/bci.webp",
          description:
            "The Better Cotton Initiative (BCI) is a not-for-profit organization dedicated to improving global cotton production by enhancing the lives of cotton farmers and promoting environmental sustainability.",
        },
        {
          id: "tc6",
          logo: "/sustainability-image/Euro-Flax.webp",
          description:
            "The EUROPEAN FLAX® label guarantees full traceability of flax fibers from seed to finished product. Exclusively produced in France, Belgium, and the Netherlands, it offers a premium, responsibly sourced product.",
        },
      ],
    },
    {
      categoryTitle: "Building, Electrical & Fire Safety",
      items: [
        {
          id: "befs1",
          logo: "/sustainability-image/Alliance.webp",
          description:
            "Alliance enhances worker safety in the Ready-Made Garment (RMG) industry by improving fire, electrical, and building safety in factories. The organization empowers employees to uphold and maintain safe working conditions.",
        },
        {
          id: "befs2",
          logo: "/sustainability-image/Bangladesh.webp",
          description:
            "The Accord on Fire and Building Safety in Bangladesh is dedicated to protecting workers from fire hazards and building collapses. The Accord supports and monitors necessary safety improvements through inspections.",
        },
        {
          id: "befs3",
          logo: "/sustainability-image/client.webp",
          description:
            "The RSC (Remediation Coordination Cell) enhances safety in the RMG industry by conducting comprehensive inspections. It supports safety improvements, provides training, and operates an independent worker complaint mechanism.",
        },
      ],
    },
  ];
  const sustainabilityPillars = [
    {
      id: 1,
      icon: IoFlash,
      title: "Mindful Manufacturing",
      description:
        "Aaryan Sourcing was founded on the principle of sustainability. We advocate for handmade, socially conscious, and environmentally sound design. We carefully select raw materials and ensure they are produced in an environmentally friendly manner, establishing a responsible base for everything we create.",
      colorClasses: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      icon: IoPeople,
      title: "Ethical Sourcing & Fair Labor",
      description:
        "Aaryan Sourcing values ethical suppliers. Our international partners and allies share our commitment to justice, openness, and social responsibility. You can rely on our ethical fabric production, which ensures that workers are safe, paid fairly, and not exploited.",
      colorClasses: "bg-green-50 text-green-600",
    },
    {
      id: 3,
      icon: IoEye,
      title: "Our Sustainable Vision",
      description:
        "For us, sustainability is an ongoing journey. We continually innovate to make our value chain more sustainable, concentrating on product development, environmental care, and human care.",
      colorClasses: "bg-purple-50 text-purple-600",
    },
  ];
  return (
    <div className="bg-slate-50">
      <CommonBanner
        backgroundImage={imgSocial1}
        breadcrumb={"Sustainability"}
      />
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-2">
          <div className="text-center mx-auto max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight mb-4">
              Our Sustainability Pillars
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Aaryan Sourcing was founded on the principle of sustainability. We
              advocate for handmade, socially conscious, and environmentally
              sound design. Check out our{" "}
              <Link
                href="/resource"
                className=" hover:underline font-semibold text-yellow-400"
              >
                apparel resources
              </Link>{" "}
              for sustainable branding tools We carefully select raw materials
              and ensure they are produced in an environmentally friendly
              manner, establishing a responsible base for everything we create.
              Explore our{" "}
              <Link
                className="font-semibold hover:underline text-yellow-400"
                href="/workprocess"
              >
                {" "}
                sourcing process
              </Link>{" "}
              and how sustainability plays a role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div
                    className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 ${pillar.colorClasses}`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-2">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
              Our Core Values & Compliance
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              We are actively engaged in reducing the impact of garment
              manufacturing on people and the planet. Our commitment to the
              environment goes hand in hand with our vision for growth. Learn more about our{" "}
              <Link
                href="/certificates"
                className=" hover:underline font-semibold text-yellow-400"
              >
                ethical certifications
              </Link>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {mainPillarsData.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white p-8 rounded-lg border border-gray-200 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-16">
            {complianceData.map((category) => (
              <div key={category.categoryTitle}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-l-4 border-yellow-400 pl-4">
                  {category.categoryTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="h-20 mb-6 flex items-center justify-center">
                        <Image
                          src={item.logo}
                          alt={item.id}
                          width={150}
                          height={80}
                          style={{
                            objectFit: "contain",
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-2">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
              Social Compliance
            </h2>
            <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="space-y-16">
            {socialComplianceData.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white shadow-md border border-gray-200 overflow-hidden flex flex-col lg:flex-row items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2 relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 md:p-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-2">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
              Environmental Compliance
            </h2>
            <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="space-y-16">
            {environmentComplianceData.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white shadow-md border border-gray-200 overflow-hidden flex flex-col lg:flex-row items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2 relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 md:p-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-2">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
              Technical Compliance
            </h2>
            <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="space-y-16">
            {technicalComplianceData.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white shadow-md border border-gray-200 overflow-hidden flex flex-col lg:flex-row items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2 relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 md:p-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
