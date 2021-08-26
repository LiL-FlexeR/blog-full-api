import { Grid, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../types/store";
import { useStyles } from "./styled";
import Image from "../../../assets/login.png";

const UserData = () => {
  const currentUser = useSelector((state: IRootState) => state.currentUser);
  const classes = useStyles();

  return (
    <Grid container className={classes.userDataContainer}>
      <Grid item xs={6} className={classes.leftSide}>
        <CardMedia image={Image} className={classes.image} />
      </Grid>
      <Grid item xs={6} className={classes.rightSide}>
        <Typography>Name: {currentUser.name}</Typography>
        <Typography>Email: {currentUser.email}</Typography>
        <Typography>Profession: {currentUser.profession}</Typography>
        <Typography>Skills: {currentUser.skills}</Typography>
        <Typography>Details: {currentUser.details}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserData;
