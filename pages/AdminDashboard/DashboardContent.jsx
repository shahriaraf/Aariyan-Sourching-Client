import AllProducts from "../../components/AllProducts";
import AddStaff from "../AddStaff/AddStaff";
import AllOrders from "../AllOrders/AllOrders";
import Messages from "../Messages/Messages";
import PaymentGateway from "../PaymentGateway/PaymentGateway";
import Staff from "../Staff/Staff";
import Transaction from "../Transactions/Transactions";
import Users from "../Users/Users";
import AccountDetailsForm from "./AccountDetailsForm";
import AddBrand from "./AddBrand";
import AddCategory from "./AddCategory";
import AddProductColour from "./AddProductColour";
import AddProductFit from "./AddProductFit";
import AddProductForm from "./AddProductForm";
import AddSize from "./AddSize";
import AddSubCategory from "./AddSubCategory";
import AllBlogs from "./AllBlog/AllBlogs";
import Analytics from "./Analytics";
import BlogCategory from "./BlogCategory";
import BlogForm from "./BlogForm";
import HomePageManager from "./HomePageManager";
import NewsLetterAdmin from "./NewsLetterAdmin";
export default function DashboardContent({
  activeTab,
  socket,
  staffList,
  isStaffLoading,
  blogs,
  setBlogs,
  categories,
  setCategories,
  handleDeleteStaff,
  handleAddStaff,
  blogToEdit,
  handleFormSubmit,
  handleEditBlog,
  handleCancelForm,
  allData,
  allOders,
  UserData,
}) {
  if (isStaffLoading && (activeTab === "Staff" || activeTab === "Add Staff")) {
    return <LoadingSpinner />;
  }

  switch (activeTab) {
    case "Messages":
      return <Messages socket={socket} />;
    case "News Letter":
      return <NewsLetterAdmin />;
    case "Staff":
      return <Staff staff={staffList} onDeleteStaff={handleDeleteStaff} />;
    case "Users":
      return <Users />;
    case "Add Staff":
      return <AddStaff onAddStaff={handleAddStaff} />;
    case "Home":
      return <HomePageManager />;
    case "All Orders":
      return <AllOrders />;
    case "Transactions":
      return <Transaction />;
    case "Payment Gateway":
      return <PaymentGateway />;
    case "All Blogs":
      return (
        <AllBlogs
          blogs={blogs}
          setBlogs={setBlogs}
          categories={categories}
          onEdit={handleEditBlog}
        />
      );
    case "Add Blogs":
      return (
        <BlogForm
          categories={categories}
          blogToEdit={blogToEdit}
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancelForm}
        />
      );
    case "Blog Category":
      return <BlogCategory categories={categories} setCategories={setCategories} />;
    case "All Products":
      return <AllProducts />;
    case "Add Product":
      return <AddProductForm />;
    case "Google Analytics":
    case "Product Category":
      return <AddCategory />;
    case "Product Sub Category":
      return <AddSubCategory />;
    case "Product Color":
      return <AddProductColour />;
    case "Product Fit":
      return <AddProductFit />;
    case "Product Size ":
      return <AddSize />;
    case "Product Brand":
      return <AddBrand/>;
    case "My Account":
      return <AccountDetailsForm />;
    default:
      return <Analytics allData={allData} allOders={allOders} UserData={UserData} />;
  }
}
