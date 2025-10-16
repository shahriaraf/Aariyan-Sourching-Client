import HappyCustomer from "./ HappyCustomer";
import ProgressBar from "./ProgressBar";
const skills = [
  { name: "R&D And Product Development", percentage: "100%" },
  { name: "On Time Delivery", percentage: "100%" },
  { name: "Fast Response & Sample Submission", percentage: "100%" },
  { name: "Quality Standard 2.5 AQL", percentage: "100%" },
];
const AtAGlance = () => {
  return (
    <section className="bg-white py-5 sm:py-5 mb-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-wider uppercase text-gray-800">
              AT A GLANCE
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Linking worldwide wholesalers with reliable garment manufacturers
              throughout Asia, Aaryan Sourcing. Provides professional wholesale
              apparel sourcing services. We guarantee quality, efficiency, and
              dependability at every stage of your supply chain.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5 lg:pl-8 lg:border-l lg:border-gray-200">
            <div className="space-y-8">
              {skills.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          <HappyCustomer />
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;
