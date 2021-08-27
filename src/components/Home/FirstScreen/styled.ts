import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  bcg: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
