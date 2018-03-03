describe('Tic Tac Toe', () => {
  it('should start a new game', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    const page = await global.BROWSER.newPage();
    await page.goto('http://localhost:3000');
    await page.type('[data-hook="p1-input"]', player1);
    await page.type('[data-hook="p2-input"]', player2);
    await page.click('[data-hook="new-game"]');
    const p1Name = await page.$eval('[data-hook="p1-name"]', el => el.innerText);
    const p2Name = await page.$eval('[data-hook="p2-name"]', el => el.innerText);
    expect(p1Name).toBe(player1);
    expect(p2Name).toBe(player2);
  });
});
