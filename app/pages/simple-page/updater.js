import { Updater } from 'redux-elm';

export const init = ({ title, content } = { title: '', content: '' }) => ({
  title,
  content,
});

export default new Updater(init())
  .toReducer();
