"use client";
import { useState } from "react";
import CommonBanner from "../components/CommonBanner";


const ChevronDownIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className={`w-5 h-5 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default function SizeChartPage() {
  const [activeMainCategory, setActiveMainCategory] = useState("hoodie");
  const [activeChartId, setActiveChartId] = useState("boysGirlsHoodie");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sizeCharts = {
    boysGirlsHoodie: { image: "/size-charts/Boys&GirlsHoodie.jpg" },
    womenHoodie: { image: "/size-charts/womenHoodie.jpg" },
    menHoodie: { image: "/size-charts/MenHoodie.jpg" },
    menPuffyJacket: { image: "/size-charts/menPuffyJacket.jpg" },
    menJacket: { image: "/size-charts/menJacket.jpg" },
    menPuffyVest: { image: "/size-charts/menPuffyVest.jpg" },
    ladiesPuffyJackets: { image: "/size-charts/ladiesPuffyJackets.jpg" },
    ladiesVestSizing: { image: "/size-charts/ladiesVestSizing.jpg" },
    ladiesWovenJacket: { image: "/size-charts/ladiesWovenJacket.jpg" },
    "boys&GirlsDenim": { image: "/size-charts/boys&GirlsDenim.jpg" },
    menJeans: { image: "/size-charts/menJeans.jpg" },
    ladiesJeans: { image: "/size-charts/ladiesJeans.jpg" },
    menTrouser: { image: "/size-charts/menTrouser.jpg" },
    menLongSleeveShirt: { image: "/size-charts/menLongSleeveShirt.jpg" },
    menShortSleeveShirt: { image: "/size-charts/menShortSleeveShirt.jpg" },
    womenLongSleeveShirt: { image: "/size-charts/womenLongSleeveShirt.jpg" },
    womenShortSleeveShirt: { image: "/size-charts/womenShortSleeveShirt.jpg" },
    "boys&GirlsShirt": { image: "/size-charts/boys&GirlsShirt.jpg" },
    menCargoShorts: { image: "/size-charts/menCargoShorts.jpg" },
    menSwimmingShorts: { image: "/size-charts/menSwimmingShorts.jpg" },
    womenShorts: { image: "/size-charts/womenShorts.jpg" },
    menBoxerShorts: { image: "/size-charts/menBoxerShorts.jpg" },
    babyRomper: { image: "/size-charts/babyRomper.jpg" },
    sweaterBoysGirls: { image: "/size-charts/sweaterBoysGirls.jpg" },
    menCrewNeckSweater: { image: "/size-charts/menCrewNeckSweater.jpg" },
    menVestSweater: { image: "/size-charts/menVestSweater.jpg" },
    menVNeckCardiganSweater: {
      image: "/size-charts/menVNeckCardiganSweater.jpg",
    },
    vneckCardiganWomenSweater: {
      image: "/size-charts/vneckCardiganWomenSweater.jpg",
    },
    womenCrewNeckSweater: { image: "/size-charts/womenCrewNeckSweater.jpg" },
    menLongSleevePoloShirt: {
      image: "/size-charts/menLongSleevePoloShirt.jpg",
    },
    menShortSleevePoloShirt: {
      image: "/size-charts/menShortSleevePoloShirt.png",
    },
    womenLongSleevePoloShirt: {
      image: "/size-charts/womenLongSleevePoloShirt.jpg",
    },
    womenShortSleevedPoloShirt: {
      image: "/size-charts/womenShortSleevedPoloShirt.jpg",
    },
    BoyGirlPolo: { image: "/size-charts/BoyGirlPolo.jpg" },
    menVNeckTShirt: { image: "/size-charts/menVNeckTShirt.jpg" },
    menTankTopSize: { image: "/size-charts/menTankTopSize.jpg" },
    VNeckMenTShirt: { image: "/size-charts/VNeckMenTShirt.jpg" },
    menLongSleeveTShirt: { image: "/size-charts/menLongSleeveT-Shirt.jpg" },
    womenTankTops: { image: "/size-charts/womenTankTops.jpg" },
    womenCrewNeckTShirt: { image: "/size-charts/womenCrewNeckT-Shirt.jpg" },
    womenFullSleeveTShirt: { image: "/size-charts/womenFullSleeveT-Shirt.jpg" },
    womenRoundNeckTShirt: { image: "/size-charts/womenRoundNeckT-Shirt.jpg" },
    BoysGirlsTShirt: { image: "/size-charts/BoysGirlsT-Shirt.jpg" },
  };

  const categories = [
    {
      id: "hoodie",
      label: "Hoodie",
      subcategories: [
        { id: "boysGirlsHoodie", label: "Boys & Girls Hoodie" },
        { id: "womenHoodie", label: "Women's Hoodie" },
        { id: "menHoodie", label: "Men's Hoodie" },
      ],
    },
    {
      id: "jacket-vest",
      label: "Jacket & Vest",
      subcategories: [
        { id: "menPuffyJacket", label: "Men Puffy Jacket" },
        { id: "menJacket", label: "Men Jacket" },
        { id: "menPuffyVest", label: "Men Puffy Vest" },
        { id: "ladiesPuffyJackets", label: "Ladies Puffy Jackets" },
        { id: "ladiesVestSizing", label: "Ladies Vest Sizing" },
        { id: "ladiesWovenJacket", label: "Ladies Woven Jacket" },
      ],
    },
    {
      id: "jeans-trouser",
      label: "Jeans & Trouser",
      subcategories: [
        { id: "boys&GirlsDenim", label: "Boys & Girls Denim" },
        { id: "menJeans", label: "Men Jeans" },
        { id: "ladiesJeans", label: "Ladies Jeans" },
        { id: "menTrouser", label: "Men Trouser" },
      ],
    },
    {
      id: "shirts",
      label: "Shirts",
      subcategories: [
        { id: "menLongSleeveShirt", label: "Men Long Sleeve Shirt" },
        { id: "menShortSleeveShirt", label: "Men Short Sleeve Shirt" },
        { id: "womenLongSleeveShirt", label: "Women Long Sleeve Shirt" },
        { id: "womenShortSleeveShirt", label: "Women Short Sleeve Shirt" },
        { id: "boys&GirlsShirt", label: "Boys & Girls Shirt" },
      ],
    },
    {
      id: "shorts",
      label: "Shorts",
      subcategories: [
        { id: "menCargoShorts", label: "Men's Cargo Shorts" },
        { id: "menSwimmingShorts", label: "Men's Swimming Shorts" },
        { id: "menBoxerShorts", label: "Men's Boxer Shorts" },
        { id: "womenShorts", label: "Women's Shorts" },
      ],
    },
    {
      id: "sweater",
      label: "Sweater",
      subcategories: [
        { id: "sweaterBoysGirls", label: "Sweater Boys & Girls" },
        { id: "menCrewNeckSweater", label: "Men Crew Neck Sweater" },
        { id: "menVestSweater", label: "Men Vest Sweater" },
        { id: "menVNeckCardiganSweater", label: "Men V-Neck Cardigan Sweater" },
        {
          id: "vneckCardiganWomenSweater",
          label: "V-neck Cardigan Women Sweater",
        },
        { id: "womenCrewNeckSweater", label: "Women's Crew Neck Sweater" },
      ],
    },
    {
      id: "t shirt & polo",
      label: "T-Shirt & Polo",
      subcategories: [
        { id: "menLongSleevePoloShirt", label: "Men's Long Sleeve Polo-Shirt" },
        {
          id: "menShortSleevePoloShirt",
          label: "Men's Short Sleeve Polo-Shirt",
        },
        {
          id: "womenLongSleevePoloShirt",
          label: "Women's Long Sleeve Polo-Shirt",
        },
        {
          id: "womenShortSleevedPoloShirt",
          label: "Women's Short Sleeved Polo-Shirt",
        },
        { id: "BoyGirlPolo", label: "Boys & Girls Polo T-Shirt" },
        { id: "menVNeckTShirt", label: "Men's V-Neck T-Shirt" },
        { id: "menTankTopSize", label: "Men's Tank Top Size" },
        { id: "VNeckMenTShirt", label: "V-Neck Men's T-Shirt" },
        { id: "menLongSleeveTShirt", label: "Men's Long Sleeve T-Shirt" },
        { id: "womenTankTops", label: "Women's Tank Tops" },
        { id: "womenCrewNeckTShirt", label: "Women's Crew Neck T-Shirt" },
        { id: "womenRoundNeckTShirt", label: "Women's Round Neck T-Shirt" },
        { id: "womenFullSleeveTShirt", label: "Women's Full Sleeve T-Shirt" },
        { id: "BoysGirlsTShirt", label: "Boys & Girls T-Shirt" },
      ],
    },
    {
      id: "baby",
      label: "Baby",
      subcategories: [{ id: "babyRomper", label: "Baby Romper" }],
    },
  ];

  const handleCategoryClick = (category) => {
    const newActive = activeMainCategory === category.id ? null : category.id;
    setActiveMainCategory(newActive);
    if (newActive && category.subcategories?.length) {
      setActiveChartId(category.subcategories[0].id);
    }
  };

  const handleSubcategoryClick = (subId) => {
    setActiveChartId(subId);
    setIsSidebarOpen(false);
  };

  const currentChart = sizeCharts[activeChartId];

  const Sidebar = () => (
    <div className="space-y-2">
      {categories.map((category) => {
        const isOpen = activeMainCategory === category.id;
        return (
          <div
            key={category.id}
            className="border-b border-gray-200 last:border-0"
          >
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full flex justify-between items-center py-3 px-4 text-left bg-white hover:bg-gray-50 transition-colors rounded-lg"
            >
              <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                {category.label}
              </span>
              {category.subcategories && <ChevronDownIcon isOpen={isOpen} />}
            </button>

            {isOpen && category.subcategories && (
              <div className="pb-2 space-y-1">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubcategoryClick(sub.id)}
                    className={`w-full text-left py-2.5 px-8 text-sm transition-all rounded-lg ${
                      activeChartId === sub.id
                        ? "bg-yellow-50 text-yellow-700 font-semibold border-l-4 border-yellow-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className=" bg-gray-50">
      <CommonBanner
        backgroundImage={"/size-charts/bg.jpg"}
        breadcrumb={"Size Chart"}
      />
      <div className="max-w-6xl mx-auto px-4 lg:px-2 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-gray-700">
                {categories.find((c) => c.id === activeMainCategory)?.label ||
                  "Select Category"}
              </span>
              <ChevronDownIcon isOpen={isSidebarOpen} />
            </button>

            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-[#00000052] bg-opacity-50 z-40"
                onClick={() => setIsSidebarOpen(false)}
              >
                <div
                  className="absolute top-0 left-0 right-0 bg-white max-h-[80vh] overflow-y-auto shadow-xl rounded-b-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-gray-800">
                        Categories
                      </h2>
                      <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <Sidebar />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-yellow-500">
                Categories
              </h2>
              <Sidebar />
            </div>
          </aside>

          {/* Chart Display */}
          <main className="flex-1 min-w-0">
            {currentChart ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex justify-center items-center">
                    <img
                      src={currentChart.image}
                      alt="Size chart"
                      className="max-w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 flex flex-col items-center justify-center min-h-96">
                <svg
                  className="w-24 h-24 text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-gray-500 text-lg text-center">
                  Select a category to view the size chart
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
