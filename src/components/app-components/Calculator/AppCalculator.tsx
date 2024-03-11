import React, { useEffect, useState } from 'react';

import InputCalculator from './InputCalculator.tsx';

import './Calculator.css';


enum operation {
    miltiplication = '*',
    division = '/',
    sum = '+',
    diff = '-',
    equals = '=',
    enter = 'Enter',
    delete = 'Delete'
}

const AppCalculator = () => {
    const [input, setInput] = useState<String | Number>("");
    const [error, setError] = useState('')
    const [numberOne, setNumberOne] = useState<Number>();
    const [numberTwo, setNumberTwo] = useState<Number>();
    const [operate, setOperate] = useState<operation>();
    const [result, setResult] = useState<Number>();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (numberOne && !result) {
            setNumberTwo(input as Number)
        }

        const onKeypress = (e: any) => {


            switch (e.key) {
                case '1': updateInput('1'); break;
                case '2': updateInput('2'); break;
                case '3': updateInput('3'); break;
                case '4': updateInput('4'); break;
                case '5': updateInput('5'); break;
                case '6': updateInput('6'); break;
                case '7': updateInput('7'); break;
                case '8': updateInput('8'); break;
                case '9': updateInput('9'); break;

                case operation.diff: handleOperation(operation.diff); break;
                case operation.division: handleOperation(operation.division); break;
                case operation.miltiplication: handleOperation(operation.miltiplication); break;
                case operation.sum: handleOperation(operation.sum); break;

                case operation.enter: calculateResult(); break;
                case operation.equals: calculateResult(); break;
                case operation.delete: deleteOneElement(); break;
            }
        };

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    })

    useEffect(() => {
        if (numberOne && numberTwo) {
            calculateResult()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberOne])

    useEffect(() => {
        if (input[0] === '.') {
            setInput('0.')
        }
    }, [input])



    const updateInput = (value: string) => {
        if (result) {
            setNumberOne(undefined);
            setNumberTwo(undefined);
            setOperate(undefined);
            setResult(undefined);
            setInput(value);
        } else {
            setInput(prevInput => prevInput + value);
        }
    };

    const clearInput = () => {
        setInput('');
        setNumberOne(undefined);
        setNumberTwo(undefined);
        setOperate(undefined);
        setResult(undefined);
    };

    const calculateResult = () => {

        let resultOp;

        if (result) {
            setNumberOne(result)
        }
        if (!numberTwo || !operate) {
            setResult(numberOne);
            return
        }

        try {
            switch (operate) {
                case operation.sum:
                    resultOp = parseFloat(numberOne as unknown as string) + parseFloat(numberTwo as unknown as string);
                    break;
                case operation.diff:
                    resultOp = (numberOne as number) - parseFloat(numberTwo as unknown as string);
                    break;
                case operation.miltiplication:
                    resultOp = (numberOne as number * parseFloat(numberTwo as unknown as string));
                    break;
                case operation.division:
                    resultOp = (numberOne as number / parseFloat(numberTwo as unknown as string));
                    break;
                default:
                    setError('Такого действия нет');
            }
            setError('');
            setResult(resultOp)
            setInput(resultOp);

        } catch (error) {
            setError(error.message);
        }
    };

    const handleOperation = (value) => {
        if (result) {
            setNumberOne(result);
            setNumberTwo(undefined);
            setOperate(undefined);
            setResult(undefined);
            setInput(value);
        }

        if (!numberOne) {
            setNumberOne(input as number)
        }

        setOperate(value)
        setInput('')
    };

    const deleteOneElement = () => {
        let inputString: string;
        if (result) {
            setInput(result);
            setResult(undefined);
            setOperate(undefined);
            setNumberOne(undefined);
            setNumberTwo(undefined)
        }

        if (input) {
            inputString = input.toString()
            setInput(inputString.slice(0, inputString.length - 1));
        }


    }


    return (
        <div className="calculator">
            <InputCalculator
                input={input}
                firstNumber={numberOne}
                secondNumber={numberTwo}
                operate={operate}
                result={result} />

            {error.length > 1 && <p className='calculator__error'>{error}</p>}

            <div className="calculator__buttons">
                <button onClick={() => updateInput('1')}>1</button>
                <button onClick={() => updateInput('2')}>2</button>
                <button onClick={() => updateInput('3')}>3</button>
                <button onClick={() => handleOperation(operation.sum)}>+</button>
                <button onClick={() => updateInput('4')}>4</button>
                <button onClick={() => updateInput('5')}>5</button>
                <button onClick={() => updateInput('6')}>6</button>
                <button onClick={() => handleOperation(operation.diff)}>-</button>
                <button onClick={() => updateInput('7')}>7</button>
                <button onClick={() => updateInput('8')}>8</button>
                <button onClick={() => updateInput('9')}>9</button>
                <button onClick={() => handleOperation(operation.miltiplication)}>*</button>
                <button onClick={() => updateInput('0')}>0</button>
                <button onClick={() => updateInput('.')}>.</button>
                <button onClick={() => clearInput()}>C</button>
                <button onClick={() => handleOperation(operation.division)}>/</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={deleteOneElement}>{'<'}</button>
            </div>
        </div>
    );
};


export default AppCalculator
