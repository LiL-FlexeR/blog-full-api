import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { IRotueType as IRouteType } from "../../types/routes";

const PublicRoute: React.FC<IRouteType & RouteProps> = (props) => {
  return <Route {...props} component={props.component} />;
};

export default PublicRoute;
