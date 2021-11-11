import React, {useState} from "react";
import './css/MainContents.css';
import UdModal from "./UdModal";
import { useSelector, useDispatch } from 'react-redux';
import {setMoreBtn} from './reducers/currClick';

function MainContents({data}){
    const id = "9u_a_ang_5";
    const dispatch = useDispatch();
    const stateValues = useSelector(state => state.stateValues);
    const [detailBtn, setDetailBtn] = useState(true);
    const toDate = () => {
        let date = new Date().getFullYear() + "년"
          + (new Date().getMonth()+1) + "월"
          + new Date().getDate() + "일"
          + " 작성글";
        
        return date;
    }

    const CommnetsYn = (e) => {
        if(detailBtn){
            setDetailBtn(false);
        }
        else{
            setDetailBtn(true);
        }
    }
    const modalYn = (e) => {
        dispatch(setMoreBtn(true));
    }

    const detailList = (detailBtn) => {
        return(detailBtn ? null : 
            <ul>
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
                <img className="mainContents" src="/image/shadow.jpeg"></img>
            </div> 
            <p className= "commentsTitle">{id} 's Comments<a onClick={CommnetsYn} className="moreComents">{detailBtn ? "..보기" : "..접기"}</a></p>
            {detailList(detailBtn)}
            <UdModal />
        </div>
    );
}
export default MainContents;