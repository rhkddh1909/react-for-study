import React from "react";
import './App.css';
import logo from './logo.svg';

function toDate() {
    let date = new Date().getFullYear() + "년"
      + (new Date().getMonth()+1) + "월"
      + new Date().getDate() + "일"
      + " 작성글";
    
    return date;
 }

function MainContents(){
    return(
        <div className="postList">
            <div className="titleBox">
                <div>
                    <img className="contentImg" src="/image/me.JPG" />
                </div>
                <div className="contentTitle">
                    <h>글제목<br/><span style={{fontSize:"10px"}}>부가설명</span></h>
                </div>
                <a className="option"><img src="image/see_more.png"></img></a>
            </div>
            <div>
                <img className="mainContents" src="/image/shadow.jpeg"></img>
            </div> 
            <p className="dateStyle">{toDate()}</p>
        </div>
    );
}

export default MainContents;