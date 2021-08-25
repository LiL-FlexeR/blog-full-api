import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      marginLeft: "20px",
    },
    toolbar: {
      padding: "10px",
      backgroundColor: theme.palette.grey[800],
    },
  },
}));
