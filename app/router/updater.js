import React from 'react';
import { Updater } from 'redux-elm';
import homeUpdater, { init as homeInit } from '../pages/home/updater';
import simpleUpdater, { init as simpleInit } from '../pages/simple/updater';
import FeaturesDescription from '../components/FeaturesDescription';

// TODO: initialize all available pages here
export const initialModel = {
  // models are keyed by modelKey defined in src/routing.js
  homePage: homeInit({
    title: 'Start your next react project in seconds',
    withGithub: true,
  }),
  homePage2: homeInit({
    title: 'This is secondary home page',
  }),
  simplePage: simpleInit({
    title: 'Features',
    content: (<FeaturesDescription />),
  }),
};

export default new Updater(initialModel)
  // each case should contain one of the action identifiers defined in src/routing.js
  .case('HomePage', (model, action) => (
    { ...model, homePage: homeUpdater(model.homePage, action) }
  ))
  .case('HomePage2', (model, action) => (
    { ...model, homePage2: homeUpdater(model.homePage2, action) }
  ))
  .case('SimplePage', (model, action) => (
    { ...model, simplePage: simpleUpdater(model.simplePage, action) }
  ))
  .toReducer();
