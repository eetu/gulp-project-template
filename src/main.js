import React from 'react';
import App from './containers/app';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
