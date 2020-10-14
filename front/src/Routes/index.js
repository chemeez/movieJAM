/*
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containsers/App'; // 1. App.js 파일을 import해서
import Header from '../layouts/Header';
import Main from '../pages/Main';
import Footer from '../layouts/Footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
// 2. export defalut 되어있는 App을 가져와서 root에 뿌린다.
*/

/* 모든 컴포넌트를 한 파일로 관리하기 위한 파일 
    앞으로 만들 모든 컴포넌트를 이 파일에 추가 함 */

export { default as Main } from '../Pages/Main';
export { default as Login } from '../Pages/Login';
export { default as Movies } from '../Pages/Movies';
export { default as MyPage } from '../Pages/MyPage';
export { default as SignUp } from '../Pages/SignUp';

