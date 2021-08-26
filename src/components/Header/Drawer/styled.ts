import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    drawerContainer: {
      width: "300px",
      display: "flex",
      justifyContent: "flex-end",
    },
    link: {
      textDecoration: "none",
      color: "#000",
      fontSize: "18px",
      width: "100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      padding: "6px 16px",
      transition: "all 0.3s ease",
      borderRadius: "2.5px",
      "&:hover": {
        backgroundColor: "#f2f2f2",
      },
    },
    li: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));
