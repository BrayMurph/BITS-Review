import { useReducer } from "react";
import {
LOAD_POST,
} from "./actions";

export const reducer = (state, action) => {
    switch(action.type) {
        case LOAD_POST:
            return {
                ...state,
                posts: [...action.posts],
            };
            
        default: 
            return state;
    }
};

export function usePostReducer(initialState) {
    return useReducer(reducer, initialState)
}