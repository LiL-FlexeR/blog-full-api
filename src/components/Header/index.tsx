import { Menu as MenuIcon } from "@material-ui/icons";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import DrawerPersistent from "./Drawer";
import { useStyles } from "./styled";
import { useContext } from "react";
import { StoreContext } from "../../utils/context";

const Header = () => {
  const classes = useStyles();
  const { handleDrawerClose, drawer, handleDrawerOpen } =
    useContext(StoreContext);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}>Blog</Typography>
        </Toolbar>
      </AppBar>
      <DrawerPersistent handleDrawerClose={handleDrawerClose} open={drawer} />
    </div>
  );
};

export default Header;
