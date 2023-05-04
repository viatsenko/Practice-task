import {createSlice} from "@reduxjs/toolkit";

const getInitialState = () => {
    const isUserLoggedIn =JSON.parse(localStorage.getItem('isUserLogIn'));
    return {
        showError: false,
        isUserLoggedIn,
    };
}
const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: getInitialState(),
    reducers: {
        logIn(state){
            state.isUserLoggedIn = true;
            localStorage.setItem('isUserLogIn', JSON.stringify(true))
        },
        signOut(state){
            state.isUserLoggedIn = false;
            localStorage.setItem('isUserLogIn', JSON.stringify(false))
        },
        showError(state, action){
        state.showError = action.payload;
        },
    },
});
export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice.reducer;