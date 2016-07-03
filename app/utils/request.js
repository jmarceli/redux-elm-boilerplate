import 'isomorphic-fetch';

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {objct} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // "convert" HTTP error to JS error
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Parses the JSON returned by a successful network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
function handleSuccess(response) {
  return response.json().then(json => {
    return {
      data: json,
      meta: { response },
    };
  });
}

/**
 * Parses the JSON returned by a unsuccessful network request
 * @param  {object} error    Javascript error object
 * @return {object}          The parsed JSON from the request
 */
function handleError(error) {
  return error.response.json().then(json => {
    return {
      errors: [json],
      meta: { response: error.response },
    };
  });
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export const request = (url, options = {}) => {
  return fetch(url, options)
    .then(checkStatus) // this will throw error for HTTP error responses
    .then(handleSuccess)
    .catch(handleError);
};
