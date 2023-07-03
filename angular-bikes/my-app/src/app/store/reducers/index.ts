import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {bikesFeatureKey, bikesReducer, BikesState} from './bikes.reducer';
import {userAuthReducer, AuthState, authFeatureKey} from "./auth.reducer";
import {favouriteFeatureKey, favouriteReducer, FavouriteState} from "./favourite.reducer";

export interface State {
  [bikesFeatureKey]: BikesState,
  [authFeatureKey]: AuthState,
  [favouriteFeatureKey]: FavouriteState,
}

export const reducers: ActionReducerMap<State> = {
  [bikesFeatureKey]: bikesReducer,
  [authFeatureKey]: userAuthReducer,
  [favouriteFeatureKey]: favouriteReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
