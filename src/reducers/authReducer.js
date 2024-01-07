import { types } from "../types/types";

// const initialState = {
//     uid: 121321,
//     name: 'fernando',
//     dir : {
//         numero: 1213
//     }
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:

            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state;
    }
}