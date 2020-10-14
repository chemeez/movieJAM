import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './layouts/Header';
import Router from './Routes/Router';
import './App.css';

class App extends Component {
    render () {
        return (
            <Layout>
                <Header />
                <Content>
                    <Router />
                </Content>
                <footer />
            </Layout>
        );
    }
}

const Layout = styled.div`

`;

const Content = styled.div`

`;

export default App;