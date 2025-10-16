import NewsletterForm from "../../components/NewsletterForm";

const Newsletter = () => {
  const img_1 = "/newsletter.jpg";
  return (
    <section
      className="bg-gray-300 py-20"
      style={{
        backgroundImage: `url(${img_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-4">
          Join Our Newsletter
        </h2>

        <p className="text-white max-w-xl mx-auto mb-10">
          Sign up to receive the latest promotional information and get a 20%
          discount on the first online payment
        </p>
        <NewsletterForm/>
      </div>
    </section>
  );
};

export default Newsletter;
