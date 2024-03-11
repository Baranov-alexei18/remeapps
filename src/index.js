import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App.tsx';
import {BrowserRouter as Router} from "react-router-dom";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDQIyIAAeC3sX1eT3qDmFPb69lzM49SAjc",
  authDomain: "chat-react-b9e3e.firebaseapp.com",
  projectId: "chat-react-b9e3e",
  storageBucket: "chat-react-b9e3e.appspot.com",
  messagingSenderId: "244559557209",
  appId: "1:244559557209:web:b08b8598d9281632603748",
  measurementId: "G-9TFL3C01GF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>
);
