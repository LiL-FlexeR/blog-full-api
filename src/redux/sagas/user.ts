import { IAction, IUserPayload } from "./../../types/saga";
import { call, put } from "@redux-saga/core/effects";
import {
  fetchCreateUser,
  fetchCurrentUser,
  fetchToken,
  fetchUserPosts,
} from "./api/user";
import { UserActions } from "../actions/user";
import { IUser } from "../../types/store";

export function* signUpWorker(action: IAction<IUserPayload>): Generator {
  yield call(fetchCreateUser, action.payload);
  yield call(fetchToken, action.payload);
  const currentUser = yield call(fetchCurrentUser);
  yield put(UserActions.authUser(currentUser));
}

export function* signInWorker(action: IAction<IUserPayload>): Generator {
  yield call(fetchToken, action.payload);
  const currentUser = yield call(fetchCurrentUser);
  yield put(UserActions.authUser(currentUser));
}

export function* authTokenWorker(): Generator {
  const currentUser = yield call(fetchCurrentUser);
  yield put(UserActions.authUser(currentUser));
}

export function* userPostsWorker(action: IAction<IUser>): Generator {
  const posts = yield call(fetchUserPosts, action.payload);
  yield put(UserActions.setUserPosts(posts));
}
