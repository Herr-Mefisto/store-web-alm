import { combineReducers } from "redux";
import products from "./productReducer";
import colors from "./colorReducer";

const rootReducer = combineReducers({
  products,
  colors
});

export default rootReducer;
