const appDriver = require('./App.driver');

describe('Tic Tac Toe', () => {
  let driver;
  let page;

  beforeEach(async () => {
    page = await global.BROWSER.newPage();
    driver = appDriver(page);
    await driver.navigate();
  });

  test('should start a new game', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await driver.newGame(player1, player2);
    const p1Name = await driver.getPlayer1Title();
    const p2Name = await driver.getPlayer2Title();
    expect(p1Name).toBe(player1);
    expect(p2Name).toBe(player2);
  });

  test('should show "X" after first player clicks', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await driver.newGame(player1, player2);
    expect(await driver.getACellValueAt(0)).toBe('');
    await driver.clickACellAt(0);
    expect(await driver.getACellValueAt(0)).toBe('X');
  });

  test('first player should win the game', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await driver.newGame(player1, player2);
    await driver.clickACellAt(0);
    await driver.clickACellAt(3);
    expect(await driver.hasWinner()).toBe(false);
    await driver.clickACellAt(1);
    await driver.clickACellAt(4);
    await driver.clickACellAt(2);
    expect(await driver.getWinnerMessage()).toBe(`${player1} won!`);
  });

  test('should save game state', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await driver.newGame(player1, player2);
    await driver.clickACellAt(0);
    await driver.clickACellAt(3);
    await driver.clickSaveGame();
    const gameState = await driver.getGameStateFromLocalStorage();

    expect(JSON.parse(gameState)).toEqual({
      p1Name: 'Yaniv',
      p2Name: 'Computer',
      board: [['X', '', ''], ['O', '', ''], ['', '', '']],
      winner: '',
      tie: false,
      currentPlayer: 'X',
    });
  });

  test('should load game state', async () => {
    const gameState = {
      p1Name: 'Yaniv',
      p2Name: 'Computer',
      board: [['X', '', ''], ['O', '', ''], ['', '', '']],
      winner: '',
      tie: false,
      currentPlayer: 'X',
    };

    await driver.setGameStateFromLocalStorage(gameState);
    await driver.clickLoadGame();

    expect(await driver.getACellValueAt(0)).toBe('X');
    expect(await driver.getACellValueAt(3)).toBe('O');
    expect(await driver.getPlayer1Title()).toBe(gameState.p1Name);
    expect(await driver.getPlayer2Title()).toBe(gameState.p2Name);
  });
});
