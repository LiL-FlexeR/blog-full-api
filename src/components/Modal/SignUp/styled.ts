import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    form: {
      display: "flex",
      flexDirection: "column",
      height: 500,
      width: 500,
      justifyContent: "space-around",
      alignItems: "center",
    },
    button: {
      width: 100,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    title: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "100%",
      alignItems: "center",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "70%",
    },
  },
}));
