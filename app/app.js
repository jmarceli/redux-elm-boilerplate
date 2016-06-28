import boot from './boilerplate';

const run = boot('app');

const start = () => run(
  require('./pages/home-page/view').default, // eslint-disable-line global-require
  require('./pages/home-page/updater').default // eslint-disable-line global-require
);

if (module.hot) {
  module.hot.accept('./pages/home-page/view', start);
  module.hot.accept('./pages/home-page/updater', start);
}

start();
