import { createReducer, on } from '@ngrx/store';
import {
  selectNetworks,
  clearSelectedNetwork,
  loadNetworksSuccess, loadNetworks, loadNetworksError,
  loadStationsSuccess, loadStations, loadStationsError
} from '../actions/bikes.actions';

export const bikesFeatureKey = 'bikes';

export type NetworkType = {
  id: string;
  name: string;
  location: {
    city: string;
  };
  company: Array<string>;
};
export type StationType = {
  id: string;
  name: string;
  free_bikes: number;
}

export interface BikesState {
  networks: Array<NetworkType>;
  stations: Array<StationType>;
  networkName?: string;
  networkId?: string;
  stationLength?: number;

  error?: string;
  isLoadingNetworks: boolean;
  isLoadingStations: boolean;
}

export const initialState: BikesState = {
  networks: [],
  stations: [],

  isLoadingNetworks: false,
  isLoadingStations: false,
};

export const bikesReducer = createReducer(
  initialState,
  on(loadNetworksSuccess, (state, action) => ({
    ...state, networks: action.payload,
    isLoadingNetworks: false
  })),
  on(loadStationsSuccess, (state, action) => ({
    ...state, stations: action.payload,
    isLoadingStations: false
  })),
  on(selectNetworks, (state, action) => ({
    ...state,
    networkName: action.name,
    networkId: action.id,
  })),
  on(clearSelectedNetwork, (state) => ({
    ...state,
    networkName: undefined,
    networkId: undefined,
    stations: [],
  })),
  on(loadNetworks, (state) => ({
    ...state,
    isLoadingNetworks: true
  })),
  on(loadNetworksError, (state, action) => ({
    ...state, error: action.payload,
    isLoadingNetworks: false,
  })),
  on(loadStations, (state) => ({
    ...state, isLoadingStations: true
  })),
  on(loadStationsError, (state, action) => ({
    ...state, error: action.payload,
  })),

);

