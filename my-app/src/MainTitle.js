import React, {useState} from "react";
import './MainTitle.css';

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
    );
}

export default MainTitle;