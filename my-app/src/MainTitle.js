<<<<<<< HEAD
import React from 'react';
import './App.css';
 
function MainTitle(){
    return(
      <div className="black-nav">
        <div>portfolio.</div>
        <hr/>
      </div>
      
=======
import React, {useState} from "react";
import './App.css';


function MainTitle(){
    const [phText, phTextChg] = useState("🔍검색");
    const setBlank = ()=>{
        phTextChg("");
    }
    const setDefault = ()=>{
        phTextChg("🔍검색");
    }

    return(
        <div className="black-nav">
            <div className="mainTitle"> 
                portfolio 
            </div>
            <div className="searchBox">
                <input className ="inputBox" type="text" placeholder = {phText} onClick={()=>{setBlank()}} onBlur={()=>{setDefault()}}></input>
            </div>
        </div>
>>>>>>> fec4cf5897a86ba559bfe42a8b482732ff0cd6c9
    );
}

export default MainTitle;