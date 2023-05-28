import {createSlice} from "@reduxjs/toolkit";
import {BikesState} from "./types";

const initialBikes: BikesState = {networks: [], networkPage: [], stationPage: [], stations: [], networkName: null, networkId: null};
const bikesSlice = createSlice({
    name: 'bikes',
    initialState: initialBikes,
    reducers: {
        setCityBikesNetworks(state, action){
            state.networks = action.payload;
        },
        setCurrentNetworksPage(state, action){
            state.networkPage = action.payload;
        },
        setCityBikesStations(state, action){
            state.stations = action.payload;
        },
        setCurrentStationsPage(state, action){
            state.stationPage = action.payload;
        },
        selectNetwork(state, action){
            state.networkName = action.payload.name;
            state.networkId = action.payload.id;
        }
    }
});
export const bikesActions = bikesSlice.actions;
export default bikesSlice.reducer;
