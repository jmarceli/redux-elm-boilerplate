import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxElm from 'redux-elm';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

export default (containerDomId) => {
  const storeFactory = compose(
    reduxElm,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  let store;

  return (View, updater) => {
    if (!store) {
      store = storeFactory(combineReducers({
        root: updater,
        routing: routerReducer,
      }));
    } else {
      store.replaceReducer(combineReducers({
        root: updater,
        routing: routerReducer,
      }));
    }
    const history = syncHistoryWithStore(browserHistory, store);

    render((
      <Provider store={store}>
        <View
          history={history}
          dispatch={store.dispatch}
        />
      </Provider>
    ), document.getElementById(containerDomId));
  };
};
