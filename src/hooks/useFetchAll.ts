import instance from "../utils/instance";
import { useState } from "react";
import { IUser } from "../types/store";
import { IPost } from "../types/saga";
import { useImmer } from "use-immer";

export const useFetchAll = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [newPosts, setNewPosts] = useImmer<any>({});
  const fetchAll = async () => {
    const usersRes = await instance.get("/users?limit=all");
    const allUsers = usersRes.data.data;
    setUsers(allUsers);
    const postsRes = await instance.get("/posts?limit=all");
    const allPosts = postsRes.data.data;
    setPosts(allPosts);
  };

  const postLikeHandler = (
    userId: string,
    postsObj: any,
    currentUserId: string
  ) => {
    if (postsObj[userId].likes.includes(userId)) {
      console.log(userId);
    } else {
      const newLikes = {
        ...postsObj[userId],
        likes: [...postsObj[userId].likes, currentUserId],
      };
      console.log(newLikes);
      // setNewPosts((draft: any) => console.log(draft));
    }
  };

  if (users && posts) {
    for (const post of posts) {
      newPosts[post.postedBy] = post;
      for (const user of users) {
        if (post.postedBy === user._id) {
          newPosts[user._id] = { ...newPosts[user._id], user };
        }
      }
    }
  }

  return {
    newPosts,
    fetchAll,
    postLikeHandler,
  };
};
