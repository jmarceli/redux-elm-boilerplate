import boot from './boilerplate';

// Normally (http://salsita.github.io/redux-elm/getting-started/hello-world.html) this file
// might be much simpler but if you want HMR support (I bet you do)
// there is no other way than using code below

const run = boot('app');

const start = () => run(
  require('./pages/root/view').default, // eslint-disable-line global-require
  require('./pages/root/updater').default // eslint-disable-line global-require
);

if (module.hot) {
  module.hot.accept('./pages/root/view', start);
  module.hot.accept('./pages/root/updater', start);
}

start();
