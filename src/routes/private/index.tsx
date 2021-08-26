import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { IRotueType as IRouteType } from "../../types/routes";

const PrivateRoute: React.FC<IRouteType & RouteProps> = (props) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Route {...props} component={props.component} />;
  }
  return null;
};

export default PrivateRoute;
