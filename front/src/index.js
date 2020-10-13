import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containsers/App'; // 1. App.js 파일을 import해서
import Header from './components/Header';
import Main from './components/Main';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));
// 2. export defalut 되어있는 App을 가져와서 root에 뿌린다.

