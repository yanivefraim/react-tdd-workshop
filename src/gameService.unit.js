const { gameStatus } = require('./gameService');

test('X should win Line 1', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win Line 2', () => {
  const board = [['', '', ''], ['X', 'X', 'X'], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win Line 3', () => {
  const board = [['', '', ''], ['', '', ''], ['X', 'X', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win Row 1', () => {
  const board = [['X', '', ''], ['X', '', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win Row 2', () => {
  const board = [['', 'X', ''], ['', 'X', ''], ['', 'X', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win Row 3', () => {
  const board = [['', '', 'X'], ['', '', 'X'], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win top right Diagonal', () => {
  const board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win top Left Diagonal', () => {
  const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('should be tie ', () => {
  const board = [['O', 'X', 'O'], ['O', 'X', 'X'], ['X', 'O', 'O']];
  expect(gameStatus(board)).toBe('tie');
});
