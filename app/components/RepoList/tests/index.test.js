import RepoList from '../index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<RepoList />', () => {
  const repos = [{
    name: 'First repo',
    url: 'http://test.com',
    stargazers_count: 3,
    watchers_count: 5,
  }, {
    name: 'Second repo',
    url: 'http://test123.com',
    stargazers_count: 1,
    watchers_count: 0,
  }];

  it('should have provided class', () => {
    const renderedComponent = shallow(<RepoList repos={repos} className="test" />);
    expect(renderedComponent.hasClass('test')).to.eql(true);
  });

  it('should render without repos', () => {
    const renderedComponent = shallow(<RepoList repos={[]} />);
    expect(renderedComponent.find('ListItem').length).to.equal(0);
  });
});
