import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { auth } from './auth';

export const history = createBrowserHistory();

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth
  });

export default rootReducer(history);
