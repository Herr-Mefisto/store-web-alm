export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = response.text();
    throw new Error(error);
  }
  throw new Error("Network error!!!!");
}

export async function handleError(error) {
  console.error("Api call failed: " + error);
  throw error;
}

export function cleanParameters(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
}
