/**
 * Testing home-page updater
 */

import { init } from '../updater';

import { expect } from 'chai';

describe('HomePage updater', () => {
  it('has correct default values', () => {
    expect(init()).to.have.all.keys(['title', 'withGithub', 'repoViewer']);
  });
});
