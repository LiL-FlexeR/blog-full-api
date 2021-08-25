import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { StoreProvider } from "./utils/context";
import { theme } from "./utils/theme";

ReactDOM.render(
  <CssBaseline>
    <Provider store={store}>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </Provider>
  </CssBaseline>,
  document.getElementById("root")
);
