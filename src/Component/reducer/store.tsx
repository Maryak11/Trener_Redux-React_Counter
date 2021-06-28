import {combineReducers, createStore} from "redux";
import {chReducer} from "./chReducer";


const reducers = combineReducers({
    counter: chReducer
})

export type RootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers)