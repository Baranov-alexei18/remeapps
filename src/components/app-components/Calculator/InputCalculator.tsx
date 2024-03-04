import React from 'react';
import './Calculator.css';

const InputCalculator = (props) => {

    return (
        <div className="input-calculator__wrapper">
            <span className='description'>
                {props.firstNumber}
                {props.operate}
                {!!props.result && + props.secondNumber + " = "}
            </span>
            <input
                type="text"
                className="input"
                value={props.input}
                readOnly
            >

            </input>
        </div>
    );
};


export default InputCalculator
