const { gameStatus } = require('./gameService');

test('X should win row', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win column', () => {
  const board = [['X', '', ''], ['X', '', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win diagonal', () => {
  const board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win inverse diagonal', () => {
  const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('O should win row', () => {
  const board = [['O', 'O', 'O'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('O');
});

test('tie', () => {
  const board = [['O', 'O', 'X'], ['X', 'X', 'O'], ['O', 'X', 'O']];
  expect(gameStatus(board)).toBe('TIE');
});
