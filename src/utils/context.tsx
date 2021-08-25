import { useCallback } from "react";
import { createContext, useState } from "react";
import { IStoreContext } from "../types/context";

const initialValues = {
  modal: false,
  showModal: () => {},
  closeModal: () => {},
  modalHandler: (type: string) => {},
  drawer: false,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
  signUp: false,
  handleSignUpOpen: () => {},
  handleSignUpClose: () => {},
  signIn: false,
  handleSignInOpen: () => {},
  handleSignInClose: () => {},
};

export const StoreContext = createContext<IStoreContext>(initialValues);

export const StoreProvider: React.FC = (props) => {
  const [modal, setModal] = useState<boolean>(false);
  const showModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const [drawer, setDrawer] = useState<boolean>(false);
  const handleDrawerOpen = useCallback(() => setDrawer(true), []);
  const handleDrawerClose = useCallback(() => setDrawer(false), []);

  const [signUp, setSignUp] = useState<boolean>(false);
  const handleSignUpOpen = useCallback(() => setSignUp(true), []);
  const handleSignUpClose = useCallback(() => setSignUp(false), []);

  const [signIn, setSignIn] = useState<boolean>(false);
  const handleSignInOpen = useCallback(() => setSignIn(true), []);
  const handleSignInClose = useCallback(() => setSignIn(false), []);

  const modalHandler = (type: string) => {
    if (type) {
      handleDrawerClose();
      showModal();
    }
    if (type === "signUp") {
      showModal();
      handleSignUpOpen();
    }
    if (type === "signIn") {
      showModal();
      handleSignInOpen();
    }
  };

  return (
    <StoreContext.Provider
      value={{
        modal,
        showModal,
        closeModal,
        modalHandler,
        drawer,
        handleDrawerOpen,
        handleDrawerClose,
        signUp,
        handleSignUpOpen,
        handleSignUpClose,
        signIn,
        handleSignInOpen,
        handleSignInClose,
      }}
      {...props}
    />
  );
};
