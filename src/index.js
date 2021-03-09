import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import './common.css';


ReactDOM.render(
    <App></App>,
    document.getElementById('app')
)

if(module.hot){
    module.hot.accept()
}