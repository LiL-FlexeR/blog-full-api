import { ITool } from "./../types/tools";
import { v4 as uuidv4 } from "uuid";
import { AccountCircle, MeetingRoom } from "@material-ui/icons";

export const tools: ITool[] = [
  {
    type: "signUp",
    id: uuidv4(),
    text: "Sign In",
    icon: MeetingRoom,
  },
  {
    type: "signIn",
    id: uuidv4(),
    text: "Log In",
    icon: AccountCircle,
  },
];
