export const gameStatus = board => {
  const line = (symbol, i) => board[i].every(cell => cell === symbol);

  const winByline = symbol => {
    return line(symbol, 0) || line(symbol, 1) || line(symbol, 2);
  };

  const winByRow = symbol => {
    let l;
    for (let i = 0; i < 3; i++) {
      l = board.map(e => e[i]);
      if (l.every(cell => cell === symbol)) return true;
    }
    return false;
  };

  const winByDiagonal = symbol => {
    const topRight = board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol;
    const rightBottom = board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol;
    return topRight || rightBottom;
  };

  const tie = () => {
    let emptyCells;
    let cellsCount = 0;
    board.forEach(element => {
      emptyCells = element.filter(e => e === '');
      cellsCount += emptyCells.length;
    });
    return cellsCount === 0;
  };

  if (winByline('X') || winByRow('X') || winByDiagonal('X')) {
    return 'X';
  }
  if (winByline('O') || winByRow('O') || winByDiagonal('O')) {
    return 'O';
  }
  if (tie()) return 'tie';
};
