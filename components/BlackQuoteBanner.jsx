const BlackQuoteBanner = ({ quote }) => {
  return (
    <section className="bg-black px-4 lg:px-2 py-10 flex justify-center text-center text-lg capitalize font-semibold text-gray-100 my-4">
      <p>{quote}</p>
    </section>
  );
};

export default BlackQuoteBanner;