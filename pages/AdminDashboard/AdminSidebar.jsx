import Link from "next/link";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronDown,
  FaTimes,
  FaTachometerAlt,
  FaFileAlt,
  FaBoxOpen,
  FaCogs,
  FaClipboardList,
  FaUsers,
  FaBlog,
  FaComments,
  FaExchangeAlt,
  FaUserCog,
} from "react-icons/fa";

const logo = "/logo.png";

const defaultNavItems = [
  { name: "Dashboard", icon: FaTachometerAlt },
  {
    name: "Pages",
    icon: FaFileAlt,
    children: [{ name: "Home" }, ],
  },
  {
    name: "Products",
    icon: FaBoxOpen,
    children: [{ name: "All Products" }, { name: "Add Product" }],
  },
  {
    name: "Product Management",
    icon: FaCogs,
    children: [
      { name: "Product Category" },
      { name: "Product Sub Category" },
      { name: "Product Color" },
      { name: "Product Fit" },
      { name: "Product Size " },
      { name: "Product Brand" },
    ],
  },
  { name: "Orders", icon: FaClipboardList, children: [{ name: "All Orders" }] },
  {
    name: "Staff & Users",
    icon: FaUsers,
    children: [{ name: "Staff" }, { name: "Add Staff" }, { name: "Users" }],
  },
  {
    name: "Blogs",
    icon: FaBlog,
    children: [
      { name: "All Blogs" },
      { name: "Add Blogs" },
      { name: "Blog Category" },
    ],
  },
  {
    name: "Communication",
    icon: FaComments,
    children: [{ name: "Messages" }, { name: "News Letter" }],
  },
  {
    name: "Payments",
    icon: FaExchangeAlt,
    children: [{ name: "Transactions" }, { name: "Payment Gateway" }],
  },
  {
    name: "Account & Settings",
    icon: FaUserCog,
    children: [{ name: "My Account" }],
  },
];

export default function AdminSidebar({
  activeTab,
  handleMainMenuClick,
  openDropdowns = {},
  isSidebarOpen,
  setIsSidebarOpen,
  isLgSidebarExpanded,
  setIsLgSidebarExpanded,
  visibleNavItems = defaultNavItems,
}) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex-shrink-0 pt-4 overflow-y-auto no-scrollbar bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out w-72 lg:w-20 ${
        isLgSidebarExpanded ? "lg:w-72" : ""
      } ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0`}
    >
      {!isLgSidebarExpanded && (
        <div className="hidden lg:flex items-center justify-center h-[65px] border-b border-gray-200">
          <button
            onClick={() => setIsLgSidebarExpanded(true)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <FaBoxOpen className="w-6 h-6" />
          </button>
        </div>
      )}

      {(isLgSidebarExpanded || isSidebarOpen) && (
        <div className="flex items-center justify-between border-b border-gray-200 h-[65px] px-4">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsLgSidebarExpanded(false)}
              className="hidden lg:block p-1 text-gray-600 hover:text-gray-900"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
      <nav className="py-4">
        <ul>
          {visibleNavItems.map((item) => (
            <li key={item.name} className="px-4">
              <button
                onClick={() => handleMainMenuClick(item)}
                className={`w-full text-left rounded-lg p-3 my-1 flex items-center justify-between gap-4 transition-colors ${
                  activeTab === item.name && !item.children
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                } ${openDropdowns[item.name] ? "bg-gray-100" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <span
                    className={`text-gray-800 transition-opacity duration-200 whitespace-nowrap ${
                      !isLgSidebarExpanded && !isSidebarOpen
                        ? "lg:opacity-0 lg:hidden"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                {item.children && (
                  <FaChevronDown
                    className={`w-5 h-5 text-gray-500 transition-all duration-300 ${
                      openDropdowns[item.name] ? "rotate-180" : ""
                    } ${
                      !isLgSidebarExpanded && !isSidebarOpen
                        ? "lg:opacity-0 lg:hidden"
                        : ""
                    }`}
                  />
                )}
              </button>
              {item.children && openDropdowns[item.name] && (
                <ul
                  className={`pl-8 transition-all duration-300 ease-in-out ${
                    !isLgSidebarExpanded && !isSidebarOpen ? "lg:hidden" : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <button
                        onClick={() => handleMainMenuClick(child)}
                        className={`w-full text-left py-2 px-3 my-1 rounded-md text-sm flex items-center gap-4 transition-colors ${
                          activeTab === child.name
                            ? "bg-gray-200 font-semibold text-gray-900"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {child.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
