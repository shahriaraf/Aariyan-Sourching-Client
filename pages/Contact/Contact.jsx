"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";
import CommonBanner from "../../components/CommonBanner";

const SocialLink = ({ icon, href = "#" }) => (
  <a
    href={href}
    className="inline-flex justify-center items-center w-10 h-10 bg-gray-100 text-gray-500 hover:bg-[#f5b750] hover:text-black "
  >
    {icon}
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    status: "idle",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ status: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ status: "success", message: data.message });
        // Reset form after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus({
          status: "error",
          message: data.error || "Something went wrong.",
        });
      }
    } catch (error) {
      setFormStatus({
        status: "error",
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="bg-white font-roboto text-gray-600">
      <CommonBanner
        backgroundImage={"/contact.jpg"}
        breadcrumb={"Contact"}
      ></CommonBanner>
      <main className="overflow-x-hidden">
        <section className="py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-2">
            <div className="flex flex-col gap-10 lg:gap-16 lg:flex-row">
              <div className="lg:w-1/2 lg:pr-8">
                <h2 className="font-poppins text-3xl font-semibold text-gray-800 mb-4">
                  Lets get in touch
                </h2>
                <p className="leading-relaxed mb-8 text-gray-500">
                  Aaryan Sourcing is a trustworthy name in the business of
                  global apparel manufacturing and sourcing, with tailored
                  services that best suit your business. With many years of
                  experience, we are one of the leading businesses in connecting
                  trade partners & offering only the best quality supplies at
                  the lowest possible prices available. Aaryan Sourcing provides
                  easy and professional assistance worldwide (Be it by email,
                  phone, or chat) in finding product sourcing services in
                  Bangladesh, Europe, South America, or the USA. Dedicated to
                  serving our clients, we work directly with them to construct
                  cost-effective and tailored solutions. Contact Aaryan Sourcing
                  today for all your sourcing requirements and get access to the
                  best suppliers around the world. Trust us for expert sourcing
                  of your business processes and increasing profitability. Try
                  one of our products to see the result. Contact us today for
                  dependable assistance and specialist advice.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start">
                    <FaChevronRight className="text-[#f5b750] mr-3 mt-1 flex-shrink-0" />
                    <Link
                      href="/service"
                      className="text-gray-800 font-medium hover:text-[#f5b750] hover:underline"
                    >
                      Learn more about our apparel services
                    </Link>
                  </div>
                  <div className="flex items-start">
                    <FaChevronRight className="text-[#f5b750] mr-3 mt-1 flex-shrink-0" />
                    <Link
                      href="/profile"
                      className="text-gray-800 font-medium hover:text-[#f5b750] hover:underline"
                    >
                      Check out our company profile for more information
                    </Link>
                  </div>
                  <div className="flex items-start">
                    <FaChevronRight className="text-[#f5b750] mr-3 mt-1 flex-shrink-0" />
                    <Link
                      href="/Sustainability"
                      className="text-gray-800 font-medium hover:text-[#f5b750] hover:underline"
                    >
                      Explore our sustainability practices and how we reduce
                      environmental impact
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                    <div className="flex items-start">
                      <div className="text-xl text-gray-800 mr-5 w-5 text-center pt-1">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <strong className="block font-medium text-gray-800 leading-tight">
                          House #19, Road #07, Flat #5-A, Sector #10,
                        </strong>
                        <strong className="block font-medium text-gray-800 leading-tight">
                          Uttara Model Town, Dhaka -1230,
                        </strong>
                        <strong className="block font-medium text-gray-800 leading-tight">
                          Bangladesh
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="flex items-start mb-6">
                      <div className="text-xl text-gray-800 mr-5 w-5 text-center pt-1">
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <a
                          href="tel:+8801713117849"
                          className="block font-medium text-gray-800 leading-tight hover:text-[#f5b750]"
                        >
                          +8801713117849
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-xl text-gray-800 mr-5 w-5 text-center pt-1">
                        <FaEnvelope />
                      </div>
                      <div>
                        <a
                          href="mailto:aaryansourcing@gmail.com"
                          className="block font-medium text-gray-800 leading-tight hover:text-[#f5b750]"
                        >
                          aaryansourcing@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2.5 mt-8">
                  <SocialLink icon={<FaFacebookF />} />
                  <SocialLink icon={<FaTwitter />} />
                  <SocialLink icon={<FaInstagram />} />
                  <SocialLink icon={<FaLinkedinIn />} />
                </div>
              </div>

              <div
                className="lg:w-[45%] bg-[#f5b750] p-8 relative z-10 lg:mb-[-200px] overflow-hidden
                                            before:content-[''] before:absolute before:w-64 before:h-60 before:bg-white/20 before:rotate-24 before:-top-28 before:-right-20"
              >
                <h2 className="font-poppins text-4xl font-bold text-gray-800 mb-2">
                  Contact Us
                </h2>
                <p className="text-gray-800/90 mb-8 text-sm">
                  please feel free to to contact us, our customer support will
                  be happy to help you.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-white border-0 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e4a83c]"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-white border-0 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e4a83c]"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 bg-white border-0 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e4a83c]"
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 bg-white border-0 text-sm resize-none h-32 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e4a83c]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus.status === "loading"}
                    className="bg-[#333] text-white font-medium py-[15px] px-8 hover:bg-[#222] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {formStatus.status === "loading"
                      ? "Submitting..."
                      : "Submit"}
                  </button>

                  {/* --- Form status messages --- */}
                  {formStatus.status === "success" && (
                    <p className="mt-4 text-sm font-medium text-green-800 bg-green-100 p-3 rounded">
                      {formStatus.message}
                    </p>
                  )}
                  {formStatus.status === "error" && (
                    <p className="mt-4 text-sm font-medium text-red-800 bg-red-100 p-3 rounded">
                      {formStatus.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[600px]">
          <div className="absolute inset-0 bg-white/50 flex justify-center items-center pointer-events-none">
            <h2 className="font-poppins font-bold text-[7vw] md:text-[120px] text-[#e9e9e9] tracking-[15px] opacity-80 leading-none">
              CONTACT US
            </h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.455243178044!2d90.3929450759325!3d23.87343608428801!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4323d00b177%3A0x25f828a2c2065f4c!2sH-19%2C%20R-7%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1716298542918!5m2!1sen!2sbd"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default Contact;
