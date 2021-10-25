import React, { useState, useEffect } from 'react';
import './css/App.css';
import MainContents from './MainContents';
import SideContents from './SideContents';
import MainTitle from './MainTitle';
import MenuList from './MenuList';
//axios
import axios from 'axios';

function App() {
  //server connection test
  useEffect(() => {
    axios.get('/api/test')
         .then(res => console.log(res))
         .catch()
  })

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
