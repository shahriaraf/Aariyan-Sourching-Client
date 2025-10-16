"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {

      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_ALL;

      const res = await axios.post(`${baseUrl}post-newsletter`, {
        email: data.email,
      });

      if ( res.data?.acknowledged) {
        toast.success('email sent succssfully',{
          duration : 2000
        })
        reset(); 
      } else {
        console.error("Submission failed:", res.statusText);
        toast.error('something went wrong')
      }
    } catch (error) {
      console.error("Error submitting email:", error);
              toast.error(error?.response?.data?.message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center bg-gray-700 max-w-md mx-auto rounded-full p-1">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full bg-transparent text-white placeholder-gray-300 px-5 py-2 focus:outline-none"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-yellow-500 text-white font-semibold text-sm w-[180px] flex justify-center items-center py-2 rounded-full transition-colors cursor-pointer ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-yellow-600"
          }`}
        >
          {isSubmitting ? 
          
          <FaSpinner></FaSpinner>: "SUBMIT"}
        </button>
      </div>

      {errors.email && (
        <p className="text-red-300 text-sm mt-2">{errors.email.message}</p>
      )}
    </form>
  );
};

export default NewsletterForm;