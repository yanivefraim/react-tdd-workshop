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

test('user shuldnt click on a cell with value ', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);
  driver.clickACellAt(1);
  expect(driver.getACellAt(1)).toBe('X');
  driver.clickACellAt(1);
  expect(driver.getACellAt(1)).toBe('X');
});





// test("should be tie ", () => {
//   const board = [["O", "X", "O"], ["O", "X", "X"], ["X", "O", "O"]];
//                    0     1   2     3   4   5       6     7   8
//expect(gameStatus(board)).toBe("tie");
// });


test('game finish with tie', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);
  driver.clickACellAt(1);
  driver.clickACellAt(0);
  driver.clickACellAt(4);
  driver.clickACellAt(2);
  driver.clickACellAt(5);
  driver.clickACellAt(3);
  driver.clickACellAt(6);
  driver.clickACellAt(7);
  driver.clickACellAt(8);
  expect(driver.getTieMessage()).toBe(`game finish with tie!`);
});




