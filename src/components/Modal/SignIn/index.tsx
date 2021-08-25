import {
  Button,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "../../../redux/actions/user";
import { StoreContext } from "../../../utils/context";
import { useStyles } from "./styled";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const classes = useStyles();
  const { closeModal, handleSignInClose } = useContext(StoreContext);
  const dispatch = useDispatch();

  return (
    <div>
      <DialogTitle>
        <Typography className={classes.title}>Let`s Log In</Typography>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            dispatch(UserActions.signIn(values));
            closeModal();
            handleSignInClose();
          }}
        >
          {(props) => (
            <Form className={classes.form}>
              <TextField
                name="email"
                placeholder="Enter Email"
                onChange={props.handleChange}
                value={props.values.email}
                variant="outlined"
              />
              <TextField
                name="password"
                placeholder="Enter Password"
                onChange={props.handleChange}
                value={props.values.password}
                variant="outlined"
              />
              <Button type="submit" className={classes.button}>
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </div>
  );
};

export default SignIn;
