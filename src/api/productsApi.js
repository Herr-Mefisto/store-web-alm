import { handleResponse, handleError, cleanParameters } from "./apiUtils";
import * as config from "../config";
const baseUrl = config.default.apiUrl + "/products/";

export function getProducts(filter) {
  let url = new URL(baseUrl);
  url.search = new URLSearchParams(cleanParameters(filter));
  return fetch(url)
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(id) {
  let url = new URL(baseUrl + id);
  return fetch(url)
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  const id = product.id;
  delete product["id"];
  return fetch(baseUrl + (id || ""), {
    method: id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProduct(productId) {
  return fetch(baseUrl + productId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
