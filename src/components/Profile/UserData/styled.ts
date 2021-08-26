import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  userDataContainer: {
    height: "50vh",
  },
  rightSide: {
    paddingLeft: "5vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "50%",
    width: "50%",
  },
}));
