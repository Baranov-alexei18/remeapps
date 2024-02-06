import React, { createContext } from 'react';

import { RouterApp } from "./store/Router.js"


import Home from './view/Home.tsx';
import Users from './view/Users.tsx';
import Quiz from './view/Quiz.tsx';

import {
  Routes,
  Route,
  useRouteError,
} from "react-router-dom";


import './App.css';

import Header from './components/layouts/Headers/Header.tsx';
import Navbar from './components/layouts/SideBar/Navbar.tsx';
import ErrorBoundary from './view/ErrorBoundary.tsx';



export default function App(): React.JSX.Element {

  return (
    <div className="app">
      <Navbar />
      <div className='app-main'>
        <Header nameTitle={"Приложение"} />
        <main >
          <Routes>
            {RouterApp.map((item, idx) =>
              <Route key={idx} path={item.path} element={item.element}></Route>
            )}
            <Route path="*" element={<ErrorBoundary />}></Route>
          </Routes>
        </main>
      </div>
    </div >
  );
}