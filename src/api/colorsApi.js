import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:4000/colors";
export function getColors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
