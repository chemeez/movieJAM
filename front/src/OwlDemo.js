import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css'; 

export class OwlBanner extends Component {  
  render() {  
    return (  
      <div>  
        <div class='container-fluid' >      
          <div className="row title" style={{marginBottom: "20px"}} >     
          </div>  
        </div>  
        <div class='container-fluid' >            
          <OwlCarousel items={1}  
            className="owl-theme"  
            loop  
            nav  
            margin={3} 
            autoplay={true}>  
            <div><img className="img" src= {'assets/img/banner01.jpg'}/></div>  
            <div><img className="img" src= {'assets/img/banner02.jpg'}/></div>  
            <div><img className="img" src= {'assets/img/banner03.jpg'}/></div>  
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
          <div className="row title" style={{marginBottom: "20px"}} >     
          </div>  
        </div>  
        <div class='container-fluid' >            
          <OwlCarousel items={3}  
            className="owl-theme"  
            loop  
            nav  
            margin={3} 
            autoplay={true}>  
            <div><img className="img" src= {'images/poster01.jpg'}/></div>
            <div><img className="img" src= {'images/poster02.jpg'}/></div>
            <div><img className="img" src= {'images/poster03.jpg'}/></div>
            <div><img className="img" src= {'images/poster04.jpg'}/></div>
          </OwlCarousel>
        </div>  
      </div>  
    )  
  }  
}
  
export default OwlBanner;
  