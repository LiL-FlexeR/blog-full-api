import {
  DialogContent,
  DialogTitle,
  Stepper,
  Typography,
  Step,
  StepLabel,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "../../../redux/actions/user";
import { ISignUp } from "../../../types/forms";
import { StoreContext } from "../../../utils/context";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useStyles } from "./styled";
import ThirdStep from "./ThirdStep";

const SignUp = () => {
  const classes = useStyles();
  const initialValues: ISignUp = {
    name: "",
    email: "",
    password: "",
    profession: "",
    skills: "",
    details: "",
  };
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const { closeModal, handleSignUpClose } = useContext(StoreContext);

  const steps = ["Primary Info", "Secondary Info", "Finish!"];

  return (
    <div>
      <DialogTitle>
        <Typography className={classes.title}>Let`s Sign Up</Typography>
      </DialogTitle>
      <DialogContent>
        <Stepper activeStep={index}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            dispatch(UserActions.signUp(values));
            setIndex(0);
            closeModal();
            handleSignUpClose();
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit} className={classes.form}>
              {index === 0 ? (
                <FirstStep props={props} index={index} setIndex={setIndex} />
              ) : null}
              {index === 1 ? (
                <SecondStep props={props} index={index} setIndex={setIndex} />
              ) : null}
              {index === 2 ? (
                <ThirdStep props={props} index={index} setIndex={setIndex} />
              ) : null}
            </Form>
          )}
        </Formik>
      </DialogContent>
    </div>
  );
};

export default SignUp;
