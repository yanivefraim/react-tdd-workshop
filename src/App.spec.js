import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import appDriver from './App.driver';

configure({ adapter: new Adapter() });
let driver;
beforeEach(() => (driver = appDriver()));

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should show "O" after second player clicks', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);
  driver.clickACellAt(0);
  driver.clickACellAt(1);
  expect(driver.getACellAt(1)).toBe('O');
});

test('"O" should win the game', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);
  driver.clickACellAt(4);
  driver.clickACellAt(0);
  driver.clickACellAt(5);
  driver.clickACellAt(1);
  driver.clickACellAt(7);
  driver.clickACellAt(2);
  expect(driver.getWinnerMessage()).toBe(`${p2Name} won!`);
});

test("User can't change cell status once it's set", () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);
  driver.clickACellAt(0);
  driver.clickACellAt(0);
  expect(driver.getACellAt(0)).toBe('X');
});

test('should display tie message', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);

  driver.clickACellAt(1); // x
  driver.clickACellAt(2); // o
  driver.clickACellAt(3); // x
  driver.clickACellAt(5); // o
  driver.clickACellAt(4); // x
  driver.clickACellAt(7); // o
  driver.clickACellAt(6); // x
  driver.clickACellAt(0); // o
  driver.clickACellAt(8); // x

  expect(driver.getTieMessage()).toBe("It's a tie!");
});

test('on init should apply class to current player', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);

  expect(driver.isP1NameHasClass('current-player')).toEqual(true);
  expect(driver.isP2NameHasClass('current-player')).toEqual(false);
});

test('should switch current player class after init', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);

  driver.clickACellAt(1);

  expect(driver.isP1NameHasClass('current-player')).toEqual(false);
  expect(driver.isP2NameHasClass('current-player')).toEqual(true);
});

test('should hide registration after game start', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);

  expect(driver.isRegistrationVisible()).toEqual(true);

  driver.newGame(p1Name, p2Name);

  expect(driver.isRegistrationVisible()).toEqual(false);
});

test('should hide game board before game start', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);

  expect(driver.isGameBoardVisible()).toEqual(false);

  driver.newGame(p1Name, p2Name);

  expect(driver.isGameBoardVisible()).toEqual(true);
});
