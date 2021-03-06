import { IAction, IPostsPayload } from "./../../types/saga";
import { handleActions } from "redux-actions";
import { UserActions } from "../actions/user";

const initialState = {};

export const UserReducer = handleActions(
  {
    [UserActions.Type.AUTH_USER]: (state, action) => (state = action.payload),
    [UserActions.Type.SET_USER_POSTS]: (
      state,
      action: IAction<IPostsPayload>
    ) => (state = { ...state, posts: action.payload.data }),
  },

  initialState
);
