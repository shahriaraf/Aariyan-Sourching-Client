"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import {
  BsTag,
  BsPerson,
  BsBuilding,
  BsEnvelope,
  BsTelephone,
  BsGlobe,
  BsGeoAlt,
  BsCalendar,
  BsCreditCard,
  BsCloudUpload,
  BsChatDots,
  BsSend,
} from "react-icons/bs";
import { GiTShirt } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";

const OrderPage = () => {
  const adultSizes = ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];
  const youthSizes = [
    "0-2Y",
    "2Y-4Y",
    "4Y-6Y",
    "6Y-8Y",
    "8Y-10Y",
    "10Y-12Y",
    "12Y-14Y",
  ];

  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const recaptchaRef = useRef(null);

  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm({
    defaultValues: {
      styleNumber: "AASLTD-MST-04",
      ...adultSizes.reduce((acc, size) => ({ ...acc, [`adult-${size}`]: "0" }), {}),
      ...youthSizes.reduce((acc, size) => ({ ...acc, [`youth-${size}`]: "0" }), {}),
    },
  });

  const { user } = useAuth();
  const ADMIN_EMAIL = "noorjahanmeem220@gmail.com";

  const uploadImage = async (file) => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("image", file);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/upload-order-image`;
      const res = await fetch(apiUrl, { method: "POST", body: formData });
      if (!res.ok) throw new Error(`Server responded with status: ${res.status}`);
      const data = await res.json();
      if (data.success) return data.imageUrl;
      throw new Error(data.message || "Backend failed to save the image.");
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed. Please try again.");
      return null;
    }
  };

  const onSubmit = async (data) => {
    if (!user) return toast.error("Please log in to place an order.");

    const captchaToken = recaptchaRef.current.getValue();
    if (!captchaToken) return toast.error("Please complete the CAPTCHA verification.");

    const uploadToast = toast.loading("Uploading images...");
    const [primaryUrl, secondaryUrl] = await Promise.all([
      uploadImage(primaryImage),
      uploadImage(secondaryImage),
    ]);
    toast.dismiss(uploadToast);

    if ((primaryImage && !primaryUrl) || (secondaryImage && !secondaryUrl)) {
      return toast.error("An image failed to upload. Please try again.");
    }

    const orderData = {
      styleNumber: data.styleNumber,
      name: data.name,
      company: data.companyName,
      email: user.email,
      phone: data.phoneNumber,
      website: data.webURL,
      address: data.mailingAddress,
      adultSizes: adultSizes.reduce((acc, size) => {
        acc[size] = data[`adult-${size}`];
        return acc;
      }, {}),
      youthSizes: youthSizes.reduce((acc, size) => {
        acc[size] = data[`youth-${size}`];
        return acc;
      }, {}),
      deliveryTime: data.date,
      paymentMethods: Array.isArray(data.paymentMethod)
        ? data.paymentMethod.filter(Boolean)
        : data.paymentMethod
        ? [data.paymentMethod]
        : [],
      message: data.message,
      primaryImage: primaryUrl,
      secondaryImage: secondaryUrl,
      orderBy: user.uid,
      captchaToken: captchaToken,
    };

    try {
      const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!orderRes.ok) {
        const contentType = orderRes.headers.get("content-type");
        let errorMessage = `Server responded with status: ${orderRes.status}`;
        if (contentType && contentType.includes("application/json")) {
          const errorResult = await orderRes.json();
          errorMessage = errorResult.message || errorMessage;
          if (errorMessage.toLowerCase().includes("captcha")) recaptchaRef.current.reset();
        }
        return toast.error(errorMessage);
      }

      toast.success("Order submitted successfully!");

      try {
        const emailPayload = {
          userName: orderData.name,
          userEmail: orderData.email,
          adminEmail: ADMIN_EMAIL,
          orderInfo: {
            styleNumber: orderData.styleNumber,
            company: orderData.company,
          },
        };
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/send-order-emails`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailPayload),
        });
      } catch (emailError) {
        console.error("Failed to trigger email notification:", emailError);
        toast.error("Order submitted, but email notification failed.");
      }

      reset();
      setPrimaryImage(null);
      setSecondaryImage(null);
      recaptchaRef.current.reset();

    } catch (error) {
      console.error("Order submission error:", error);
      toast.error("Something went wrong. Please check your connection.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-6xl p-6 mx-auto bg-white border border-gray-300 sm:p-8 md:p-10">
        <header className="mb-8 text-center">
          <h1 className="flex items-center justify-center text-2xl font-bold text-gray-800 md:text-3xl">
            <GiTShirt className="mr-3 text-3xl text-gray-700 md:text-4xl" />
            Place Your Order
          </h1>
        </header>

        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4 rounded-lg bg-blue-50 sm:p-6">
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsTag className="text-blue-500" />
              <span className="ml-2">Style Number</span>
            </label>
            <input
              type="text"
              {...register("styleNumber")}
              className="w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsPerson className="text-purple-500" />
                <span className="ml-2">Your Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                defaultValue={user?.displayName || ""}
                type="text"
                className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsBuilding className="text-green-500" />
                <span className="ml-2">Company Name</span>
              </label>
              <input
                {...register("companyName")}
                type="text"
                className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsEnvelope className="text-red-500" />
                <span className="ml-2">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                value={user?.email || ""}
                readOnly
                disabled
                className="w-full px-3 py-2 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded-lg"
              />
            </div>
            <div>
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsTelephone className="text-yellow-500" />
                <span className="ml-2">Phone Number</span>
              </label>
              <input
                {...register("phoneNumber", { required: true })}
                type="tel"
                className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsGlobe className="text-blue-500" />
                <span className="ml-2">Website URL</span>
              </label>
              <input
                {...register("webURL")}
                type="text"
                className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsGeoAlt className="text-pink-500" />
                <span className="ml-2">Mailing Address</span>
              </label>
              <input
                {...register("mailingAddress")}
                type="text"
                className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 sm:p-6">
            <h2 className="flex items-center mb-4 text-base font-semibold text-gray-800 md:text-lg">
              <GiTShirt className="mr-2 text-xl text-green-500" />
              Adult Sizes & Quantity
            </h2>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
              {adultSizes.map((size) => (
                <div key={size} className="text-center">
                  <label className="text-sm font-medium text-gray-500">{size}</label>
                  <input
                    {...register(`adult-${size}`)}
                    type="number"
                    min="0"
                    className="w-full px-2 py-2 mt-1 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 sm:p-6">
            <h2 className="flex items-center mb-4 text-base font-semibold text-gray-800 md:text-lg">
              <span className="mr-2 text-xl">😊</span>
              Youth Sizes & Quantity
            </h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
              {youthSizes.map((size) => (
                <div key={size} className="text-center">
                  <label className="text-sm font-medium text-gray-500">{size}</label>
                  <input
                    {...register(`youth-${size}`)}
                    type="number"
                    min="0"
                    className="w-full px-2 py-2 mt-1 text-sm text-center text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-purple-50 sm:p-6">
              <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
                <BsCalendar className="text-purple-500" />
                <span className="ml-2">Expected Delivery Time</span>
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                className="w-full px-3 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="p-4 rounded-lg bg-cyan-50 sm:p-6">
              <label className="flex items-center mb-2.5 text-sm text-gray-600 font-medium">
                <BsCreditCard className="text-blue-500" />
                <span className="ml-2">Payment Methods</span>
              </label>
              <div className="mt-4 space-y-3">
                {["At Sight L/C", "T/T", "Western Union"].map((method) => (
                  <div key={method} className="flex items-center">
                    <input
                      {...register("paymentMethod")}
                      type="checkbox"
                      value={method}
                      id={method}
                      className="w-4 h-4 bg-white border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor={method} className="ml-3 text-sm text-gray-700">{method}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[{ image: primaryImage, set: setPrimaryImage, label: "Primary Image" },
              { image: secondaryImage, set: setSecondaryImage, label: "Secondary Image" }]
              .map((item, idx) => (
              <label key={idx} className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer h-40 sm:h-36 hover:bg-gray-50">
                <BsCloudUpload className="w-8 h-8 text-gray-400" />
                {item.image ? (
                  <p className="mt-2 text-sm font-medium text-green-600 break-all">
                    Selected: {item.image.name}
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">
                    <span className="font-semibold text-blue-600">Click to upload</span> {item.label}
                  </p>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => item.set(e.target.files[0])}
                  className="hidden"
                />
              </label>
            ))}
          </div>
          <div>
            <label className="flex items-center mb-1.5 text-sm text-gray-600 font-medium">
              <BsChatDots className="text-red-400" />
              <span className="ml-2">Additional Message</span>
            </label>
            <textarea
              {...register("message")}
              rows="4"
              placeholder="Enter any special instructions or comments here..."
              className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-100 rounded-lg">
            <h3 className="flex items-center justify-center mb-4 text-sm font-semibold text-gray-700">
              <span className="mr-2">🤖</span> CAPTCHA Verification
            </h3>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />
          </div>
          <div className="pt-4 text-center">
            <button
              type="submit"
              disabled={!user || isSubmitting}
              className="inline-flex items-center justify-center w-full px-8 py-3 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg sm:w-auto hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <BsSend className="w-5 h-5 mr-2" />
              {isSubmitting ? "Placing Order..." : "Place Order Now"}
            </button>
            {!user && (
              <p className="mt-4 text-sm text-red-500">
                You must be logged in to place an order.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
