"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaDownload } from "react-icons/fa";
import AskAnyQuestionModal from "../../components/AskAnyQuestionModal";

const ResourceGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openContactModal = () => setIsModalOpen(true);
  const handleOpenPdf = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <Link href="/lookbook" className="flex flex-col flex-grow">
            <div className="relative w-full aspect-video">
              <Image
                src="https://i.ibb.co/dwqjG5qC/Online-Lookbook-Discover-Trendy-Fashion-and-Style-Inspiration.jpg"
                alt="Online Lookbook"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">Online Lookbook</h3>
            <p className="text-gray-600 flex-grow">
              Discover Trendy Fashion and Style Inspiration
            </p>
          </Link>
          <button
            onClick={() =>
              handleOpenPdf("/LookBook-Image/aaryansourcingcatalogue.pdf")
            }
            className="mt-4 mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 py-2 px-6 rounded-md flex items-center gap-2"
          >
            <FaEye /> View
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <Link href="/colors" className="flex flex-col flex-grow">
            <div className="relative w-full aspect-video">
              <Image
                src="https://i.ibb.co/dwHJ5f5M/Color-Palette-Collection-for-Home-Design-and-Decoration-Inspiration.jpg"
                alt="Colour Card"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">Colour Card</h3>
            <p className="text-gray-600 flex-grow">
              Color Palette Collection for Home Design and Decoration
              Inspiration
            </p>
          </Link>
          <button
            onClick={() => handleOpenPdf("/LookBook-Image/PantonBook.pdf")}
            className="mt-4 mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 py-2 px-6 rounded-md flex items-center gap-2"
          >
            <FaEye /> View
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <Link href="/printingembroidery" className="flex flex-col flex-grow">
            <div className="relative w-full aspect-video">
              <Image
                src="https://i.ibb.co/W4x92LqD/printing-embroidery-options.jpg"
                alt="Printing & Embroidery"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">
              Printing & Embroidery
            </h3>
            <p className="text-gray-600 flex-grow">
              Custom Print and Embroidery Services for Apparel and Merchandise
            </p>
          </Link>
          <button
            onClick={() => handleOpenPdf("/LookBook-Image/printembroider.pdf")}
            className="mt-4 mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 py-2 px-6 rounded-md flex items-center gap-2"
          >
            <FaEye /> View
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <div className="relative w-full aspect-video">
            <Image
              src="https://i.ibb.co/CKrd0M8R/Premium-Coat-Hangers-for-Home-and-Closet-Organization.jpg"
              alt="Coat Hangers"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold mt-3">Coat Hangers</h3>
          <p className="text-gray-600 flex-grow">
            Premium Coat Hangers for Home and Closet Organization
          </p>
          <button
            onClick={openContactModal}
            className="mt-4 mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 py-2 px-6 rounded-md flex items-center gap-2"
          >
            <FaEye /> View
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <div>
            <Link href="/sizechartpage" className="flex flex-col flex-grow">
              <div className="relative w-full aspect-video">
                <Image
                  src="https://i.ibb.co/6cgvVmM5/Apparel-Size-Chart-Accurate-Measurement-Guide-for-Perfect-Fit.jpg"
                  alt="Size Charts"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mt-3">Size Charts</h3>
              <p className="text-gray-600 flex-grow">
                Apparel Size Chart – Accurate Measurement Guide for Perfect Fit
              </p>
            </Link>

            <div className="flex justify-center items-center">
              <Link
                href="/Sizechart"
                className="mt-4 self-start bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 py-2 px-6 rounded-md flex items-center gap-2 transition-colors"
              >
                <FaEye /> View
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <div className="relative w-full aspect-video">
            <Image
              src="https://i.ibb.co/Q2wB13W/product-sheets.webp"
              alt="Product Sheets"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold mt-3">Product Sheets</h3>
          <p className="text-gray-600 flex-grow">
            Download detailed product sheets for our entire range.
          </p>

          <a
            href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/download-pdf/all-products`}
            download
            className="mt-4 mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 py-2 px-6 rounded-md flex items-center gap-2"
          >
            <FaDownload /> Download Product Data
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <Link href="/codeofconduct" className="flex flex-col flex-grow">
            <div className="relative w-full aspect-video">
              <Image
                src="https://i.ibb.co/BVgrksys/Global-Code-of-Conduct-for-Ethical-Business-Practices-and-Integrity.jpg"
                alt="Code Of Conduct"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">Code Of Conduct</h3>
            <p className="text-gray-600 flex-grow">
              Global Code of Conduct for Ethical Business Practices and
              Integrity
            </p>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform">
          <Link href="/FabricShowcase" className="flex flex-col flex-grow">
            <div className="relative w-full aspect-video">
              <Image
                src="https://i.ibb.co/xK3SBqm9/Types-of-Fabric-Guide-to-Popular-Materials-for-Apparel.jpg"
                alt="Type of Fabric"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">Type of Fabric</h3>
            <p className="text-gray-600 flex-grow">
              Types of Fabric Guide to Popular Materials for Apparel
            </p>
          </Link>
        </div>
      </div>
      <AskAnyQuestionModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default ResourceGrid;
