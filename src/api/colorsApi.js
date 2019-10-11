import { handleResponse, handleError } from "./apiUtils";
import * as config from "../config";
const baseUrl = config.default.apiUrl + "/colors";
export function getColors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
