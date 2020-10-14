import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Link = 다른 라우트 경로로 이동함

class GnB extends Component {
    render() {
        return (
            <Nav>
                <NavList>
                    <NavItem><NavItemA component={Link} to='/'>HOME</NavItemA></NavItem>
                    <NavItem><NavItemA component={Link} to='/movies'>MOVIES</NavItemA></NavItem>
                    <NavItem><NavItemA component={Link} to='/reservation'>TICKET</NavItemA></NavItem>
                    <NavItem><NavItemA component={Link} to='/'>Ect</NavItemA></NavItem>
                    <NavItem><NavItemA component={Link} to='/login'>Login</NavItemA></NavItem>
                    <NavItem><NavItemA component={Link} to='/signup'>Sign Up</NavItemA></NavItem>
                </NavList>
            </Nav>
        );
    }
}

export default GnB;

const Nav = styled.div`
    position: absolute;
    top: 4em;
    right: 0;
`;
const NavList = styled.ul`
    display: inline-block;
`;
const NavItem = styled.li`
    display: block;
    float: left;
    text-align: center;
`;
const NavItemA = styled.a`
    padding: 1em 1.5em;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.90em;
    font-weight: 600;
    color: #FFF;
`;