import {createReducer, on} from '@ngrx/store';
import {switchLikes} from '../actions/favourite.actions';

export const favouriteFeatureKey = 'favourite';

function getInitialState(): FavouriteState {
  const likes = localStorage.getItem('likes');
  const initialLikes = JSON.parse(likes || "null")
  return initialLikes;
}

export type FavouriteState = Record<string, {
  name: string,
  networkId: string,
}>;
export const initialState = getInitialState();

export const favouriteReducer = createReducer(
  initialState,
  on(switchLikes, (state, action) => {
    const id = action.id;
    const name = action.name;
    const networkId = action.networkId;
    const newState = {...state};
    if (newState[id] !== undefined) {
      delete  newState[action.id];
    } else {
      newState[id] = {name, networkId};
    }
    localStorage.setItem('likes', JSON.stringify({...newState}))
    return newState;
  }),

);

