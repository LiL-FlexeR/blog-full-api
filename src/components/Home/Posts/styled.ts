import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("md")]: {
    postsContainer: {
      width: "90%",
      margin: "0 auto",
      marginTop: "5vh",
    },
    post: {
      height: "40vh",
    },
    media: {
      height: "50%",
    },
  },
}));
