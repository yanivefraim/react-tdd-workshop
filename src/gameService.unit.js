const { gameStatus } = require('./gameService');

['X', 'O'].forEach(symbol => {
  test(`${symbol} should win for first line`, () => {
    const board = [[symbol, symbol, symbol], ['', '', ''], ['', '', '']];
    expect(gameStatus(board)).toBe(symbol);
  });

  test(`${symbol} should win for second line`, () => {
    const board = [['', '', ''], [symbol, symbol, symbol], ['', '', '']];
    expect(gameStatus(board)).toBe(symbol);
  });

  test(`${symbol} should win 3rd line`, () => {
    const board = [['', '', ''], ['', '', ''], [symbol, symbol, symbol]];
    expect(gameStatus(board)).toBe(symbol);
  });

  test(`${symbol} should win main diagonal`, () => {
    const board = [[symbol, '', ''], ['', symbol, ''], ['', '', symbol]];
    expect(gameStatus(board)).toBe(symbol);
  });

  test(`${symbol} should win secondary diagonal`, () => {
    const board = [['', '', symbol], ['', symbol, ''], [symbol, '', '']];
    expect(gameStatus(board)).toBe(symbol);
  });
});

it('should be a tie', () => {
  const board = [['X', 'O', 'X'], ['X', 'O', 'O'], ['O', 'X', 'O']];
  expect(gameStatus(board)).toBe('-');
});
