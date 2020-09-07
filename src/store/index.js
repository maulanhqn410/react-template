import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import reducers, { history } from './reducers';
import rootSaga from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware, routerMiddleware(history)];

export const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default { store };
