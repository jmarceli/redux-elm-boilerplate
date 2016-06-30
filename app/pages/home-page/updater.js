import { Updater } from 'redux-elm';
import githubFormUpdater, { init as githubFormInit } from '../../containers/GithubForm/updater';

export const init = ({ title, withGithub } = { title: false, withGithub: false }) => ({
  title,
  withGithub,
  githubForm: githubFormInit(),
});

export default new Updater(init())
  .case('GithubForm', (model, action) => ({ ...model, githubForm: githubFormUpdater(model.githubForm, action) }))
  .toReducer();
