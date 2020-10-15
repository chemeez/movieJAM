import React,{Component} from 'react';
import styled from 'styled-components';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css'; 

export class OwlBanner extends Component {  
  render() {  
    return (  
      <div id="banner">  
        <div class='container-fluid' >            
          <OwlCarousel items={1}  
            className="owl-theme"  
            loop  
            nav
            margin={3} 
            autoplay={true}>
            <div className="item"><img src= {'assets/img/banner01.jpg'} alt=""/></div>  
            <div className="item"><img src= {'assets/img/banner02.jpg'} alt=""/></div>  
            <div className="item"><img src= {'assets/img/banner03.jpg'} alt=""/></div>  
          </OwlCarousel>  
        </div>  
      </div>  
    )  
  }  
}

export class OwlRank extends Component {  
  render() {  
    return (  
      <div>  
        <div class='container-fluid' >            
          <OwlCarousel items={3}
            className="owl-theme"  
            loop  
            margin={3} 
            autoplay={true}>
            <Box>
              <img className="img" src= {'assets/img/poster01.jpg'} alt=""/>
              <div className="hover">
                <div>
                  <h3>영화제목</h3>
                  <p>예매율 18.8% | <img src={'images/icon/star.png'} alt=""/> 6.8 </p>
                    <a href="/">예매하기</a>
                    <a href="/">상세보기</a>
                </div>
              </div>
            </Box>
            
            <Box>
              <img className="img" src= {'assets/img/poster02.jpg'} alt=""/>
              <div className="hover">
                <div>
                  <h3>영화제목</h3>
                  <p>예매율 18.8% | <img src={'images/icon/star.png'} alt=""/> 6.8 </p>
                    <a href="/">예매하기</a>
                    <a href="/">상세보기</a>
                </div>
              </div>
            </Box>
            
            <Box>
              <img className="img" src= {'assets/img/poster03.jpg'} alt=""/>
              <div className="hover">
                <div>
                  <h3>영화제목</h3>
                  <p>예매율 18.8% | <img src={'images/icon/star.png'} alt=""/> 6.8 </p>
                    <a href="/">예매하기</a>
                    <a href="/">상세보기</a>
                </div>
              </div>  
            </Box>
            
            <Box>
              <img className="img" src= {'assets/img/poster04.jpg'} alt=""/>
              <div className="hover">
                <div>
                  <h3>영화제목</h3>
                  <p>예매율 18.8% | <img src={'images/icon/star.png'} alt=""/> 6.8 </p>
                    <a href="/">예매하기</a>
                    <a href="/">상세보기</a>
                </div>
              </div>
            </Box>
            
          </OwlCarousel>
        </div>
      </div>  
    )  
  }  
}
  
export default OwlBanner;

const Box = styled.div`
	position: relative;
	width: 300px;
  margin-right: 50px;
  
  &:hover .hover {
    display: block;
  }
`;
