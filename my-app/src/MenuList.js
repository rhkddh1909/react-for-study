import React from 'react';
import './css/Menu.css';
 
function MenuList(){
    return(
    <div className="menuList">
        <a className="menus">all.</a>
        <a className="menus">algorithm.</a>
        <a className="menus">project.</a>
        <a className="menus">awards.</a>
    </div>
    );
}

export default MenuList;