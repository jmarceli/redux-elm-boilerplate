import 'isomorphic-fetch';

import { request } from '../../utils/request';

/**
 * Handles form submit
 * @param  {object} data      Currently only `username` key is used
 * @param  {func} resolve     Promise resolve used for redux-form integration
 * @param  {func} reject      Promise reject used for redux-form intengration
 * @return {object}           Returns response JSON
 */
export const submitForm = (data, resolve, reject) => {
  const url = `https://api.github.com/users/${data.username}/repos?type=all&sort=updated`;

  return request(url)
    .then(response => {
      if (response.errors) {
        // invalid response
        // reject({ username: 'invalid' }); // mimic invalid username field
        reject(response);
        return response.errors;
      }

      resolve(response);
      return response.data;
    });
};
