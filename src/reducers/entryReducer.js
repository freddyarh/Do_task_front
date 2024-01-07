
import { types } from '../types/types';

export const entryReducer = ( state = [], action ) => {

    switch (action.type) {
        case types.uiNewEntryModal:
            return [ ...state, action.payload ]
            
        
        case types.uiFinishEntryModal:
            return {
                ...state,
                loading: false
            }
    
        default:
            return state;
    }
}