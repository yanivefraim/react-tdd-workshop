const { gameStatus } = require('./gameService');

test('X should win on top line', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win on middle line', () => {
  const board = [['', '', ''], ['X', 'X', 'X'], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win on bottom line', () => {
  const board = [['', '', ''], ['', '', ''], ['X', 'X', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win on left col', () => {
  const board = [['X', '', ''], ['X', '', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win on middle col', () => {
  const board = [['', 'X', ''], ['', 'X', ''], ['', 'X', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win on right col', () => {
  const board = [['', '', 'X'], ['', '', 'X'], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win on left diagonal', () => {
  const board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win on right diagonal', () => {
  const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test("when all cells are taking it's a tie", () => {
  const board = [['O', 'X', 'O'], ['X', 'X', 'O'], ['X', 'O', 'X']];
  expect(gameStatus(board)).toBe('tie');
});
