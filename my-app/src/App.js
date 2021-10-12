import React, { useState } from 'react';
import './App.css';
import MainContents from './MainContents';
import SideContents from './SideContents';
import MainTitle from './MainTitle';
import MenuList from './MenuList';

function App() {
  return ( 
    <div className="App">
      <MainTitle />
      <div>  
        <div className="listFormat">
          <MenuList />
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
