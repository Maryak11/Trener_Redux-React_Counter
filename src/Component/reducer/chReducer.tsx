import React from "react";
import {type} from "os";

type MaxValueType = { type: "MAX-VALUE", value: number }
type StartValueType = {type: "START-VALUE", value: number}
type CounterIncType = {type: "COUNTER-INC"}
type ResetIncType = {type: "RESET-INC"}
type AddErrorMaxValueType = {type: "ADD-ERROR-MAX-VALUE-TYPE"}
type DeleteErrorMaxValueType = {type: "DELETE-ERROR-MAX-VALUE-TYPE"}
type AddErrorStartValueType = {type: "ADD-ERROR-START-VALUE-TYPE"}
type DeleteErrorStartValueType = {type: "DELETE-ERROR-START-VALUE-TYPE"}
type CounterActiveType = {type: "COUNTER-ACTIVE"}
type CounterDisActiveType = {type: "COUNTER-DIS-ACTIVE"}
type ChangeMaxValue = {type: "CHANGE-MAX-VALUE", value: number}
type ChangeStartValue = {type: "CHANGE-START-VALUE", value: number}

export type ActionType = MaxValueType
    | StartValueType
    | CounterIncType
    | ResetIncType
    | AddErrorMaxValueType
    | DeleteErrorStartValueType
    | AddErrorStartValueType
    | DeleteErrorMaxValueType
    | CounterActiveType
    | CounterDisActiveType
    | ChangeMaxValue
    | ChangeStartValue

export type StateType = {
    maxValue: number,
    startValue: number,
    counter: number,
    counterEditMode: boolean,
    errorMaxValue: boolean,
    errorStartValue: boolean
}

export const initialState: StateType= {
    maxValue: 5,
    startValue: 0,
    counter: 0,
    counterEditMode: false,
    errorMaxValue: false,
    errorStartValue: false
}

export const chReducer = (state: StateType = initialState, action: ActionType): StateType=> {
        switch (action.type){
            case "COUNTER-INC":
                return {...state, counter: state.counter + 1}
            case "RESET-INC":
                return {...state, counter: state.startValue}
            case "ADD-ERROR-START-VALUE-TYPE":
                return {...state, errorStartValue: state.errorStartValue = true }
            case "ADD-ERROR-MAX-VALUE-TYPE":
                return {...state, errorMaxValue: state.errorMaxValue = true}
            case "DELETE-ERROR-MAX-VALUE-TYPE":
                return {...state, errorMaxValue: state.errorMaxValue = false}
            case "DELETE-ERROR-START-VALUE-TYPE":
                return {...state, errorStartValue: state.errorStartValue = false}
            case "START-VALUE":
                return {...state, startValue: state.startValue = action.value}
            case "MAX-VALUE":
                return {...state, maxValue: state.maxValue = action.value}
            case "COUNTER-ACTIVE":
                return {...state, counterEditMode: state.counterEditMode = true}
            case "COUNTER-DIS-ACTIVE":
                return {...state, counterEditMode: state.counterEditMode = false}
            case "CHANGE-START-VALUE":
                return {...state, startValue: state.startValue = action.value}
            case "CHANGE-MAX-VALUE":
                return {...state, maxValue: state.maxValue = action.value}
            default:
                return state

        }
}

export const counterIncAC = () :CounterIncType => {
    return {
        type: "COUNTER-INC"
    }
}
export const resetIncAC = () :ResetIncType => {
    return {
        type: "RESET-INC"
    }
}

export const startValueAC = (value: number) :StartValueType => {
    return {
        type: "START-VALUE",
        value
    }
}
export const maxValueAC = (value: number) :MaxValueType => {
    return {
        type: "MAX-VALUE",
        value
    }
}

export const counterActiveEditModeAC = () :CounterActiveType => {
    return {
        type:"COUNTER-ACTIVE"
    }
}
export const counterDisabledEditModeAC = () :CounterDisActiveType => {
    return {
        type:"COUNTER-DIS-ACTIVE"
    }
}
export const addErrorStartValueAC = () :AddErrorStartValueType => {
    return {
        type:"ADD-ERROR-START-VALUE-TYPE"
    }
}

export const addErrorMaxValueAC = (): AddErrorMaxValueType => {
    return {
        type:"ADD-ERROR-MAX-VALUE-TYPE"
    }
}
export const deleteErrorStartValueAC = () :DeleteErrorStartValueType => {
    return {
        type:"DELETE-ERROR-START-VALUE-TYPE"
    }
}
export const deleteErrorMaxValueAC = () : DeleteErrorMaxValueType => {
    return {
        type:"DELETE-ERROR-MAX-VALUE-TYPE"
    }
}
export const changeMaxValueAC = (value: number) : ChangeMaxValue => {
    return {
        type:"CHANGE-MAX-VALUE",
        value
    }
}
export const changeStartValueAC = (value: number) : ChangeStartValue => {
    return {
        type:"CHANGE-START-VALUE",
        value
    }
}
