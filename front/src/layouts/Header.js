// header 입니다.
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GnB from './GnB';

const Header = () => (
        <HeaderWrapper>
            <div id="logo">
                <LOGO_H1>
                    <LOGO_A component={Link} to='/'>moiveJAM</LOGO_A>
                </LOGO_H1>
            </div>
            <GnB />
        </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div`
    overflow: hidden;
    margin: 0em auto;
    width: 1000px;
	position: relative;
    width: 980px;
	height: 150px;
	margin: 0 auto;
	z-index: 1;
`;
const LOGO_H1 = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1em 1em;
    background: #CC0000;
    border-radius: 0px 0px 5px 5px;
`;
const LOGO_A = styled.a`
    text-decoration: none;
    color: #FFF;
`;

