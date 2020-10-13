// header 입니다.
import React from 'react';
import styled from 'styled-components';


const CONTAINER = styled.div`
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
const MENU = styled.div`
    position: absolute;
    top: 4em;
    right: 0;
`;
const MENU_UL = styled.ul`
    display: inline-block;
`;
const MENU_LI = styled.li`
    display: block;
    float: left;
    text-align: center;
`;
const MENU_LI_A = styled.a`
    padding: 1em 1.5em;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.90em;
    font-weight: 600;
    color: #FFF;
`;


const Header = () => (
        <CONTAINER id="header">
            <div id="logo">
                <LOGO_H1>
                    <LOGO_A href="/">moiveJAM</LOGO_A>
                </LOGO_H1>
            </div>
            <MENU>
                <MENU_UL>
                    <MENU_LI class="active"><MENU_LI_A href="/" title="">HOME</MENU_LI_A></MENU_LI>
                    <MENU_LI><MENU_LI_A href="/movie" title="">MOVIE</MENU_LI_A></MENU_LI>
                    <MENU_LI><MENU_LI_A href="/reservation" title="">TICKET</MENU_LI_A></MENU_LI>
                    <MENU_LI><MENU_LI_A href="#" title="">Careers</MENU_LI_A></MENU_LI>
                    <MENU_LI><MENU_LI_A href="/join" title="">TEST_JOIN</MENU_LI_A></MENU_LI>
                </MENU_UL>
            </MENU>
        </CONTAINER>
);

export default Header;