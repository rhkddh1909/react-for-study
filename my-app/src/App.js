import React from 'react';
import { Helmet } from 'react-helmet';
import './css/App.css';
import SideContents from './SideContents';
import MainTitle from './MainTitle';
import MenuList from './MenuList';

function App() {
  return ( 
    <div className="App">
        <Helmet>
          <title>PORTFOLIO</title>
        </Helmet>
        <MainTitle />
        <MenuList />
        <div className="sideFormat">
          <SideContents />
        </div>
    </div>
  );
}

export default App;
