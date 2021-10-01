/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import MainContents from './MainContents';

function App() {
  //////////////////////////////////////////////////////////////////////////////
  //STATE
  //////////////////////////////////////////////////////////////////////////////
  /*  디스트럭처링
   *  장점 : 재랜더링 가능
   */

  let [sub, subChg] = useState(['오늘 점심은 구내식당'
    , '오늘 저녁도 구내식당'
    , '내일 저녁은 한림돈가']);
  let [hearts, heartsChg] = useState(['♡'
    , '♡'
    , '♡'
  ]);
  //////////////////////////////////////////////////////////////////////////////
  //변수
  //////////////////////////////////////////////////////////////////////////////


  //let headStyle = {color : 'green', fontSize : '30px'};
  //////////////////////////////////////////////////////////////////////////////
  //함수
  //////////////////////////////////////////////////////////////////////////////

  return ( // html 작성으로 리턴 가능
    /*여기에 HTML으로 코딩*/
    <div className="App">
      <div className="black-nav">
        <div> 개발 BLOG </div>
      </div>
      <div>  
        <div className="listFormat">
          <MainContents />
          <MainContents />
          <MainContents />
        </div>
        <div className="sideFormat">
        </div>
      </div>
    </div>
  );
}

export default App;
