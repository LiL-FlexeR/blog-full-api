/*eslint-disable*/
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ExpandMore, Favorite } from "@material-ui/icons";
import React, { memo, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "../../../../assets/error.png";
import { useFetchAll } from "../../../../hooks/useFetchAll";
import { IComment } from "../../../../types/comments";
import { IPost } from "../../../../types/saga";
import { IRootState } from "../../../../types/store";
import instance from "../../../../utils/instance";
import Comment from "./Comments";
import { useStyles } from "./styled";

const Post = memo(({ values, newPosts }: { values: IPost; newPosts: any }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState<IComment[] | null>(null);
  const { postLikeHandler } = useFetchAll();
  const currentUser = useSelector((state: IRootState) => state.currentUser);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded && !comments) {
      instance
        .get(`/comments/post/${values._id}`)
        .then((res) => setComments(res.data));
    }
  }, [expanded]);

  return (
    <Grid item xs={4}>
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
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton
            onClick={() =>
              postLikeHandler(values.user._id, newPosts, currentUser._id)
            }
            aria-label="add to favorites"
          >
            <Favorite />
            <Typography>{values.likes.length}</Typography>
          </IconButton>
          <IconButton
            onClick={() => handleExpandClick()}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse
          style={{ height: "50vh" }}
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            {comments
              ? comments.map(({ _id, dateCreated, likes, text }: IComment) => (
                  <Comment
                    _id={_id}
                    key={_id}
                    text={text}
                    likes={likes}
                    dateCreated={dateCreated}
                  />
                ))
              : null}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
});

export default Post;
