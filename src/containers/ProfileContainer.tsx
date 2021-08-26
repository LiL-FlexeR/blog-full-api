/*eslint-disable*/
import { Grid } from "@material-ui/core";
import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserData from "../components/Profile/UserData";
import UserPosts from "../components/Profile/UserPosts";
import { UserActions } from "../redux/actions/user";
import { IRootState } from "../types/store";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ height: "80%" }}
    >
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileContainer = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const currentUser = useSelector((state: IRootState) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser._id) {
      dispatch(UserActions.getUserPosts(currentUser));
    }
  }, [currentUser._id]);

  return (
    <div style={{ marginTop: "20vh" }}>
      <Grid>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
          indicatorColor="primary"
        >
          <Tab label="User" {...a11yProps(0)} />
          <Tab label="Posts" {...a11yProps(1)} />
        </Tabs>
      </Grid>
      <TabPanel value={value} index={0}>
        <UserData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserPosts />
      </TabPanel>
    </div>
  );
};

export default ProfileContainer;
