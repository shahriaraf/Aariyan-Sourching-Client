import { Suspense } from "react";
import MyAccount from "../../../pages/MyAccount/MyAccount";
import LoadingSpinner from "../../../components/LoadingSpinner";

const page = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <MyAccount />
      </Suspense>
    </>
  );
};

export default page;
