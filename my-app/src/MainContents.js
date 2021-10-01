import React from "react";
import './App.css';
import logo from './logo.svg';

function toDate() {
    let date = new Date().getFullYear() + "년"
      + new Date().getMonth() + "월"
      + new Date().getDate() + "일"
      + " 작성글";
    
    return date;
 }

function MainContents(){
    return(
        <div className="postList">
            <div className="titleBox">
                <div className="contentImg">
                    <img src={logo} />
                </div>
                <div className="contentTitle">
                    <h>글제목<br/><span className="subTitle">부가설명</span></h>
                </div>
            </div>
            <div className="mainContents">
                contents area!
            </div> 
            <p className="dateStyle">{toDate()}</p>
        </div>
    );
}

export default MainContents;