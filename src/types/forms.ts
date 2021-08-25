import { FormikProps } from "formik";

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  profession?: string;
  skills?: string;
  details?: string;
}

export interface IStepper {
  props: FormikProps<ISignUp>;
  index: number;
  setIndex: (idx: number) => void;
}
