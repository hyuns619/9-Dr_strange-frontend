import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "store/reducers";
import "styles/reset.scss";
import "styles/common.scss";
import "styles/media.scss";

const store = createStore(rootReducer, composeWithDevTools());

ReactModal.setAppElement("#root");
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
