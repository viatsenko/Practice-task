import { createFeatureSelector, createSelector } from '@ngrx/store';
import {favouriteFeatureKey, FavouriteState} from "../reducers/favourite.reducer";

export const featureSelector = createFeatureSelector<FavouriteState>(favouriteFeatureKey);
export const favouriteSelector = createSelector(
  featureSelector, state => state || {}
);

