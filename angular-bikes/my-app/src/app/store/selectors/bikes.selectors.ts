import { createFeatureSelector, createSelector } from '@ngrx/store';
import {bikesFeatureKey, BikesState} from "../reducers/bikes.reducer";


export const featureSelector = createFeatureSelector<BikesState>(bikesFeatureKey);
export const networksSelector = createSelector(
  featureSelector, state => state.networks
);
export const stationsSelector = createSelector(
  featureSelector, state => state.stations
);
export const networkNameSelector= createSelector(
  featureSelector, state => state.networkName
)
export const networkIdSelector = createSelector(
  featureSelector, state => state.networkId
)
