import * as types from "./actionTypes";
import * as productApi from "../../api/productsApi";

export function createProduct(product) {
  return { type: types.CREATE_PRODUCTS, product };
}

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts(filter) {
  return function(dispatch) {
    return productApi
      .getProducts(filter)
      .then(products => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        throw error;
      });
  };
}
