const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const puppeteer = require('puppeteer');

const watchMode = process.argv.includes('--watch');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async () => {
  if (!watchMode) {
    await new Promise(resolve => {
      const app = express();

      app.use(express.static(path.join(__dirname, '..', '..', 'build')));
      app.use(express.static(path.join(__dirname, '..', '..', 'public')));

      global.SERVER = app.listen(3000, resolve);
    });
  }

  const browser = (global.BROWSER = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  }));

  await fs.outputFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
