import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {weatherData: null, city: '', isVisible: false, hasError: false};
const mainSlice = createSlice({
    name: 'mainForm',
    initialState,
    reducers: {
        setFormIsVisible(state, action){
            state.isVisible = action.payload;
        },
        setCity(state, action){
            state.city = action.payload;
        },
        setWeatherData(state, action){
            state.weatherData = action.payload;
        },
        setError(state, action){
            state.hasError = action.payload;
        }
    }
})

export const getData = (city) => {
    return async (dispatchAction) => {
        const getDataHttpRequest = async () => {
                const API_KEY = '65bc27f5fad127364d58ac07a6f3321a';
                console.log("call")
                const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
                const data = await response.json();
            console.log("data", data)

            dispatchAction(mainAction.setCity(''))

                if (data.main){
                    dispatchAction(mainAction.setWeatherData({
                        temp: data.main.temp,
                        city: data.name,
                        country: data.sys.country,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity, //влажность
                        temp_max: data.main.temp_max,
                        temp_min: data.main.temp_min,
                        windDeg: data.wind.deg, //градус ветра
                        windSpeed: data.wind.speed, //скорость ветра
                        description: data.weather[0].description, //описание погоды
                    }))
                    dispatchAction(mainAction.setFormIsVisible(true));
                }
                else {
                    dispatchAction(mainAction.setWeatherData(null));
                    dispatchAction(mainAction.setError(true))
                }
            }
            try {
            await getDataHttpRequest();
            }
            catch (e) {
                dispatchAction(mainAction.setError(true))
            }
        }
}

const store = configureStore({
    reducer: mainSlice.reducer,
});

export const mainAction = mainSlice.actions;
export default store;


