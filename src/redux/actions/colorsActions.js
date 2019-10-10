import * as types from "./actionTypes";
import * as colorsApi from "../../api/colorsApi";

export function loadColorsSuccess(colors) {
  return { type: types.LOAD_COLORS_SUCCESS, colors };
}

export function loadColors() {
  return function(dispatch) {
    return colorsApi
      .getColors()
      .then(colors => dispatch(loadColorsSuccess(colors)))
      .catch(error => {
        throw error;
      });
  };
}
