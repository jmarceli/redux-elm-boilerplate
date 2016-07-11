/**
 * Testing our ButtonLinkMain component
 */

import ButtonLinkMain from '../index';

import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ButtonLinkMain />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <ButtonLinkMain href="http://example.com">
        {children}
      </ButtonLinkMain>
    );
    expect(renderedComponent.contains(children)).to.equal(true);
  });

  it('should adopt the className', () => {
    const renderedComponent = shallow(<ButtonLinkMain href="http://example.com" className="test" />);
    expect(renderedComponent.find('div').hasClass('test')).to.equal(true);
  });

  it('should render an <a> tag', () => {
    const renderedComponent = shallow(<ButtonLinkMain href="http://example.com" />);
    expect(renderedComponent.find('Link').length).to.equal(1);
  });

  it('should handle click events', () => {
    const onClickSpy = sinon.spy();
    const renderedComponent = shallow(<ButtonLinkMain href="http://example.com" onClick={onClickSpy} />);
    renderedComponent.find('Link').simulate('click');
    expect(onClickSpy.called).to.equal(true);
  });
});
