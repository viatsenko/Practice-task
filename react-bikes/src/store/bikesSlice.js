import {createSlice} from "@reduxjs/toolkit";

const initialBikes = {networks: [], networkPage: [], stationPage: [], stations: [], networkName: '', networkId: null};
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
        selectNetwork(state, action){
            state.networkName = action.payload.name;
            state.networkId = action.payload.id;
        }
    }
});
export const bikesActions = bikesSlice.actions;
export default bikesSlice.reducer;
