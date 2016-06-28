import { Updater } from 'redux-elm';

const initialModel = {
  greeted: false,
};

export default new Updater(initialModel)
  .toReducer();
