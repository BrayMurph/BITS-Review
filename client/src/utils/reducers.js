import { useReducer } from "react";
import {

} from "./actions";

export const reducer = (state, action) => {

};

export function usePostReducer(initialState) {
    return useReducer(reducer, initialState)
}