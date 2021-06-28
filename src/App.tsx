import React, {useEffect} from 'react';
import './App.css';
import {
    ActionType, addErrorMaxValueAC,
    addErrorStartValueAC, changeMaxValueAC, changeStartValueAC, counterActiveEditModeAC, counterDisabledEditModeAC,
    counterIncAC, deleteErrorMaxValueAC, deleteErrorStartValueAC,
    maxValueAC,
    resetIncAC,
    startValueAC
} from "./Component/reducer/chReducer";
import s from "./Component/style/chet.module.css";
import {DisplaySettings} from "./Component/DisplaySettings/DisplaySettings";
import {DisplayCounter} from "./Component/DisplayCounter/DisplayCounter";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {selector} from "./Component/reducer/selector";


function App() {

    const dispatch = useDispatch<Dispatch<ActionType>>();
    const {
        maxValue,
        startValue,
        counter,
        counterEditMode,
        errorMaxValue,
        errorStartValue
    } = useSelector(selector)

    useEffect(() => {
        const startValueLS = localStorage.getItem('startValue')
        const maxValuesLS = localStorage.getItem('maxValue')
        if (startValueLS && maxValuesLS) {
            const newStartValue = JSON.parse(startValueLS)
            const newMaxValue = JSON.parse(maxValuesLS)
            dispatch(startValueAC(newStartValue))
            dispatch(maxValueAC(newMaxValue))
            dispatch(resetIncAC())
            if (newStartValue < 0) {
                dispatch(addErrorStartValueAC())
                dispatch(counterActiveEditModeAC())
            }
            if (newMaxValue <= newStartValue) {
                dispatch(counterActiveEditModeAC())
                dispatch(addErrorStartValueAC())
                dispatch(addErrorMaxValueAC())

            }
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [startValue, maxValue])

    const addIncrement = () => {
        dispatch(counterIncAC())
    }

    const resetCounter = () => {
        dispatch(resetIncAC())
    }

    const onChangeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC(value))
        dispatch(deleteErrorMaxValueAC())
        dispatch(deleteErrorStartValueAC())
        if (value <= startValue) {
            dispatch(addErrorMaxValueAC())
            dispatch(addErrorStartValueAC())
        }
        if (value <= 0) {
            dispatch(addErrorMaxValueAC())
        }
        if (startValue < 0) {
            dispatch(addErrorStartValueAC())
        }
    }
    const onChangeStartValue = (value: number) => {
        dispatch(changeStartValueAC(value))
        dispatch(deleteErrorStartValueAC())
        if (value < 0 || maxValue <= startValue || startValue === maxValue || maxValue === 0) {
            dispatch(addErrorStartValueAC())
        }
    }
    const activeDisabledMode = () => {
        dispatch(counterActiveEditModeAC())
    }
    const onDeactivatedEditMode = () => {
        dispatch(resetIncAC())
        dispatch(counterDisabledEditModeAC())
    }

    return (
        <div className={s.ch_container}>
            <DisplaySettings
                activeDisabledMode={activeDisabledMode}
                counterEditMode={counterEditMode}
                onDeactivatedEditMode={onDeactivatedEditMode}
                onChangeStartValue={onChangeStartValue}
                onChangeMaxValue={onChangeMaxValue}
                startValue={startValue}
                maxValue={maxValue}
                errorMax={errorMaxValue}
                errorStart={errorStartValue}

            />
            <DisplayCounter
                addIncrement={addIncrement}
                counter={counter}
                minValue={startValue}
                resetIncCounter={resetCounter}
                counterEditMode={counterEditMode}
                maxValue={maxValue}
                errorMax={errorMaxValue}
                errorStart={errorStartValue}
            />
        </div>
    );
}

export default App;
