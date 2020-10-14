import React from 'react';
import styled from 'styled-components';
import './Main.css';
import {OwlBanner,OwlRank} from '../OwlDemo';

const WRAPPER = styled.div`
    background: #FFF;
`;

const Layout = () => (
    <WRAPPER>
        <OwlBanner />

        <div id="staff" className="container">
            <div className="title">
                <h2>현재 상영 영화 순위</h2>
                <span>당연히 이 밑으로는 슬라이드가 들어가야겠죵?</span> 
            </div>
            <OwlRank />
        </div>
    </WRAPPER>
);

export default Layout;