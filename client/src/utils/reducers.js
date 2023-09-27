import { useReducer } from "react";
import {
ADD_COMMENT,
UPDATE_COMMENT,
REMOVE_COMMENT,
} from "./actions";

export const reducer = (state, action) => {
    
};

export function usePostReducer(initialState) {
    return useReducer(reducer, initialState)
}