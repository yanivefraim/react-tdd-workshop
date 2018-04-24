const checkLine = (board, symbol) => board.some(row => row.every(cell => cell === symbol));

const checkCol = (board, symbol) =>
  [0, 1, 2].some(colIndex => board.every(row => row[colIndex] === symbol));

const checkLeftDiagonal = (board, symbol) =>
  board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol;

const checkRightDiagonal = (board, symbol) =>
  board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol;

const allCellsTaken = board => board.every(row => row.every(cell => cell === 'X' || cell === 'O'));

export const gameStatus = board => {
  const isWin = symbol =>
    checkLine(board, symbol) ||
    checkCol(board, symbol) ||
    checkLeftDiagonal(board, symbol) ||
    checkRightDiagonal(board, symbol);

  if (isWin('X')) {
    return 'X';
  }

  if (isWin('O')) {
    return 'O';
  }

  if (allCellsTaken(board)) {
    return 'tie';
  }
};
