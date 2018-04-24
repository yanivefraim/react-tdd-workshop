const winByRow = (symbol, board) => board.some(row => row.every(cell => cell === symbol));
const winByColumn = (symbol, board) => {
  for (let i = 0; i < board.length; i++) {
    let foundDifferentSymbol = false;
    for (let j = 0; j < board[0].length; j++) {
      if (board[j][i] !== symbol) {
        foundDifferentSymbol = true;
        break;
      }
    }
    if (!foundDifferentSymbol) {
      return true;
    }
  }
  return false;
};

const winByDiagonal = (symbol, board) => {
  let foundDifferentSymbol = false;
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] !== symbol) {
      foundDifferentSymbol = true;
      break;
    }
  }
  if (!foundDifferentSymbol) {
    return true;
  }
  foundDifferentSymbol = false;
  for (let i = board.length - 1; i > -1; i--) {
    const rowIndex = board.length - 1 - i;
    if (board[rowIndex][i] !== symbol) {
      foundDifferentSymbol = true;
      break;
    }
  }

  if (!foundDifferentSymbol) {
    return true;
  }
};

export const gameStatus = board => {
  const isWin = symbol =>
    winByRow(symbol, board) || winByColumn(symbol, board) || winByDiagonal(symbol, board);
  const isFull = () => board.every(row => row.every(cell => !!cell));
  if (isWin('X')) {
    return 'X';
  }
  if (isWin('O')) {
    return 'O';
  }
  if (isFull()) {
    return 'TIE';
  }
};
