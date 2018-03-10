const { gameStatus } = require('./gameService');

test('X should win horizontaly (1 row)', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win horizontaly (2 row)', () => {
  const board = [['', '', ''], ['X', 'X', 'X'], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win horizontaly (3 row)', () => {
  const board = [['', '', ''], ['', '', ''], ['X', 'X', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win vertically (1 column)', () => {
  const board = [['X', '', ''], ['X', '', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win vertically (2 column)', () => {
  const board = [['', 'X', ''], ['', 'X', ''], ['', 'X', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win vertically (3 column)', () => {
  const board = [['', 'X', ''], ['', 'X', ''], ['', 'X', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win diagonally', () => {
  const board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win diagonally (2nd direction)', () => {
  const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('should not be tie', () => {
  const board = [['', '', 'X'], ['', '', 'X'], ['X', '', '']];
  expect(gameStatus(board)).toBe(undefined);
});

test('should be a tie', () => {
  const board = [['X', 'O', 'X'], ['O', 'O', 'X'], ['X', 'X', 'O']];
  expect(gameStatus(board)).toBe('Tie');
});
