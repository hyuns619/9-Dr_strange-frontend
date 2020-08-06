import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "store/reducers";
import "styles/reset.scss";
import "styles/common.scss";
import "styles/media.scss";

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

ReactModal.setAppElement("#root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
