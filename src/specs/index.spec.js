import { helloWorld } from '../index.js';

test('has default message', () => {
  expect(helloWorld()).toEqual('Hello World!');
});