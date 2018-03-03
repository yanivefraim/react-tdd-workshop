const os = require('os');
const path = require('path');
const fs = require('fs-extra');

const watchMode = process.argv.includes('--watch');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async () => {
  if (!watchMode) {
    global.SERVER.close();
  }

  await fs.remove(DIR);
  await global.BROWSER.close();
};
