export interface IStoreContext {
  modal: boolean;
  showModal: () => void;
  closeModal: () => void;
  modalHandler: (type: string) => void;
  drawer: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  signUp: boolean;
  handleSignUpOpen: () => void;
  handleSignUpClose: () => void;
  signIn: boolean;
  handleSignInOpen: () => void;
  handleSignInClose: () => void;
}
