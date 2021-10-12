import React from 'react';
import './Menu.css';
 
function MenuList(){
    return(
    <div className="menuList">
        <a className="menus">recently.</a>
        <a className="menus">algorithm.</a>
        <a className="menus">project.</a>
        <a className="menus">awards.</a>
    </div>
    );
}

export default MenuList;