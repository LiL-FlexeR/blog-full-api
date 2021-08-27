import { Grid, IconButton, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import React from "react";
import { IComment } from "../../../../../types/comments";

const Comment = ({ dateCreated, likes, text }: IComment) => {
  const dc = new Date(dateCreated).toLocaleString();

  return (
    <Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
      </Grid>
      <Typography variant="body2" color="textSecondary" component="p">
        {dc}
      </Typography>
    </Grid>
  );
};

export default Comment;
