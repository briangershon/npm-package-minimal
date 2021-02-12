import { helloWorld } from '../index';

test('has default message', () => {
  expect(helloWorld()).toEqual('Hello World!');
});