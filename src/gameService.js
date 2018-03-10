export const gameStatus = board => {
  const isWinRow = symbol => board.some(row => row.every(cell => cell === symbol));
  if (isWinRow('X')) {
    return 'X';
  }
  if (isWinRow('O')) {
    return 'O';
  }

  const isWinColumn = symbol =>
    board.every(row => row[0] === symbol) ||
    board.every(row => row[1] === symbol) ||
    board.every(row => row[2] === symbol);
  if (isWinColumn('X')) {
    return 'X';
  }
  if (isWinColumn('O')) {
    return 'O';
  }

  const isWinDiagonally = symbol => board.every((row, ind) => row[ind] === symbol);
  if (isWinDiagonally('X')) {
    return 'X';
  }
  if (isWinDiagonally('O')) {
    return 'O';
  }

  const isWinDiagonally2nd = symbol =>
    board.every((row, ind, arr) => row[arr.length - ind - 1] === symbol);
  if (isWinDiagonally2nd('X')) {
    return 'X';
  }
  if (isWinDiagonally2nd('O')) {
    return 'O';
  }

  return 'Tie';
};
