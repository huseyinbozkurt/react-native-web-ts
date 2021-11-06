import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './types/authActionTypes';

export interface Person {
  id: number;
  title: string;
}

export interface TodoState {
  pending: boolean;
  auth: Person[];
  error: string | null;
}

export interface LoginSuccessPayload {
  auth: Person[];
}

export interface LoginFailurePayload {
  error: string;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export type AuthActions = LoginRequest | LoginSuccess | LoginFailure;

export const LoginRequest = (): LoginRequest => ({
  type: LOGIN_REQUEST,
});

export const LoginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const LoginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
});
