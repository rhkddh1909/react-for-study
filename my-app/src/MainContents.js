import React, {useState} from "react";
import './css/MainContents.css';
import UdModal from "./UdModal";
//axios
import axios from 'axios';


function MainContents({data}){
    let ogVal;
    axios.get('/api/getOgInfo',{params:{url : data.url}})
            .then(res => {
                console.log("result",res); 
                ogVal=res;
            })
            .catch((error) => console.log(error));
    const id = "9u_a_ang_5";
    const [btnEvent, setbtnEvent] = useState({detailBtn : true, moreBtn : false});
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
                    <p className="subText">{toDate()}</p>
                </div>
                <a className="option" onClick={modalYn}><img src="image/see_more.png"></img></a>
            </div>
            <div>
                <img className="mainContents" src={ogVal}></img>
            </div> 
            <p className= "commentsTitle">{id} 's Comments<a onClick={CommnetsYn} className="moreComents">{btnEvent.detailBtn ? "..보기" : "..접기"}</a></p>
            {detailList(btnEvent.detailBtn)}
            <UdModal visible={btnEvent.moreBtn} setClose={setbtnEvent}/>
        </div>
    );
} 
export default MainContents;