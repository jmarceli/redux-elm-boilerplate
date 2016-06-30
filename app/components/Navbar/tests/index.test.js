import Navbar from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Navbar />', () => {
  it('should have provided class', () => {
    const renderedComponent = shallow(<Navbar className="test" />);
    expect(renderedComponent.hasClass('test')).toEqual(true);
  });
});
