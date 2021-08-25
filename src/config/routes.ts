import { IRoute } from "./../types/routes";
import Home from "../pages/Home";
import { v4 as uuidv4 } from "uuid";

export const routes: IRoute[] = [
  {
    type: "public",
    path: "/",
    exact: true,
    component: Home,
    id: uuidv4(),
  },
];
