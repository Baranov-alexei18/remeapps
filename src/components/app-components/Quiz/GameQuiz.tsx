import React from "react";

import { InterfaceQuestions } from './AppQuiz.tsx'
import './Quiz.style.css';

interface Game {
    step: number,
    question: InterfaceQuestions,
    sizeQuiz: number,
    onNextQuestion: (num: number) => void
}

const GameQuiz: React.FC<Game> = (props: Game) => {
    let progressStep = Math.round(props.step / props.sizeQuiz * 100);
    return (
        <>
            <div className="quiz-progress">
                <div style={{ width: `${progressStep}%` }} className="quiz-progress__inner"></div>
            </div>
            <h1>{props.question.title}</h1>
            <div className="quiz-ul">
                <ul >
                    {props.question.variants.map((item, idx) =>
                        <li key={idx} onClick={() => { props.onNextQuestion(idx) }}> {item} </li>
                    )}
                </ul>

            </div>
        </>
    );
}

export default GameQuiz