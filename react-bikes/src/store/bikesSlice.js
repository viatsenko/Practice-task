import {createSlice} from "@reduxjs/toolkit";

const initialBikes = {networks: [], networkPage: [], stationPage: [], stations: [], networkName: ''};
const bikesSlice = createSlice({
    name: 'bikes',
    initialState: initialBikes,
    reducers: {
        cityBikesNetworks(state, action){
            state.networks = action.payload;
        },
        currentNetworksPage(state, action){
            state.networkPage = action.payload;
        },
        cityBikesStations(state, action){
            state.stations = action.payload;
        },
        currentStationsPage(state, action){
            state.stationPage = action.payload;
        },
        networkName(state, action){
            state.networkName = action.payload;
        }
    }
});
export const bikesActions = bikesSlice.actions;
export default bikesSlice.reducer;
