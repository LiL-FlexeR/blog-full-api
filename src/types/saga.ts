import { IUser } from "./store";

export interface IUserPayload {
  name?: string;
  email: string;
  password: string;
}

type IU = IUserPayload | IUser | IPostsPayload;

interface IPost {
  _id: string;
  title: string;
  fullText: string;
  description: string;
  likes: [];
  image: string;
  postedBy: string;
}

export interface IPostsPayload {
  data: IPost[];
}

export interface IAction<T extends IU> {
  type: string;
  payload: T;
}
