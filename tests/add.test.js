import add from '../src/add';

test('add: 1, 2', () => {
  expect(add(1, 2)).toBe(3);
});

test('add: 1, "2"', () => {
  expect(add(1, '2')).toBe(3);
});

test('add: 1, null', () => {
  expect(add(1, null)).toBe(1);
});