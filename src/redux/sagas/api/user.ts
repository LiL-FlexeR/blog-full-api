import { IUserPayload } from "./../../../types/saga";
import instance from "../../../utils/instance";
import { IUser } from "../../../types/store";

export const fetchCreateUser = async (user: IUserPayload) => {
  const res = await instance.post("/users", user);
  const data = res.data;
  return data;
};

export const fetchToken = async (user: IUserPayload) => {
  const res = await instance.post("/auth", {
    email: user.email,
    password: user.password,
  });
  const data = res.data.token;
  localStorage.setItem("token", data);
  return data;
};

export const fetchCurrentUser = async () => {
  const res = await instance.get("/auth/user");
  const data = res.data;
  return data;
};

export const fetchUserPosts = async (user: IUser) => {
  const res = await instance.get(`/posts?postedBy=${user._id}`);
  const data = res.data;
  return data;
};
