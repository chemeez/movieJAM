// Footer입니다...
import React from 'react';
import styled from 'styled-components';

const Footer = () => (
    <FooterWrapper>
	    <FooterP>&copy; Untitled. All rights reserved. | Photos by <FooterA href="http://fotogrph.com/">Fotogrph</FooterA> | Design by <FooterA href="http://templated.co" rel="nofollow">TEMPLATED</FooterA>.</FooterP>
    </FooterWrapper>
)

export default Footer;

const FooterWrapper = styled.div`
    overflow: hidden;
    margin: 0em auto;
    width: 1000px;
    padding: 5em 0em;
`;

const FooterP = styled.p`
    letter-spacing: 0.20em;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.80em;
    color: rgba(255,255,255,0.6);
`;

const FooterA = styled.a`
    text-decoration: none;
    color: rgba(255,255,255,0.9);
`;

