import React from 'react';

import { RouterApp } from "./store/Router"

import {
  Routes,
  Route,
} from "react-router-dom";


import './App.css';

import Header from './components/layouts/Headers/Header.tsx';
import Navbar from './components/layouts/SideBar/Navbar.tsx';
import PageNotFund from './view/PageNotFund.tsx';



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
            <Route path="*" element={<PageNotFund />}></Route>
          </Routes>
        </main>
      </div>
    </div >
  );
}