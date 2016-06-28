import { Updater } from 'redux-elm';

export const init = ({ title, withGithub } = { title: false, withGithub: false }) => ({
  title,
  withGithub,
});

export default new Updater(init())
  .toReducer();
