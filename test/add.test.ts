import {describe, expect, test} from '@jest/globals';
import add from './add';

describe('add module', () => {
  test('sums 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
