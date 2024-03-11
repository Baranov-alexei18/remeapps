import React, { useState } from "react";

import ItemConverterTemp from "../Converter/ItemConverterTemp.tsx";

import './Converter.style.css';

function ConverterTemp() {
    const [temp, setTemp] = useState(0);
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (e) => {
        setTemp(e.target.value)
        setScale('c')
    }

    const handleFahrenheitChange = (e) => {
        setTemp(e.target.value)
        setScale('f')
    }

    const toCalsius = (temp) => {
        return scale === 'f' ? (temp - 32) * 5 / 9 : temp
    }

    const toFarengeit = (temp) => {
        return scale === 'c' ? (temp * 9) / 5 + 32 : temp
    }

    return (
        <div className="app-converter">
            <h4 style={{ margin: "12px" }}>Конверетер температуры</h4>
            <ItemConverterTemp
                temp={toCalsius(temp)}
                scale={'c'}
                onChangeTemp={handleCelsiusChange}
            />
            <ItemConverterTemp
                temp={toFarengeit(temp)}
                scale={'f'}
                onChangeTemp={handleFahrenheitChange}
            />
        </div>
    );
}

export default ConverterTemp;