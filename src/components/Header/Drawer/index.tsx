import { Button, Drawer, Icon } from "@material-ui/core";
import { Divider, List, ListItem, IconButton } from "@material-ui/core";
import { ChevronLeft, FirstPage } from "@material-ui/icons";
import { useStyles } from "./styled";
import { tools } from "../../../config/tools";
import { useContext } from "react";
import { StoreContext } from "../../../utils/context";
import { useSelector } from "react-redux";
import { IRootState } from "../../../types/store";
import { Link, useLocation } from "react-router-dom";

const DrawerPersistent = ({
  handleDrawerClose,
  open,
}: {
  handleDrawerClose: () => void;
  open: boolean;
}) => {
  const classes = useStyles();
  const { modalHandler } = useContext(StoreContext);
  const currentUser = useSelector((state: IRootState) => state.currentUser);
  const location = useLocation();

  return (
    <Drawer open={open}>
      <div className={classes.drawerContainer}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      {currentUser._id ? (
        <List>
          {tools.map(({ id, type, text, icon, isAuth, path }) =>
            isAuth && path ? (
              <ListItem key={id} className={classes.li}>
                <Link to={path} className={classes.link}>
                  <Icon component={icon} /> {text}
                </Link>
              </ListItem>
            ) : null
          )}
        </List>
      ) : (
        <List>
          {tools.map(({ id, type, text, icon, isAuth }) =>
            !isAuth ? (
              <ListItem key={id}>
                <Button onClick={() => modalHandler(type)}>
                  {<Icon fontSize="large" component={icon} />}
                  {text}
                </Button>
              </ListItem>
            ) : null
          )}
        </List>
      )}
      {location.pathname !== "/" ? (
        <Link to="/" className={classes.link}>
          <FirstPage /> Main
        </Link>
      ) : null}
    </Drawer>
  );
};

export default DrawerPersistent;
