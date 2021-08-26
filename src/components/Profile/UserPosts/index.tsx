import { Favorite } from "@material-ui/icons";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  CardContent,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { IPost } from "../../../types/saga";
import { IRootState } from "../../../types/store";
import Image from "../../../assets/error.png";
import { useStyles } from "./styled";

const UserPosts = () => {
  const currentUser = useSelector((state: IRootState) => state.currentUser);
  const posts = useSelector((state: IRootState) => state.currentUser.posts);
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.postsContainer}>
      {posts?.map(
        ({
          description,
          fullText,
          image,
          likes,
          postedBy,
          title,
          dateCreated,
          _id,
        }: IPost) => (
          <Grid item xs={4} key={_id}>
            <Card className={classes.post}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    {currentUser.name.substr(0, 1)}
                  </Avatar>
                }
                title={title}
                subheader={dateCreated}
              />
              <CardMedia
                className={classes.media}
                image={Image}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default UserPosts;
