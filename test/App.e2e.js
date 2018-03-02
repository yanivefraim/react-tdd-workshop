it('should have a title', async () => {
  const page = await global.BROWSER.newPage();
  await page.goto('http://localhost:3000');
  expect(await page.title()).toBe('React App');
});