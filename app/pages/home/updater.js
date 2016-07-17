import { Updater } from 'redux-elm';
import repoViewerUpdater, { init as repoViewerInit } from '../../containers/RepoViewer/updater';

export const init = ({ title, withGithub } = { title: false, withGithub: false }) => ({
  title,
  withGithub,
  repoViewer: repoViewerInit(),
});

export default new Updater(init())
  .case('RepoViewer', (model, action) => ({
    ...model, repoViewer: repoViewerUpdater(model.repoViewer, action)
  }))
  .toReducer();
