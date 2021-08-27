/*eslint-disable*/
import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useFetchAll } from "../../../hooks/useFetchAll";
import Post from "./Post";
import { useStyles } from "./styled";

const Posts = () => {
  const { newPosts, fetchAll } = useFetchAll();
  const classes = useStyles();

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <Grid container style={{ height: "100vh", width: "95%", margin: "0 auto" }}>
      <Typography className={classes.title}>Latest Episodes</Typography>
      <Grid spacing={2} container style={{ height: "100%" }}>
        {Object.entries(newPosts).map(([key, values]: any) => (
          <Post values={values} key={values._id} newPosts={newPosts} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Posts;
