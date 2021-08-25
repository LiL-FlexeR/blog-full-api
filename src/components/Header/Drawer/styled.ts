import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    drawerContainer: {
      width: "300px",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
}));
