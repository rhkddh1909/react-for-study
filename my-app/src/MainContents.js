import React, {useState, Suspense} from "react";
import './css/MainContents.css';
import UdModal from "./UdModal";
import ContentsBox from "./ContentsBox";
//axios
import axios from 'axios';


function MainContents({data}){
    const [btnEvent, setbtnEvent] = useState({detailBtn : true, moreBtn : false});
    const id = "9u_a_ang_5";
    const toDate = () => {
        let date = new Date().getFullYear() + "년"
          + (new Date().getMonth()+1) + "월"
          + new Date().getDate() + "일"
          + " 작성글";
        
        return date;
    }

    const CommnetsYn = (e) => {
        if(btnEvent.detailBtn){
            setbtnEvent({
                ...btnEvent,
                detailBtn : false
            });
        }
        else{
            setbtnEvent({
                ...btnEvent,
                detailBtn : true
            });
        }
    }
    const modalYn = (e) => {
        document.body.style.overflow = "hidden";
        setbtnEvent({
            ...btnEvent,
            moreBtn:true
        });
    }

    const detailList = (detailBtn) => {
        return(detailBtn ? null : 
            <ul className="comments">
                <li>재미 : ⭐⭐⭐⭐⭐</li>
                <li>난이도 : 🔥🔥🔥🔥🔥</li>
                <li>설명 : 만드는 중이다.</li>
                <li>배운점 : 리액트 처음배운다.</li>
            </ul>
        );
        
    }

    return(
        <div className="postList">
            <div className="titleBox">
                <div>
                    <img className="contentImg" src="/image/me.JPG" />
                </div>
                <div className="contentTitle">
                    <h6 className="titleText">{data.title}</h6>
                    <p className="subText">{id}</p>
                    <p className="subText">{toDate()}</p>
                </div>
                <a className="option" onClick={modalYn}><img src="image/see_more.png"></img></a>
            </div>
            <ContentsBox list={data}/>
            <p className= "commentsTitle">{id} 's Comments<a onClick={CommnetsYn} className="moreComents">{btnEvent.detailBtn ? "..보기" : "..접기"}</a></p>
            {detailList(btnEvent.detailBtn)}
            <UdModal visible={btnEvent} setClose={setbtnEvent}/>
        </div>
    );
} 
export default MainContents;