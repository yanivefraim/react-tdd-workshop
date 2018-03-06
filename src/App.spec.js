import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should show "O" after second player clicks', () => {
  const p1Name = 'Yaniv';
  const p2Name = 'Computer';
  const wrapper = mount(<App />, { attachTo: document.createElement('div') });
  wrapper.find('[data-hook="p1-input"]').simulate('change', { target: { value: p1Name } });
  wrapper.find('[data-hook="p2-input"]').simulate('change', { target: { value: p2Name } });
  wrapper.find('[data-hook="new-game"]').simulate('click');
  wrapper
    .find('[data-hook="cell"]')
    .at(0)
    .simulate('click');
  wrapper
    .find('[data-hook="cell"]')
    .at(1)
    .simulate('click');
  expect(
    wrapper
      .find('[data-hook="cell"]')
      .at(1)
      .text(),
  ).toBe('O');
});
