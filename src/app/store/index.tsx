import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import createSagaMiddleware, { END } from 'redux-saga';
import { log } from 'utils';
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState?: any) {
  log('store configureStore called');

  let resCompose: any;

  try {
    resCompose = compose(
      applyMiddleware(
        sagaMiddleware
      )
      // , (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    );
    log('devTools');

  } catch (e) {
    resCompose = compose(
      applyMiddleware(
        sagaMiddleware
      ),
    );

    log('no devTools');
  }

  const store = createStore(
    rootReducer,
    initialState,
    resCompose
  ) as any;

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}

export const store = configureStore();

