import StatCard from "./StatCard";

const img_1 = "https://www.aasourcingltd.com/images/whowe/1-TrustedClients.png";
const img_2 = "/home-logo.jpg";
const img_3 =
  "https://www.aasourcingltd.com/images/whowe/3-YearsOfExperience.png";
const img_4 =
  "https://www.aasourcingltd.com/images/whowe/4-VisitedConference.png";
const img_5 =
  "https://www.aasourcingltd.com/images/whowe/5-ComplianceFactories.png";
const img_6 = "https://www.aasourcingltd.com/images/whowe/6-production.png";

const statsData = [
  {
    imageUrl: img_1,
    value: "30+",
    label: "Trusted Clients",
  },
  {
    imageUrl: img_2,
    value: "3500",
    label: "Shipments",
  },
  {
    imageUrl: img_3,
    value: "22+",
    label: "Years of Experience",
  },
  {
    imageUrl: img_4,
    value: "55",
    label: "Visited Conference",
  },
  {
    imageUrl: img_5,
    value: "17+",
    label: "Compliance Factories",
  },
  {
    imageUrl: img_6,
    value: "1M",
    label: "PCS/Month Production",
  },
];

const WhyChooseAA = () => {
  return (
    <section className="py-10 bg-slate-50 mb-10 sm:py-10 lg:py-10">
      <div className="px-4 mx-auto max-w-6xl lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[24px] font-bold mb-1">Aaryan Sourcing </p>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Why Choose Aaryan Sourcing as Your Apparel Partner
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Aaryan Sourcing is modernising sourcing with a transparent,
              ethical, and quality supply chain of Bangladeshi fashion experts
              in Dhaka. We are a premium, quality-conscious brand specializing
              in ethical clothing, fair trade & eco-friendly fashion, targeting
              the sustainable industry worldwide in an ethical workplace.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Aaryan Sourcing is the Premier South Asian source for green
              apparel manufacturing, fair-trade clothing manufacturing, and
              sustainable textiles production. We bring sourcing to life by
              partnering with a group of dedicated individuals who care deeply
              about the world.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {statsData.map((stat) => (
              <StatCard
                key={stat.label}
                imageUrl={stat.imageUrl}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAA;
