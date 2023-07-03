import {createReducer, on} from '@ngrx/store';
import { logIn, logOut } from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  isUserLoggedIn: boolean;
}

function getInitialState(): AuthState {
  const json = localStorage.getItem('isUserLogIn');
  const isUserLoggedIn = JSON.parse(json || "null");
  return isUserLoggedIn;
}
export const initialState = getInitialState();

export const userAuthReducer = createReducer(
  initialState,
  on(logIn, state => ({
    ...state, isUserLoggedIn: true,
  })),
  on(logOut, state => ({
    ...state, isUserLoggedIn: false,
  }))
);
