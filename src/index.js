import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Reducers } from "./reducer";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const globalStore = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={globalStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
