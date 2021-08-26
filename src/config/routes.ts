import { IRoute } from "./../types/routes";
import Home from "../pages/Home";
import { v4 as uuidv4 } from "uuid";
import Profile from "../pages/Profile";
import RouteReducer from "../components/RouteReducer";

export const routes: IRoute[] = [
  {
    type: "public",
    path: "/",
    exact: true,
    component: Home,
    id: uuidv4(),
  },
  {
    type: "private",
    path: "/profile",
    exact: true,
    component: RouteReducer,
    id: uuidv4(),
  },
  {
    type: "private",
    path: "/profile/:id",
    exact: true,
    component: Profile,
    id: uuidv4(),
  },
];
