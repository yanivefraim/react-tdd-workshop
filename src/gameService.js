export const gameStatus = board => {
  const isWin = symbol => board[0].every(cell => cell === symbol);
  if (isWin('X')) {
    return 'X';
  }
};
