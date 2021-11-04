import React, {useState, useEffect} from 'react';
import './css/Menu.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import All from './All';
import Projects from './Projects';
import Algorithms from './Algorithm';
import Awards from './Awards';


function MenuList(){    
    const [currClick, setCurrClick] = useState("all");
    
    const tabClick = (e) =>{
        setCurrClick(e.target.id);
    }

    useEffect(
        (e) => {
            let list = document.getElementsByClassName("menus");
            for(var i = 0; i < list.length; i++){
                if(list[i].id == currClick){
                    list[i].classList.add("on");
                }
                else{
                    list[i].classList.remove("on");
                }
            }
        },[currClick]
    );
     return(
        <div>  
            <div className="listFormat">
                <Navigator tabClick={tabClick} />
            </div>
        </div>
    );
}

function Navigator(props){
    return(
        <BrowserRouter>
            <div className="menuList">
                <Link to='/all' id="all" onClick = {props.tabClick} className="menus">all.</Link>
                <Link to='/algorithm' id="algorithm" onClick = {props.tabClick} className="menus">algorithm.</Link>
                <Link to='/projects' id="projects" onClick = {props.tabClick} className="menus">project.</Link>
                <Link to='/awards' id="awards" onClick = {props.tabClick} className="menus">awards.</Link>
            </div>
            <Routes>
                <Route path='/all' element={<All />} />
                <Route path='/algorithm' element={<Projects />} />
                <Route path='/projects' element={<Algorithms />} />
                <Route path='/awards' element={<Awards />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MenuList;