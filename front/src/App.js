import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './layouts/Header';
import Router from './Routes/Router';
import Footer from './layouts/Footer'
import './App.css';

class App extends Component {
    render () {
        return (
            <Layout>
                <Header />
                <Content>
                    <Router />
                </Content>
                <Footer />
            </Layout>
        );
    }
}

const Layout = styled.div`
    position: relative;
`;

const Content = styled.div`

`;

export default App;