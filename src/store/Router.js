import Home from '../view/Home.tsx';
import Users from '../view/Users.tsx';
import Quiz from '../view/Quiz.tsx';
import Converter from '../view/Converter.tsx';

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
        title: "Quiz",
        element: <Quiz />
    },
    {
        path: '/converter',
        title: "Конвертер",
        element: <Converter />
    },
]