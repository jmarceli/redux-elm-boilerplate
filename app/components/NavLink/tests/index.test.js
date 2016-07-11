import NavLink from '../index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<NavLink />', () => {
  it('should add active class', () => {
    const context = { router: { isActive: () => true } };
    const renderedComponent = shallow(<NavLink to="/home" />, { context });
    expect(renderedComponent.hasClass('active')).to.equal(true);
  });

  it('should pass props to Link component', () => {
    const context = { router: { isActive: () => true } };
    const renderedComponent = shallow(<NavLink to="/home" />, { context });
    expect(renderedComponent.find('Link').props().to).to.equal('/home');
  });
});
