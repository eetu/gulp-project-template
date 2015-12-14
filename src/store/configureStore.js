import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if(module.onReload) {
    module.onReload(() => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer.default || nextReducer);
      return true;
    });
  }

  return store;
}
