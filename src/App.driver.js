import { mount } from 'enzyme';

const appDriver = () => {
  let wrapper;
  return {
    render: node => {
      wrapper = mount(node, { attachTo: document.createElement('div') });
      return wrapper;
    },
    newGame: (p1Name, p2Name) => {
      wrapper.find('[data-hook="p1-input"]').simulate('change', { target: { value: p1Name } });
      wrapper.find('[data-hook="p2-input"]').simulate('change', { target: { value: p2Name } });
      wrapper.find('[data-hook="new-game"]').simulate('click');
    },
    clickACellAt: index =>
      wrapper
        .find('[data-hook="cell"]')
        .at(index)
        .simulate('click'),
    getACellAt: index =>
      wrapper
        .find('[data-hook="cell"]')
        .at(index)
        .text(),
    getWinnerMessage: () => wrapper.find('[data-hook="winner-message"]').text(),
    getTieMessage: () => wrapper.find('[data-hook="tie-message"]').text(),
    isP1NameHasClass: klass => wrapper.find('[data-hook="p1-name"]').hasClass(klass),
    isP2NameHasClass: klass => wrapper.find('[data-hook="p2-name"]').hasClass(klass),
    isRegistrationVisible: () => wrapper.find('[data-hook="registration"]').length > 0,
  };
};

export default appDriver;
