import React from "react";
import './css/MainContents.css';

function toDate() {
    let date = new Date().getFullYear() + "년"
      + (new Date().getMonth()+1) + "월"
      + new Date().getDate() + "일"
      + " 작성글";
    
    return date;
 }

function MainContents({data}){
    return(
        <div className="postList">
            <div className="titleBox">
                <div>
                    <img className="contentImg" src="/image/me.JPG" />
                </div>
                <div className="contentTitle">
                    <h6 className="titleText">{data.title}</h6>
                    <p className="subText">부가설명</p>
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