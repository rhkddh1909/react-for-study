import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from './reducers/currClick';
import './css/Menu.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import All from './All';
import Projects from './Projects';
import Algorithms from './Algorithm';
import Awards from './Awards';

function MenuList(){    
    const dispatch = useDispatch();
    const stateValues = useSelector(state => state.stateValues);
    

    return(
        <div>  
            <div className="listFormat">
                <Navigator dispatch = {dispatch} stateValues = {stateValues}/>
            </div>
        </div>
    );
}

function Navigator(props){

    var location = window.location.pathname.replace(/\//gi,"");
    console.log("location : "+ location);
    
    props.dispatch(setId(location));
    console.log(props.stateValues.currId);
    var item = document.getElementById(props.stateValues.currId);
    console.log(item);
    if(item !== null){
        item.classList.add("on");
    }    
    

    const tabClick = (e) =>{
        console.log("click");
        props.dispatch(setId(e.target.id));
        console.log(props.stateValues.currId);
        var items = document.getElementsByClassName("menus");
        for(var i = 0; i < items.length; i++){
            if(items[i].id === props.stateValues.currId){
                items[i].classList.add("on");
            }
            else{
                items[i].classList.remove("on");
            }
        }
    }
    return(
        <BrowserRouter>
            <div className="menuList">
                <Link to='/' id="all" onClick = {tabClick} className="menus">all.</Link> 
                <Link to='/algorithm' id="algorithm" onClick = {tabClick} className="menus">algorithm.</Link>
                <Link to='/projects' id="projects" onClick = {tabClick} className="menus">project.</Link>
                <Link to='/awards' id="awards" onClick = {tabClick} className="menus">awards.</Link>
            </div>
            <Routes>
                <Route path='/' element={<All />} />
                <Route path='/algorithm' element={<Projects />} />
                <Route path='/projects' element={<Algorithms />} />
                <Route path='/awards' element={<Awards />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MenuList;