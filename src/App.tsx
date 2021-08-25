/*eslint-disable*/
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { routes } from "./config/routes";
import { UserActions } from "./redux/actions/user";
import PublicRoute from "./routes/public";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(UserActions.authToken());
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Header />
        {routes.map(({ component, exact, path, type, id }) =>
          type === "public" ? (
            <PublicRoute
              key={id}
              path={path}
              exact={exact}
              component={component}
            />
          ) : null
        )}
      </Switch>
      <Modal />
    </Router>
  );
}

export default App;
