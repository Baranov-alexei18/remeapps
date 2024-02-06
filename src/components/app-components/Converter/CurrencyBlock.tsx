import React from 'react';

interface Currency {
    value: number;
    currency: string;
    array: string[];
    onChangeCurrency: React.Dispatch<React.SetStateAction<string>>;
    onChangeValue: (value: number) => void;
}

const CurrencyBlock: React.FC<Currency> = (props) => {

    return (
        <div className="block">
            <ul className="currencies">
                {props.array.map((cur) => (
                    <li
                        onClick={() => props.onChangeCurrency(cur)}
                        className={props.currency === cur ? 'active' : ''}
                        key={cur}>
                        {cur}
                    </li>
                ))}
                <li>
                    <svg height="50px" viewBox="0 0 50 50" width="50px">
                        <rect fill="none" height="50" width="50" />
                        <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                    </svg>
                </li>
            </ul>
            <input
                onChange={(e) => props.onChangeValue(Number(e.target.value))}
                value={props.value || ''}
                type="number"
                placeholder={"0"}
            />
        </div>
    );
}

export default CurrencyBlock