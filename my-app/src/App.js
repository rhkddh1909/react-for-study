import React from 'react';
import { Helmet } from 'react-helmet';
import './css/App.css';
import SideContents from './SideContents';
import MainTitle from './MainTitle';
import MenuList from './MenuList';

function App() {
  const currUrl = document.location.href;
  const imgUrl =  process.env.PUBLIC_URL+"/image/shadow.jpeg";
  return ( 
    <div className="App">
        <Helmet>
          <meta property="og.url" content={currUrl} />
          <meta property="og.title" content="9u_a_ang_5's PORTFOLIO" />
          <meta 
            property="og.decoration"
            content="git, awards, projects, algorithm 을 기록하는 곳입니다."
          />
          <meta property="og.image" content={imgUrl} />
         
          <meta name="twitter.title" content="9u_a_ang_5's PORTFOLIO" />
          <meta 
            name="twitter.decoration"
            content="git, awards, projects, algorithm 을 기록하는 곳입니다."
          />
          <meta name="twitter.image" content={imgUrl} />
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
