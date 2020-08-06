import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartList from "./cartList";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cartList"],
};

const rootReducer = combineReducers({
  cartList,
});

export default persistReducer(persistConfig, rootReducer);
