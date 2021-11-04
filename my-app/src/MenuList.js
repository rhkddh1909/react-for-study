import React, {useState, useEffect} from 'react';
import './css/Menu.css';
import MainContents from './MainContents';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function MenuList(){    
    alert("호출");
    return(
        <div>  
            <div className="listFormat">
                <Navigator />
            </div>
        </div>
    );
}

function Navigator(){
    const [currClick, setCurrClick] = useState("all");
    
    const tabClick = (e) =>{
        if(e.target.id != null){
            setCurrClick(e.target.id);
        }
    }

    useEffect(
        (e) => {
            alert(currClick);
            if(currClick != null){
                let currTab = document.getElementById(currClick);
                currTab.className="menus on";
            }
        },[currClick]
    );
    return(
        <BrowserRouter>
            <div className="menuList">
                <Link to="/all" id="all" onClick = {tabClick} className="menus">all.</Link>
                <Link to="/algorithm" id="algorithm" onClick = {tabClick} className="menus">algorithm.</Link>
                <Link to="/project" id="project" onClick = {tabClick} className="menus">project.</Link>
                <Link to="/awards" id="awards" onClick = {tabClick} className="menus">awards.</Link>
            </div>
            <Routes>
                <Route path="/all" render={All} />
                <Route path="/algorithm" render={<MainContents />} />
                <Route path="/projects" render={<MainContents />} />
                <Route path="/awards" render={<MainContents />} />
            </Routes>
        </BrowserRouter>
    );
}
function All(){
    return(
        <div>
            <MainContents />
        </div>
    );
}
function Algorithms(){
    return(
        <div>
            <MainContents />
            <MainContents />
        </div>
    );
}
function Projects(){
    return(
        <div>
            <MainContents />
            <MainContents />
            <MainContents />
        </div>
    );
}
function Awards(){
    return(
        <>
            <MainContents />
            <MainContents />
            <MainContents />
            <MainContents />
        </>
    );
}

export default MenuList;