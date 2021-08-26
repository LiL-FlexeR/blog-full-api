import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { IRootState } from "../../types/store";

const RouteReducer = () => {
  const currentUser = useSelector((state: IRootState) => state.currentUser);
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/profile" && currentUser._id ? (
        <Redirect to={`/profile/${currentUser._id}`} />
      ) : null}
    </div>
  );
};

export default RouteReducer;
