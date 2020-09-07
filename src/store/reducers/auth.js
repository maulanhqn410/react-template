import product from 'immer';

import { GET_AUTH_SUCCESS } from 'store/actionTypes/auth';

const INIT_STATE = {
  isLogged: false
};

export const auth = product((draft, { type, payload }) => {
  switch (type) {
    case GET_AUTH_SUCCESS:
      draft.isLogged = true;

    default:
      break;
  }
}, INIT_STATE);
