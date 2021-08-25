/*eslint-disable*/
import { createAction } from "redux-actions";

enum Type {
  CREATE_USER = "CREATE_USER",
  AUTH_TOKEN = "AUTH_TOKEN",
  AUTH_USER = "AUTH_USER",

  SIGN_UP = "SIGN_UP",
  SIGN_IN = "SIGN_IN",

  GET_USER_POSTS = "GET_USER_POSTS",
  SET_USER_POSTS = "SET_USER_POSTS",
}

const createUser = createAction(Type.CREATE_USER);
const authToken = createAction(Type.AUTH_TOKEN);
const authUser = createAction(Type.AUTH_USER);

const signUp = createAction(Type.SIGN_UP);
const signIn = createAction(Type.SIGN_IN);

const getUserPosts = createAction(Type.GET_USER_POSTS);
const setUserPosts = createAction(Type.SET_USER_POSTS);

export const UserActions = {
  Type,

  createUser,
  authToken,
  authUser,

  signUp,
  signIn,

  getUserPosts,
  setUserPosts,
};

export type UserActions = Omit<typeof UserActions, "Type">;
