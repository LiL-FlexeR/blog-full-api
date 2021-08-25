import { Dialog } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../utils/context";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Modal = () => {
  const { modal, closeModal, signUp, signIn } = useContext(StoreContext);

  return (
    <Dialog open={modal} onClose={closeModal}>
      {signUp ? <SignUp /> : null}
      {signIn ? <SignIn /> : null}
    </Dialog>
  );
};

export default Modal;
