"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import io from "socket.io-client";
import useAuth from "../../Hooks/useAuth";
import useSingleUser from "../../Hooks/useSingleUser";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import AdminSidebar from "./AdminSidebar";
import DashboardMain from "./DashboardMain";
import DashboardContent from "./DashboardContent";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const DashboardIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);
const ProductsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);
const ProductManagementIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 20V10"></path>
    <path d="M18 20V4"></path>
    <path d="M6 20V16"></path>
  </svg>
);
const OrderIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);
const StaffUsersIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
const BlogsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2h-1"></path>
    <path d="M16 2v20"></path>
    <path d="M11 7h-2.5a1.5 1.5 0 0 1 0-3h1a1.5 1.5 0 0 1 0 3Z"></path>
  </svg>
);
const CommunicationIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const TransactionsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);
const AccountSettingsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const PageIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);
const sidebarNavItems = [
  { name: "Dashboard", icon: DashboardIcon },
  {
    name: "Pages",
    icon: PageIcon,
    children: [{ name: "Home" }, { name: "Size Guide" }],
  },
  {
    name: "Products",
    icon: ProductsIcon,
    children: [{ name: "All Products" }, { name: "Add Product" }],
  },
  {
    name: "Product Management",
    icon: ProductManagementIcon,
    children: [
      { name: "Product Category" },
      { name: "Product Sub Category" },
      { name: "Product Color" },
      { name: "Product Fit" },
      { name: "Product Size " },
      { name: "Product Brand" },
    ],
  },
  { name: "Orders", icon: OrderIcon, children: [{ name: "All Orders" }] },
  {
    name: "Staff & Users",
    icon: StaffUsersIcon,
    children: [{ name: "Staff" }, { name: "Add Staff" }, { name: "Users" }],
  },
  {
    name: "Blogs",
    icon: BlogsIcon,
    children: [
      { name: "All Blogs" },
      { name: "Add Blogs" },
      { name: "Blog Category" },
    ],
  },
  {
    name: "Communication",
    icon: CommunicationIcon,
    children: [{ name: "Messages" }, { name: "News Letter" }],
  },
  {
    name: "Payments",
    icon: TransactionsIcon,
    children: [{ name: "Transactions" }, { name: "Payment Gateway" }],
  },
  {
    name: "Account & Settings",
    icon: AccountSettingsIcon,
    children: [{ name: "My Account" }],
  },
];
export default function AdminDashboard({ UserData, allData, allOders }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLgSidebarExpanded, setIsLgSidebarExpanded] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [isStaffLoading, setIsStaffLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [isBlogsLoading, setIsBlogsLoading] = useState(true);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [categories, setCategories] = useState([]);

  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { loading: authLoading } = useAuth();
  const { singleUser } = useSingleUser();
  const socket = useRef(null);
  const addNotification = useCallback((newMessage) => {
    setNotifications((prev) => [newMessage, ...prev.slice(0, 4)]);
    toast.success(newMessage.title, { icon: "💬" });
  }, []);

  const handleNotificationClick = () => {
    setActiveTab("Messages");
    setNotifications([]);
    setShowNotifications(false);
  };
  const fetchBlogsAndCategories = useCallback(async () => {
    setIsBlogsLoading(true);
    try {
      const [blogsRes, categoriesRes] = await Promise.all([
        axiosSecure.get("/blogs"),
        axiosSecure.get("/categories"),
      ]);
      setBlogs(Array.isArray(blogsRes.data.blogs) ? blogsRes.data.blogs : []);
      setCategories(categoriesRes.data.map((cat) => cat.value || cat));
    } catch (error) {
      toast.error("Could not load blog data.");
      setBlogs([]);
    } finally {
      setIsBlogsLoading(false);
    }
  }, [axiosSecure]);

  const fetchStaff = useCallback(async () => {
    setIsStaffLoading(true);
    try {
      const response = await axiosSecure.get("/api/staff");
      setStaffList(response.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
      toast.error("Could not load staff data.");
    } finally {
      setIsStaffLoading(false);
    }
  }, [axiosSecure]);
  useEffect(() => {
    if (
      singleUser?._id &&
      (singleUser.role === "admin" || singleUser.role === "staff")
    ) {
      if (!socket.current) {
        socket.current = io(API_URL);
        socket.current.on("connect", () => {
          socket.current.emit("join", {
            userId: singleUser._id,
            role: singleUser.role,
          });
        });
      }
      const globalMessageListener = (incomingMessage) => {
        const customerName = incomingMessage.senderName || "A user";
        addNotification({
          id: incomingMessage._id || new Date().getTime(),
          title: `New message from ${customerName}`,
          content: incomingMessage.content,
        });
      };
      socket.current.on("newMessageForAdmin", globalMessageListener);
      return () => {
        if (socket.current) {
          socket.current.off("newMessageForAdmin", globalMessageListener);
        }
      };
    }
    return () => {
      if (socket.current) {
        socket.current.disconnect();
        socket.current = null;
      }
    };
  }, [singleUser, addNotification]);

  useEffect(() => {
    fetchStaff();
    fetchBlogsAndCategories();
  }, [fetchStaff, fetchBlogsAndCategories]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".notification-dropdown") &&
        !event.target.closest(".notification-button")
      ) {
        setShowNotifications(false);
      }
      if (
        !event.target.closest(".profile-dropdown") &&
        !event.target.closest(".profile-button")
      ) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleAddStaff = async (newStaffData) => {
    try {
      await axiosSecure.patch(`/api/users/${newStaffData.userId}/role`, {
        role: "staff",
        permissions: newStaffData.permissions,
      });
      fetchStaff();
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["promotableUsers"] });
      setActiveTab("Staff");
    } catch (error) {
      console.error("Promotion failed:", error);
      throw error;
    }
  };

  const handleDeleteStaff = (staffId, staffName) => {
    const demotePromise = axiosSecure.patch(`/api/users/${staffId}/role`, {
      role: "user",
      permissions: [],
    });
    toast.promise(demotePromise, {
      loading: `Demoting ${staffName}...`,
      success: () => {
        fetchStaff();
        queryClient.invalidateQueries({ queryKey: ["users"] });
        queryClient.invalidateQueries({ queryKey: ["promotableUsers"] });
        return `${staffName} demoted successfully.`;
      },
      error: "Failed to demote staff.",
    });
  };

  const handleFormSubmit = (submittedBlog, blogId) => {
    if (blogId) {
      setBlogs((prevBlogs) =>
        prevBlogs.map((b) => (b._id === blogId ? submittedBlog : b))
      );
    } else {
      setBlogs((prevBlogs) => [submittedBlog, ...prevBlogs]);
    }
    setActiveTab("All Blogs");
  };

  const handleEditBlog = (blog) => {
    setBlogToEdit(blog);
    setActiveTab("Add Blogs");
  };

  const handleCancelForm = () => {
    setBlogToEdit(null);
    setActiveTab("All Blogs");
  };

  const handleTabClick = (tabName) => {
    if (tabName === "Add Blogs") {
      setBlogToEdit(null);
    }
    setActiveTab(tabName);
    setIsSidebarOpen(false);
    setShowNotifications(false);
    setShowProfileMenu(false);
  };

  const handleMainMenuClick = (item) => {
    if (!isLgSidebarExpanded) {
      setIsLgSidebarExpanded(true);
    }
    if (item.children) {
      setOpenDropdowns((prev) => ({ ...prev, [item.name]: !prev[item.name] }));
    } else {
      handleTabClick(item.name);
    }
  };

  if (authLoading) return <LoadingSpinner />;
  const isSuperAdmin = singleUser && singleUser.role === "admin";
  if (!singleUser || (singleUser.role !== "staff" && !isSuperAdmin))
    return <LoadingSpinner />;
  const visibleNavItems = isSuperAdmin
    ? sidebarNavItems
    : sidebarNavItems.filter((item) =>
        singleUser.permissions.includes(item.name)
      );
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="relative flex flex-col lg:flex-row h-screen overflow-hidden">
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-[#00000075] bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
          <AdminSidebar
            activeTab={activeTab}
            handleMainMenuClick={handleMainMenuClick}
            openDropdowns={openDropdowns}
            setOpenDropdowns={setOpenDropdowns}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isLgSidebarExpanded={isLgSidebarExpanded}
            setIsLgSidebarExpanded={setIsLgSidebarExpanded}
          />
          <DashboardMain
            activeTab={activeTab}
            renderContent={() => (
              <DashboardContent
                activeTab={activeTab}
                socket={socket.current}
                staffList={staffList}
                isStaffLoading={isStaffLoading}
                blogs={blogs}
                setBlogs={setBlogs}
                categories={categories}
                setCategories={setCategories}
                handleDeleteStaff={handleDeleteStaff}
                handleAddStaff={handleAddStaff}
                blogToEdit={blogToEdit}
                handleFormSubmit={handleFormSubmit}
                handleEditBlog={handleEditBlog}
                handleCancelForm={handleCancelForm}
                allData={allData}
                allOders={allOders}
                UserData={UserData}
              />
            )}
            notifications={notifications}
            setNotifications={setNotifications}
            showNotifications={showNotifications}
            setShowNotifications={setShowNotifications}
            showProfileMenu={showProfileMenu}
            setShowProfileMenu={setShowProfileMenu}
            singleUser={singleUser}
            handleNotificationClick={handleNotificationClick}
            handleTabClick={handleTabClick}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      </div>
    </div>
  );
}
