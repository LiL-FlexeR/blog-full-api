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
    title: {
      fontSize: "40px",
      margin: "5vh 0",
      fontWeight: 700,
    },
  },
}));
