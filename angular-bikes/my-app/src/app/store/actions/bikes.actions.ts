import {createAction, props} from '@ngrx/store';
import {NetworkType, StationType} from "../reducers/bikes.reducer";


export const setStations = createAction('setStations', props<{payload: Array<StationType>}>());
export const selectNetworks = createAction('selectNetworks', props<{id: string | undefined; name: string}>())
export const clearSelectedNetwork = createAction('clearSelectedNetwork')

export const loadNetworks = createAction('loadNetworks');
export const loadNetworksSuccess = createAction('loadNetworksSuccess', props<{payload: Array<NetworkType>}>());
export const loadNetworksError = createAction('loadNetworksError', props<{payload: string}>());

export const loadStations = createAction('loadStations', props<{id: string}>());
export const loadStationsSuccess = createAction('loadStationsSuccess', props<{payload: Array<StationType>}>());
export const loadStationsError = createAction('loadStationsError', props<{payload: string}>());
