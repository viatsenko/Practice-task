import {createSlice} from "@reduxjs/toolkit";

const getInitialState = () => {
    const likes = localStorage.getItem('likes')
    const initialsLikes = likes ? JSON.parse(likes) : {};
    return initialsLikes;
}
const likesSlice = createSlice({
    name: 'likes',
    initialState: getInitialState(),
    reducers: {
        addLike(state, action) {
            const id = action.payload.id;
            const name = action.payload.name;
            const networkId = action.payload.networkId;
            state[id] = {name, networkId};
            localStorage.setItem('likes',  JSON.stringify({...state}))
        },
        removeLike(state, action) {
            delete state[action.payload];
            localStorage.setItem('likes',  JSON.stringify({...state}))
        }
    }
})
export const likesActions = likesSlice.actions;
export default likesSlice.reducer;
