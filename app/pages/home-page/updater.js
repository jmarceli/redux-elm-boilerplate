import { Updater } from 'redux-elm';

export const init = title => ({
  title,
});

export default new Updater(init('uninitialized'))
  .toReducer();
