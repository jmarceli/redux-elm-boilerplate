import { Updater } from 'redux-elm';
import homeUpdater, { init as homeInit } from '../home-page/updater';

export const initialModel = {
  // models are keyed by modelKey defined in src/routing.js
  homePage: homeInit('Start your next react project in seconds'),
  homePage2: homeInit('This is secondary home page'),
};

export default new Updater(initialModel)
  // each case should contain one of the action identifiers defined in src/routing.js
  .case('HomePage', (model, action) => ({ ...model, homePage: homeUpdater(model.homePage, action) }))
  .case('HomePage2', (model, action) => ({ ...model, homePage2: homeUpdater(model.homePage2, action) }))
  .toReducer();
