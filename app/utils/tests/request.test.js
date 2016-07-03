/**
 * Request utility tests
 */
import { request } from '../request';
import sinon from 'sinon';
import { expect } from 'chai';

describe('.request', () => {
  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.restore();
  });

  describe('successful response', () => {
    const okJSON = [{
      name: 'First repo',
      url: 'http://test.com',
      stargazers_count: 3,
      watchers_count: 5,
    }, {
      name: 'Second repo',
      url: 'http://test123.com',
      stargazers_count: 1,
      watchers_count: 0,
    }];

    beforeEach(() => {
      const res = new window.Response(JSON.stringify(okJSON), {
        status: 200,
        headers: { 'Content-type': 'application/json' },
      });
      window.fetch.returns(Promise.resolve(res));
    });

    // done argument is required to handle promises tests
    it('should format the response correctly', () => {
      return request('/validurl')
        .then(result => {
          expect(result.data).to.eql(okJSON); // deep equal
          expect(result.meta.response.status).to.equal(200);
        });
    });
  });

  describe('error response', () => {
    const errJSON = {
      documentation_url: 'https://developer.github.com/v3',
      message: 'Not Found',
    };

    beforeEach(() => {
      const res = new Response(JSON.stringify(errJSON), {
        status: 404, statusText: 'Not Found',
        headers: { 'Content-type': 'application/json' },
      });

      window.fetch.returns(Promise.resolve(res));
    });

    it('should catch error response', () => {
      return request('/invalidurl')
        .then(result => {
          expect(result.errors[0]).to.eql(errJSON);
          expect(result.meta.response.status).to.equal(404);
        });
    });
  });
});
