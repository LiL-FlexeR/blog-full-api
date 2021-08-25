import { takeLatest } from "@redux-saga/core/effects";
import { UserActions } from "../actions/user";
import { authTokenWorker, signInWorker, signUpWorker } from "./user";

function* sagaWatcher() {
  yield takeLatest(UserActions.Type.SIGN_UP, signUpWorker);
  yield takeLatest(UserActions.Type.SIGN_IN, signInWorker);
  yield takeLatest(UserActions.Type.AUTH_TOKEN, authTokenWorker);
}

export default function* rootSaga() {
  yield sagaWatcher();
}
