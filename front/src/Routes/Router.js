/*
import React, { Component } from 'react';
import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import './App.css';

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>

        );
    }
}

export default App;
*/
/* 라우터 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, Movies, Login, SignUp, MyPage } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/mypage" component={MyPage} />
    </Switch>
) // exact = 주어진 경로와 정확히 맞아야지만 설정한 컴포넌트를 보여준다.

export default Router;
