/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import './Quiz.style.css';
import ErrorButton from "../../shared/Errors/ErrorButton";

interface Result {
    answer: number;
    sizeQuiz: number;
    onAgain: () => void;
}

const ResultQuiz: React.FC<Result> = (props: Result) => {

    return (
        <div className="quiz-result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {props.answer} ответа из {props.sizeQuiz}</h2>
            <button className="result-button" onClick={props.onAgain}>Попробовать снова</button>
            <hr />
            <ErrorButton />
        </div>
    );
}
export default ResultQuiz