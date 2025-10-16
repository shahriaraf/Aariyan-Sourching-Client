import getAllOrders from "../../../lib/getAllOrders";
import getAllUsers from "../../../lib/getAllUsers";
import getAllData from "../../../lib/getSiteData";
import AdminDashboard from "../../../pages/AdminDashboard/AdminDashboard";

export default async function page() {
  const UserData = await getAllUsers();
  const allData = await getAllData();
  const allOders = await getAllOrders();
  return (
    <>
      <AdminDashboard
        allData={allData}
        allOders={allOders}
        UserData={UserData}
      />
    </>
  );
}
