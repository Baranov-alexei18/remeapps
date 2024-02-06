import React, { useContext, useEffect, useState } from "react";

import CurrencyBlock from "../Converter/CurrencyBlock.tsx";

import './Converter.style.css';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'BYN'];

function AppConverter() {
    const [currencyFrom, setCurrencyFrom] = useState("RUB");
    const [currencyTo, setCurrencyTo] = useState("USD");
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(0);


    const [arrayCurrency, setArrayCurrency] = useState({});


    let keysCurrency = Object.keys(arrayCurrency);
    const currencyConvert: any = []
    defaultCurrencies.forEach(item => {
        if (keysCurrency.includes(item)) {
            currencyConvert.push(arrayCurrency[item])
        }
    })

    const onChangeFromPrice = (value) => {
        let result: number;
        if (currencyTo === "RUB" && currencyFrom === "RUB") result = value;
        else if (currencyFrom === "RUB") {
            result = value / getValue(currencyTo);
        }
        else if (currencyTo === "RUB") {
            result = value * getValue(currencyFrom);
        }
        else {
            const price = value / getValue(currencyTo);
            result = price * getValue(currencyFrom);
        }
        setValueTo(result)
        setValueFrom(value);
    }

    const onChangeToPrice = (value) => {
        let result: number;
        if (currencyFrom === "RUB") {
            result = value * getValue(currencyTo);
            if (currencyTo === "RUB") result = value;
        } else {
            if (currencyTo === "RUB") {
                result = value / getValue(currencyFrom);
            } else {
                result = value * (getValue(currencyTo) / getValue(currencyFrom));
            }
        }
        setValueFrom(result);
        setValueTo(value);
    }

    const getValue = (currency) => {
        let objectCur = currencyConvert.filter(item => item.CharCode === currency);
        return objectCur[0]?.Value
    }


    useEffect(() => {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(data => data.json())
            .then(item => setArrayCurrency(item.Valute))
    }, []);

    useEffect(() => {
        onChangeFromPrice(valueFrom);
    }, [currencyFrom]);

    useEffect(() => {
        onChangeToPrice(valueTo);
    }, [currencyTo]);
    return (
        <div className="app-converter">

            <CurrencyBlock
                value={valueFrom}
                currency={currencyFrom}
                array={defaultCurrencies}
                onChangeCurrency={setCurrencyFrom}
                onChangeValue={onChangeFromPrice} />
            <CurrencyBlock
                value={valueTo}
                currency={currencyTo}
                array={defaultCurrencies}
                onChangeCurrency={setCurrencyTo}
                onChangeValue={onChangeToPrice} />
        </div>
    );
}

export default AppConverter;