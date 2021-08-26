import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useFetchAll } from "../../../hooks/useFetchAll";
import { useStyles } from "./styled";
import Image from "../../../assets/error.png";
import { IPost } from "../../../types/saga";
import { useState } from "react";
import { useCallback } from "react";

const Posts = () => {
  const { newPosts, fetchAll } = useFetchAll();
  const classes = useStyles();

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      style={{ height: "100vh", width: "95%", margin: "0 auto" }}
    >
      {Object.entries(newPosts).map(([key, values]: any) => (
        <Grid item xs={4} key={values._id}>
          <Card className={classes.post}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {values.user?.name.substr(0, 1)}
                </Avatar>
              }
              title={values.title}
              subheader={values.dateCreated}
            />
            <CardMedia
              className={classes.media}
              image={Image}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {values.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
