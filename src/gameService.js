export const gameStatus = board => {
  const line = (symbol, i) => board[i].every(cell => cell === symbol);

  const winByline = symbol => {
    return line(symbol, 0) || line(symbol, 1) || line(symbol, 2);
  };

  const winByRow = symbol => {
    for (let i = 0; i < 3; i++) {
      let l = board.map(e => e[i]);
      if (l.every(cell => cell === symbol)) return true;
    }
    return false;
  };

  const winByDiagonal = symbol => {
    let topRight =
      board[0][0] === symbol &&
      board[1][1] === symbol &&
      board[2][2] === symbol;
    let rightBottom =
      board[0][2] === symbol &&
      board[1][1] === symbol &&
      board[2][0] === symbol;
    return topRight || rightBottom;
  };

  const tie = ()=>{
    board.forEach(element => {
      let emptyCells =element.map(e => e ==='');
      if (emptyCells.length > 1) return false;
    });
    return true
  } 
  
  if (winByline("X") || winByRow("X") || winByDiagonal("X")) {
    return "X";
  }
  if (winByline("O") || winByRow("O") || winByDiagonal("O")) {
    return "O";
  }
  if (tie())
    return "tie"
};
