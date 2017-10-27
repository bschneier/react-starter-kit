import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './home';

describe('Home component', () => {
  test('Matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Contains h1 with correct text', () => {
    let wrapper = mount(<Home />);
    let h1 = wrapper.find('h1');
    expect(h1).toHaveLength(1);
    expect(h1.text()).toEqual('My React App');
  });
});