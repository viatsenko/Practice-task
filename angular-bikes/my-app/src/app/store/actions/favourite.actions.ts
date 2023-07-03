import {createAction, props} from '@ngrx/store';

export const switchLikes = createAction('addLike', props<{id: string, name: string, networkId: string}>());

