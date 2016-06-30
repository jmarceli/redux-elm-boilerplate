/**
 * Testing home-page updater
 */

import { init } from '../updater';

import expect from 'expect';

describe('HomePage updater', () => {
  it('has correct default values', () => {
    expect(init()).toEqual({ title: false, withGithub: false });
  });
});
