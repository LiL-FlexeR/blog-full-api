import { IPost } from "./saga";

export interface IUser {
  name: string;
  _id: string;
  email: string;
  avatar?: string;
  details?: string;
  profession?: string;
  skills?: string;
  posts?: IPost[];
}

export interface IRootState {
  currentUser: IUser;
}
