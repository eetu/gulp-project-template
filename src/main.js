import React from 'react';
import App from './containers/app';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
