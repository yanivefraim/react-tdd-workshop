export const gameStatus = board => {
  const isWin = symbol => {
    const columns = board.reduce(
      (acc, row) => row.map((cell, cellI) => [...(acc[cellI] || []), cell]),
      [],
    );
    const diagonal1 = board.map((row, index) => row[index]);
    const diagonal2 = board.map((row, index) => [...row].reverse()[index]);
    return [...board, ...columns, diagonal1, diagonal2].some(row =>
      row.every(cell => cell === symbol),
    );
  };
  if (isWin('X')) {
    return 'X';
  }
  if (isWin('O')) {
    return 'O';
  }
  if (board.every(row => row.every(cell => cell !== ''))) {
    return '-';
  }
};
