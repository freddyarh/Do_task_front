import { types } from "../types/types";

// const initialState = {
//      id: 121321,
//      title: 'fernando',
//      description: 'This is the description',
//      ranking: 4,
//      image: 'path image' 
// }

export const setEntriesReducer = (state = {}, action) => {

    switch (action.type) {
        case types.setEntriesReducer:

            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.getEntriesReducer:
            return {}

        default:
            return state;
    }
}