import Footer from '../index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Footer />', () => {
  it('should have provided class', () => {
    const renderedComponent = shallow(<Footer className="test" />);
    expect(renderedComponent.hasClass('test')).to.equal(true);
  });
});
