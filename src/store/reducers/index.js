import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['informations'],
};

const infoConfig = {
  key: 'informations',
  storage,
  whitelist: ['information', 'listData'],
  stateReconciler: hardSet,
};

export default persistReducer(
  persistConfig,
  combineReducers({}),
);
