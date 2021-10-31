import React, { useState, useEffect } from 'react';
import './css/App.css';
import SideContents from './SideContents';
import MainTitle from './MainTitle';
import MenuList from './MenuList';


function App() {
  return ( 
    <div className="App">
      <MainTitle />
      <div>  
        <MenuList />
        <div className="sideFormat">
          <SideContents />
        </div>
      </div>
    </div>
  );
}

export default App;
