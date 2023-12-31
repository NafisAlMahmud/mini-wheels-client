import React, { useContext } from "react";

import { Oval } from "react-loader-spinner";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // this is loading

  if (loading) {
    return (
      <div className="mx-auto lg:my-48 lg:mx-96 sm:mt-9 align-middle justify-center">
        <Oval
          height={90}
          width={90}
          color="#000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#0002"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        ;
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoutes;
