import instance from "../utils/instance";
import { useState } from "react";
import { IUser } from "../types/store";
import { IPost } from "../types/saga";

export const useFetchAll = () => {
  const [users, setUsers] = useState<IUser[] | any>([]);
  const [posts, setPosts] = useState<IPost[] | any>([]);
  const newPosts: any = {};
  const fetchAll = async () => {
    const usersRes = await instance.get("/users?limit=all");
    const allUsers = usersRes.data.data;
    setUsers(allUsers);
    const postsRes = await instance.get("/posts?limit=all");
    const allPosts = postsRes.data.data;
    setPosts(allPosts);
  };

  for (const post of posts) {
    newPosts[post.postedBy] = post;
    for (const user of users) {
      if (post.postedBy === user._id) {
        newPosts[user._id] = { ...newPosts[user._id], user };
      }
    }
  }

  return {
    newPosts,
    fetchAll,
  };
};
