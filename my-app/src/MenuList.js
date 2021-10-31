import React from 'react';
import './css/Menu.css';
import MainContents from './MainContents';
import Route from './Route';
import Router from './Router';


function MenuList(){
    return(
        <div>  
            <div className="listFormat">
                <Navigator />
                <Router>
                    <Route path='/all' component={All} />
                    <Route path='/algorithm' component={Algorithms} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/awards' component={Awards} />
                </Router>
            </div>
        </div>
    );
}
function Navigator(){
    return(
        <div className="menuList">
            <a onClick = {() => window.location.href = '/all'} className="menus">all.</a>
            <a onClick = {() => window.location.href = '/algorithm'} className="menus">algorithm.</a>
            <a onClick = {() => window.location.href = '/projects'} className="menus">project.</a>
            <a onClick = {() => window.location.href = '/awards'} className="menus">awards.</a>
        </div>
    );
}
function All(){
    alert("all");
    return(
        <div>
            <MainContents />
        </div>
    );
}
function Algorithms(){
    alert("Algorithms");
    return(
        <div>
            <MainContents />
            <MainContents />
        </div>
    );
}
function Projects(){
    alert("Projects");
    return(
        <div>
            <MainContents />
            <MainContents />
            <MainContents />
        </div>
    );
}
function Awards(){
    alert("Awards");
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