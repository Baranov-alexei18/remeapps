import Home from '../view/Home.tsx';
import Users from '../view/Users.tsx';
import Quiz from '../view/Quiz.tsx';
import Converter from '../view/Converter.tsx';
import Chat from '../view/Chat.tsx';
import Сalculator from '../view/Сalculator.tsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFeather, faMoneyBillTransfer, faCalculator, faComments} from '@fortawesome/free-solid-svg-icons';

import imageUsers from '../assets/images/users.png'
import imageQuiz from '../assets/images/quiz.png'
import imageConverter from '../assets/images/converter.png'
import imageCalculator from '../assets/images/calculator.png'
import imageChat from '../assets/images/chat.png'


export const RouterApp = [
    {
        id: 1,
        path: '/',
        title: "Главная",
        icon: <FontAwesomeIcon icon={faHouse} />,
        element: <Home />
    },
    {
        id: 2,
        path: '/users-add',
        title: "Пользователи",
        icon: <FontAwesomeIcon icon={faUser} />,
        img: imageUsers,
        element: <Users />

    },
    {
        id: 3,
        path: '/quiz',
        title: "Опросник",
        icon: <FontAwesomeIcon icon={faFeather} />,
        img: imageQuiz,
        element: <Quiz />
    },
    {
        id: 4,
        path: '/converter',
        title: "Конвертер",
        icon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
        img: imageConverter,
        element: <Converter />
    },
    {
        id: 5,
        path: '/calculator',
        title: "Калькулятор",
        icon: <FontAwesomeIcon icon={faCalculator} />,
        img: imageCalculator,
        element: <Сalculator />
    },
    {
        id: 6,
        path: '/chat',
        title: "Чат",
        icon: <FontAwesomeIcon icon={faComments} />,
        img: imageChat,
        element: <Chat />
    },
]