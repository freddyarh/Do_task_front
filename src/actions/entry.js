import { types } from "../types/types"

export const setEntry = (entry) => ({
    type: types.uiNewEntryModal,
    payload: entry
});