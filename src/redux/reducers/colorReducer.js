import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function colorReducer(state = initialState.colors, action) {
  switch (action.type) {
    case types.LOAD_COLORS_SUCCESS:
      return [...state, { ...action.colors }];
    default:
      return state;
  }
}
