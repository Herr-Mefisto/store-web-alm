import { handleResponse, handleError, cleanParameters } from "./apiUtils";
const baseUrl = "http://localhost:4000/products/";

export function getProducts(filter) {
  let url = new URL(baseUrl);
  url.search = new URLSearchParams(cleanParameters(filter));
  return fetch(url)
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return fetch(baseUrl + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
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
