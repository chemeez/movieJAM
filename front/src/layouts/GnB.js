import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Link = 다른 라우트로 이동함

class GnB extends Component {
    render() {
        return (
            <Nav>
                <NavList>
                    <NavItem><Link to='/'>HOME</Link></NavItem>
                    <NavItem><Link to='/movies'>MOVIES</Link></NavItem>
                    <NavItem><Link to='/reservation'>TICKET</Link></NavItem>
                    <NavItem><Link to='/'>Ect</Link></NavItem>
                    <NavItem><Link to='/Login'>Login</Link></NavItem>
                    <NavItem><Link to='/SignUp'>Sign Up</Link></NavItem>
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
const MENU_LI_A = styled.a`
    padding: 1em 1.5em;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.90em;
    font-weight: 600;
    color: #FFF;
`;