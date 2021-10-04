/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import MainContents from './MainContents';
import SideContents from './SideContents';
import MainTitle from './MainTitle';
function App() {
  return ( // html 작성으로 리턴 가능
    /*여기에 HTML으로 코딩*/
    <div className="App">
      <MainTitle />
      <div>  
        <div className="listFormat">
          <MainContents />
          <MainContents />
          <MainContents />
        </div>
        <div className="sideFormat">
          <SideContents />
        </div>
      </div>
    </div>
  );
}

export default App;
