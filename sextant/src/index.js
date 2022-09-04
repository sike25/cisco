import React, { Component} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Banner from './components/Banner'
import './index.css';

//this line effectively bootstraps your website linking
//your root component App to the index.html file
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);