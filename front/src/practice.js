import React, { Component, Fragment } from 'react';

class App extends Component {
  render(){
    const my_name = 'cindy';
    const style = { // 객체 형태로 스타일 적용
      backgroundColor: '#111111',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    }
    return (
      // 1. 두 개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야 한다. --> Fragment
      // 2. 조건부 렌더링 시 if문을 사용할 수 없기 때문에 삼항 연산자를 사용하거나 and 연산자를 사용한다.
      // -> 꼭 해야하는 경우에는 function()으로 둘러준다.
      <Fragment> 
        <div className="App1" style={style}>
          Hello World!
          Nice to meet you World! :D my name is {my_name} !
        </div>
        <div className="App2">
          { 
            {my_name} === 'cindy' ? 
            (<div>yes, {my_name}!</div>) : (<div>no, my name is {my_name}!</div>) 
           /* 또는
            {my_name} === 'Cynthia' && 
            (<div>yes, {my_name}!</div>) : (<div>no, my name is {my_name}!</div>) 
            */
          }
        </div>
        <div className="App3">
          {
            (function(){ // 화살표 함수로도 쓸 수 있다(익명 함수) (() => 
              if(my_name === 'cindy') return (<div>시원한</div>);
              if(my_name === 'Cynthia') return (<div>아이스 커피</div>);
            })()
          }
        </div>
      </Fragment>
    );
  }
}

export default App;
