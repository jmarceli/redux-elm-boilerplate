/**
 * Testing our FeaturesDescription component
 */

import FeaturesDescription from '../index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<FeaturesDescription />', () => {
  it('should render ListGroup component', () => {
    const renderedComponent = shallow(<FeaturesDescription />);
    expect(renderedComponent.find('ListGroup').length).to.equal(1);
  });
});
