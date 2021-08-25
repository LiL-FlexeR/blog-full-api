import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
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
}));
