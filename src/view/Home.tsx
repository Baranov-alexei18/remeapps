import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import InputDefault from '../components/shared/Input';

const Home: React.FC = () => {

    const arrayBinarySearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]
    const [result, setResult] = useState(null)
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    const [open, setOpen] = useState(false)
    const startRef = useRef(0)
    const modalRef = useRef(null)
    const inputRef = useRef(null)
    const [inputNum, setInputNum] = useState(0)


    const addNummber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1])
    }


    useEffect(() => {
        if (open) document.body.classList.add('model-open')
        else document.body.removeAttribute("class")
    }, [open])

    const start = () => {
        const timer = setInterval(addNummber, 1000)
        startRef.current = timer
    }
    const stop = () => {
        const intervalId = startRef.current;
        clearInterval(intervalId)
    }
    const clickOutModal = (e) => {
        if (e.target === modalRef.current) {
            setOpen(false)
            document.removeEventListener("click", clickOutModal)
        }
    }
    const clickOpenModal = () => {
        const num = parseInt(inputNum)
        setOpen(true)
        setResult((binarySearch(num)))
        document.addEventListener("click", clickOutModal)
    }

    const focusInput = () => {
        let s = inputRef.current.focus()
    }

    const binarySearch = (number: number): string | SetStateAction<null> => {
        let count = 0,
            left = 0,
            right = arrayBinarySearch.length - 1;

        while (left <= right) {
            const mid = Math.round((left + right) / 2);

            if (arrayBinarySearch[mid] == number) {
                return "Число " + number + " есть в массиве и на это понадобилось " + count + " итераций"
            } else if (arrayBinarySearch[mid] > number) {
                right = mid - 1
            } else {
                left = mid + 1
            }
            count++
        }
        return "Число " + number + " не найдено"
    }



    return (
        <>
            <h1>Welcome page</h1>
            <button onClick={clickOpenModal}>Open Modal Vuew</button>
            <button onClick={start}>Click</button>
            <button onClick={() => stop()}>Stop</button>
            <button onClick={focusInput}>Focus</button>

            <InputDefault ref={inputRef} valueinput={inputNum} changevalue={e => setInputNum(e.target.value)}></InputDefault>
            <div>
                <ul>
                    {numbers.map((n) =>
                        <li key={n}>{n}</li>
                    )}
                </ul>
            </div>
            {open && createPortal(
                <div ref={modalRef} className='modal-body'>
                    <div className='modal-body-wrapper'>
                        <div>
                            <h1>{numbers.length}</h1>
                            <p>
                                {result}
                            </p>
                        </div>
                        <button onClick={() => setOpen(false)}>Back</button>
                    </div>
                </div>,
                document.body)
            }
        </>

    );
}

export default Home;
