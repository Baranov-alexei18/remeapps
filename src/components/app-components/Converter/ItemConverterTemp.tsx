/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import './Converter.style.css';

interface itemTemp {
    scale?: string;
    temp?: string | undefined;
    onChangeTemp?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

function ItemConverterTemp(props: itemTemp) {

    const scaleName = props.scale === 'c' ? "градусах Цельсия" : "Фаренгейтах"
    return (
        <div className="block">
            <h4 style={{ margin: "12px" }}>Температура в  {scaleName}</h4>
            <input
                type="number"
                placeholder={props.temp}
                value={props.temp}
                onChange={props.onChangeTemp}
            />

        </div>
    );
}

export default ItemConverterTemp;