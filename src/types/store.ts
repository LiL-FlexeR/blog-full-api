export interface IUser {
  name: string;
  _id: string;
  email: string;
  avatar?: string;
  details?: string;
  profession?: string;
  skills?: string;
}

export interface IRootState {
  currentUser: IUser;
}
