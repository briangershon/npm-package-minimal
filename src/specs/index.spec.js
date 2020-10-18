const { helloWorld } = require('../index.js');

test('has default helloWorld', () => {
  expect(helloWorld().substr(0, 12)).toEqual('Hello World!');
});