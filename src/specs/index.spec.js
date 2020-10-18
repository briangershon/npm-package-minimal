const { helloWorld } = require('../index.js');

test('has default message', () => {
  expect(helloWorld()).toEqual('Hello World!');
});