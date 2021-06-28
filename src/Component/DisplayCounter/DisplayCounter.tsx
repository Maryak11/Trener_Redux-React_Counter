import React from "react";
import s from "../style/chet.module.css";
import {StateType} from "../reducer/chReducer";

type DisplayCounterPropsType = {
    addIncrement: () => void,
    counter: number
    resetIncCounter: () => void
    counterEditMode: boolean
    maxValue: number
    minValue: number
    errorMax: boolean,
    errorStart: boolean
}

export const DisplayCounter = (props: DisplayCounterPropsType) => {
    const disabledBtnInc = () => {
        if (props.counterEditMode) {
            return true
        }
        return props.counter === props.maxValue
    }
    const disabledBtnReset = () => {
        if (props.counterEditMode) {
            return true
        }
        return props.minValue === props.counter
    }

    let editClass = `${s.ch_container__right__up_el} ${props.errorMax || props.errorStart ? s.red : ''}`
    const counterClass = `${s.ch_container__right__up_el} ${props.counter === props.maxValue ? s.red : ''}`
    let editText = props.errorMax || props.errorStart ? "Incorrating value" : "enter values and press \"set\""

    return (
        <div className={s.ch_container__right}>
            <div className={s.ch_container__right__up}>
                {
                    props.counterEditMode
                        ? <div className={editClass}>{editText}</div>
                        : <div className={counterClass}>{props.counter}</div>
                }

            </div>
            <div className={s.ch_container__right__down}>
                <button
                    disabled={disabledBtnInc()}
                    className={s.ch_container__right__down_btn_incr}
                    onClick={props.addIncrement}
                >incr
                </button>
                <button
                    disabled={disabledBtnReset()}
                    className={s.ch_container__right__down_btn_reset}
                    onClick={props.resetIncCounter}
                >reset
                </button>
            </div>
        </div>
    )
}