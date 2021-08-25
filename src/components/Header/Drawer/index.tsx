import { Button, Drawer, Icon } from "@material-ui/core";
import { Divider, List, ListItem, IconButton } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useStyles } from "./styled";
import { tools } from "../../../config/tools";
import { useContext } from "react";
import { StoreContext } from "../../../utils/context";
import { useSelector } from "react-redux";
import { IRootState } from "../../../types/store";

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

  return (
    <Drawer open={open}>
      <div className={classes.drawerContainer}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      {!currentUser._id ? (
        <List>
          {tools.map(({ id, type, text, icon }) => (
            <ListItem key={id}>
              <Button onClick={() => modalHandler(type)}>
                {<Icon fontSize="large" component={icon} />}
                {text}
              </Button>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Drawer>
  );
};

export default DrawerPersistent;
