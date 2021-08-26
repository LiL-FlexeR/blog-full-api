import { ITool } from "./../types/tools";
import { v4 as uuidv4 } from "uuid";
import { AccountCircle, MeetingRoom, PermIdentity } from "@material-ui/icons";

export const tools: ITool[] = [
  {
    type: "signUp",
    isAuth: false,
    id: uuidv4(),
    text: "Sign In",
    icon: MeetingRoom,
  },
  {
    type: "signIn",
    isAuth: false,
    id: uuidv4(),
    text: "Log In",
    icon: AccountCircle,
  },
  {
    type: "profile",
    isAuth: true,
    id: uuidv4(),
    text: "Profile",
    icon: PermIdentity,
    path: "/profile",
  },
];
