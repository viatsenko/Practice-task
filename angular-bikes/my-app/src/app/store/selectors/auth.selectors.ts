import { createFeatureSelector, createSelector } from '@ngrx/store';
import {authFeatureKey, AuthState} from "../reducers/auth.reducer";

export const featureSelector = createFeatureSelector<AuthState>(authFeatureKey)
export const userAuthSelector = createSelector(
  featureSelector, state => state.isUserLoggedIn
)
