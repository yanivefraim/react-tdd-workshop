const appDriver = page => ({
  navigate: () => page.goto('http://localhost:3000'),
  newGame: async (player1, player2) => {
    await page.type('[data-hook="p1-input"]', player1);
    await page.type('[data-hook="p2-input"]', player2);
    await page.click('[data-hook="new-game"]');
  },
  getPlayer1Title: () => page.$eval('[data-hook="p1-name"]', el => el.innerText),
  getPlayer2Title: () => page.$eval('[data-hook="p2-name"]', el => el.innerText),
  player1HasBorder: () => page.$eval('[data-hook="p1-name"]', el => Boolean(el.style.border)),
  player2HasBorder: () => page.$eval('[data-hook="p2-name"]', el => Boolean(el.style.border)),
  clickACellAt: index => page.$$eval('[data-hook="cell"]', (cells, i) => cells[i].click(), index),
  getACellValueAt: index =>
    page.$$eval('[data-hook="cell"]', (cells, i) => cells[i].innerText, index),
  getWinnerMessage: () => page.$eval('[data-hook="winner-message"]', el => el.innerText),
  hasWinner: async () => !!(await page.$('[data-hook="winner-message"]')),
  isRegistrationVisible: async () =>
    page.$$eval('[data-hook="registration-form"]', elms => elms.length),
});

module.exports = appDriver;
