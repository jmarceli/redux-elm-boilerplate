import boot from './boilerplate';

// Normally (http://salsita.github.io/redux-elm/getting-started/hello-world.html) this file
// might be much simpler but if you want HMR support (I bet you do)
// there is no other way than using code below

const run = boot('app');

const start = () => run(
  require('./router/view').default, // eslint-disable-line global-require
  require('./router/updater').default // eslint-disable-line global-require
);

if (module.hot) {
  module.hot.accept('./router/view', start);
  module.hot.accept('./router/updater', start);
}

start();
