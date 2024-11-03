import { describe, expect, test } from 'vitest';
import { helloWorld } from './index';

describe('index', () => {
  test('has default message', async () => {
    expect(helloWorld()).toEqual('Hello World!');
  });
});
