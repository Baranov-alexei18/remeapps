import React, { useState } from "react";
import GameQuiz from "./GameQuiz.tsx"
import ResultQuiz from "./ResultQuiz.tsx"

import './Quiz.style.css';


export interface InterfaceQuestions {
    title: string,
    variants: Array<string>,
    correct: number,
}
const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

const AppQuiz: React.FC<{}> = () => {
    const [stepQuiz, setStepQuiz] = useState<number>(0);
    const [variantCount, setVariant] = useState<number>(0);
    const [endQuiz, setEndQuiz] = useState<boolean>(false);

    const task: InterfaceQuestions = questions[stepQuiz];

    function nextQuestion(variantChoose: number) {
        if (variantChoose === questions[stepQuiz].correct) {
            setVariant(variantCount + 1);
        }
        stepQuiz < questions.length - 1 ? setStepQuiz(stepQuiz + 1) : setEndQuiz(true);
    }
    function gameAgain(): void {
        setStepQuiz(0);
        setVariant(0);
        setEndQuiz(false);
    }
    return (
        <div className="app-quiz">
            {endQuiz ?
                <ResultQuiz answer={variantCount} sizeQuiz={questions.length} onAgain={gameAgain} /> :
                <GameQuiz step={stepQuiz} question={task} sizeQuiz={questions.length} onNextQuestion={nextQuestion} />
            }

        </div>
    );
}

// function endQuiz
export default AppQuiz;