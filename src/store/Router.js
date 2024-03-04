import Home from '../view/Home.tsx';
import Users from '../view/Users.tsx';
import Quiz from '../view/Quiz.tsx';
import Converter from '../view/Converter.tsx';
import Chat from '../view/Chat.tsx';
import Сalculator from '../view/Сalculator.tsx';

export const RouterApp = [
    {
        path: '/',
        title: "Главная",
        element: <Home />
    },
    {
        path: '/users-add',
        title: "Пользователи",
        element: <Users />

    },
    {
        path: '/quiz',
        title: "Опросник",
        element: <Quiz />
    },
    {
        path: '/converter',
        title: "Конвертер",
        element: <Converter />
    },
    {
        path: '/calculator',
        title: "Калькулятор",
        element: <Сalculator />
    },
    {
        path: '/chat',
        title: "Чат",
        element: <Chat />
    },
]