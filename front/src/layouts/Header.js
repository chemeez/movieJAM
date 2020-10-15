// header 입니다.
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GnB from './GnB';

const Header = () => (
        <Header_div>
            <Logo_div>
                <Logo_h1>
                    <Logo to='/'>moiveJAM</Logo>
                </Logo_h1>
                <GnB />
            </Logo_div>
        </Header_div>
);

export default Header;

const Header_div = styled.div`
    position: absolute;
    width: 100%;
    border-top: 10px solid #CC0000;
    z-index: 100;
`;
const Logo_div = styled.div`
    position: relative;
    width: 980px;
    height: 150px;
    margin: 0 auto;
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

