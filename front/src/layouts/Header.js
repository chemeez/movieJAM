// header 입니다.
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GnB from './GnB';

const Header = () => (
        <Header_div>
            <div id="logo">
                <Logo_h1>
                    <Logo to='/'>moiveJAM</Logo>
                </Logo_h1>
            </div>
            <GnB />
        </Header_div>
);

export default Header;

const Header_div = styled.div`
    position: relative;
    width: 980px;
    height: 150px;
    margin: 0 auto;
    z-index: 1;
`;
const Logo_h1 = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1em 1em;
    background: #CC0000;
    border-radius: 0px 0px 5px 5px;
`;
const Logo = styled(Link)`
    text-decoration: none;
    color: #FFF;
`;

