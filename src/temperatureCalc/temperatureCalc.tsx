import React, {ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState} from 'react';
import {number} from "prop-types";

interface Props {
    textState?: boolean;
    value: string;
}

const TemperatureCalc: React.FC<Props> = props => {

    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // strict null checks need us to check if inputEl and current exist.
        // but once current exists, it is of type HTMLInputElement, thus it
        // has the method focus! ✅
        if(inputEl && inputEl.current) {
            inputEl.current.focus();
            console.log(inputEl.current.focus());
        }
    };
    return (
        <>
            { /* in addition, inputEl only can be used with input elements. Yay! */ }
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
};

export default TemperatureCalc;
