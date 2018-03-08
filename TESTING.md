# Testing terms / technologies

### Browser tests / E2E

Technologies:

- Selenium based libraries (Protractor, Nightwatch etc.).

- Chrome devtools based (Puppeteer).

- Karma*

Tests are running in node environment, while production code is running on a real / headless browser.

Test use cases:

- browser dependent stuff (scrolling, measurements etc.)

- Navigation

- API calls

### Component tests

Technologies:

Mocha / Jest

Running tests in node environment, using JSDOM to mimic the browser

Test use cases:

React components

### Unit tests

Running tests on small units, using node environment

Test use cases:

Test specifig app logic

### IT tests

Running tests on API endpoints, using node