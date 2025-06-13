// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('API index page', () => {
  let server;

  before((done) => {
    server = app.listen(7866, done);
  });

  after(() => {
    server.close();
  });

  it('should return correct response', (done) => {
    request.get('http://localhost:7866', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
