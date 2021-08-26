import { takeLatest } from "@redux-saga/core/effects";
import { UserActions } from "../actions/user";
import {
  authTokenWorker,
  signInWorker,
  signUpWorker,
  userPostsWorker,
} from "./user";

function* sagaWatcher() {
  yield takeLatest(UserActions.Type.SIGN_UP, signUpWorker);
  yield takeLatest(UserActions.Type.SIGN_IN, signInWorker);
  yield takeLatest(UserActions.Type.AUTH_TOKEN, authTokenWorker);
  yield takeLatest(UserActions.Type.GET_USER_POSTS, userPostsWorker);
}

export default function* rootSaga() {
  yield sagaWatcher();
}
