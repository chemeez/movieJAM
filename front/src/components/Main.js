import React from 'react';
import styled from 'styled-components';

const WRAPPER = styled.div`
    background: #FFF;
`;

const Layout = () => (
    <WRAPPER>
        <div id="staff" class="container">
            <div class="title">
                <h2>현재 상영 영화 순위</h2>
                <span>당연히 이 밑으로는 슬라이드가 들어가야겠죵?</span> 
            </div>
            <div class="owl-carousel owl-theme rank">
                <div class="boxA box">
                    <img src="images/poster01.jpg" width="300" height="450" alt="" />
                    <div class="hover">
                        <div>
                            <h3>디바</h3>
                            <p>예매율 18.8% | <img src="images/icon/star.png"/> 6.8 </p>
                            <a href="">예매하기</a>
                            <a href="">상세보기</a>
                        </div>
                    </div>
                </div>
                <div class="boxB box">
                    <img src="images/poster02.jpg" width="300" height="450" alt="" />
                    <div class="hover">
                        <div>
                            <h3>아웃포스트</h3>
                            <p>예매율 12.8% | <img src="images/icon/star.png"/> 8.6 </p>
                            <a href="">예매하기</a>
                            <a href="">상세보기</a>
                        </div>
                    </div>
                </div>
                <div class="boxC box">
                    <img src="images/poster03.jpg" width="300" height="450" alt="" />
                    <div class="hover">
                        <div>
                            <h3>국제수사</h3>
                            <p>예매율 21.4% | D-4 </p>
                            <a href="">예매하기</a>
                            <a href="">상세보기</a>
                        </div>
                    </div>
                </div>
                <div class="boxD box">
                    <img src="images/poster04.jpg" width="300" height="450" alt="" />
                    <div class="hover">
                        <div>
                            <h3>테넷</h3>
                            <p>예매율 14.4% | <img src="images/icon/star.png"/> 8.6</p>
                            <a href="">예매하기</a>
                            <a href="">상세보기</a>
                        </div>
                    </div>
                </div>
            </div>	
        </div>
    </WRAPPER>
);

export default Layout;