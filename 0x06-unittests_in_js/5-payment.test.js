const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and call console.log once for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    chai.expect(consoleSpy.calledOnce).to.be.true;
    chai.expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and call console.log once for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    chai.expect(consoleSpy.calledOnce).to.be.true;
    chai.expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});