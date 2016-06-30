import Footer from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Footer />', () => {
  it('should have provided class', () => {
    const renderedComponent = shallow(<Footer className="test" />);
    expect(renderedComponent.hasClass('test')).toEqual(true);
  });
});
