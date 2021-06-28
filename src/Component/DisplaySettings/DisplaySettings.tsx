import React, {ChangeEvent} from "react";
import s from "../style/chet.module.css";

type DisplaySettings = {
    onChangeMaxValue :(value: number) => void
    onChangeStartValue :(value: number) => void
    startValue: number,
    maxValue: number
    onDeactivatedEditMode :() => void,
    activeDisabledMode: () => void
    counterEditMode: boolean
    errorMax: boolean,
    errorStart: boolean
}
export const DisplaySettings = (props: DisplaySettings) => {

    const setDisabledClass = `${s.ch_containe__left_btn_set} ${props.counterEditMode ? '' : s.disBtn}`

    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.currentTarget.valueAsNumber
        props.onChangeStartValue(newText)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.currentTarget.valueAsNumber
        props.onChangeMaxValue(newText)
    }
    const activeBtn = () => {
        props.onDeactivatedEditMode()
    }

    const disabledBtnSet = () => {
        return !props.counterEditMode || props.startValue < 0 || props.maxValue <= props.startValue
    }

    const inputClass = `${s.ch_containe__left__input} ${props.errorMax || props.errorStart ? s.red_input : ''}`

    return (
        <div className={s.ch_container__left}>
            <div className={s.ch_container__left_el}>
                <div className={s.ch_containe__left__result}>Start value: </div>
                <input
                    onFocus={props.activeDisabledMode}
                    className={inputClass}
                    type="number"
                    onChange={onChangeStart}
                    value={props.startValue}
                    min="-1"
                />

            </div>
            <div className={s.ch_container__left_el}>
                <div className={s.ch_containe__left__result}>Max Value: </div>
                <input
                    onFocus={props.activeDisabledMode}
                    className={inputClass}
                    type="number"
                    onChange={onChangeMax}
                    value={props.maxValue}
                    min="-1"
                />

            </div>
            <button
                className={setDisabledClass}
                disabled={disabledBtnSet()}
                onClick={activeBtn}
            >set</button>
        </div>
    )
}