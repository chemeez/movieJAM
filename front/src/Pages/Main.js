import React, { Fragment } from 'react';
import styled from 'styled-components';
import { OwlBanner,OwlRank } from '../OwlDemo';

const Layout = () => (
    <Fragment>
        <OwlBanner />
        <Wrapper>
            <div id="staff" className="container">
                <div className="title">
                    <h2>현재 상영 영화 순위</h2>
                    <span>당연히 이 밑으로는 슬라이드가 들어가야겠죵?</span> 
                </div>
                <OwlRank />
            </div>
        </Wrapper>
    </Fragment>
);

export default Layout;

const Wrapper = styled.div`
    background-size: cover;
    border-top: 10px solid #CC0000;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 774px;
    overflow: hidden;
`;