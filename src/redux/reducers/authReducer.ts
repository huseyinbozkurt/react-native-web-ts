import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/types/authActionTypes';

import {AuthActions, TodoState} from '../actions/authActions';

const initialState: TodoState = {
  pending: false,
  auth: [],
  error: null,
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.auth,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
