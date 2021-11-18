import React, { useState, useEffect } from 'react';
import './css/SideInfo.css';
//axios
import axios from 'axios';

function SideContents(){

    let [myInfo, setMyInfo] = useState('');
    useEffect(() => {
        axios.get('/api/getMyInfo',{params:{}})
            .then(res => setMyInfo(res.data))
            .catch((error) => console.log(error.res.data));
    },[])
    return(
        <div className="sideBox">
            <div className="profileTtile">
                <div>
                    <img className="profileImg" src="/image/me.jpg" />
                </div>
                <div className="profileInfo">
                    <p>
                        <span style={{fontSize:"4vmin"}}>{myInfo.NICK_NAME}<br/></span> 
                        <span style={{fontSize:"2.5vmin", color:"gray"}}>{myInfo.USER_NAME}<br/>{myInfo.JOB}</span>
                    </p>
                </div>
            </div>
            <div className="profileContents">
                <p>MY INFO</p>
                <div>
                    <li>소속 : IBK시스템</li>
                    <li>경력 : 2년차</li>
                    <li>언어 : JAVA, JAVASCRIPT, PYpON, C++, C, MYSQL</li>
                    <li>인스타 : 9u_a_ang_5</li>
                    <li>깃허브 : <a href="https://gipub.com/rhkddh1909">https://github.com/rhkddh1909</a></li>
                    <li>이메일 : rhkddh1909@gmail.com</li>
                    <li>카카오톡 : rhkddh1909</li>
                    <li>전화번호 : 010-9965-0688</li>
                    <li>팀프로젝트 : HF차세대구축, 미세먼지저감대책APP개발, 기업은행BOX프로젝트</li>
                    <li>개인프로젝트 : PORTFOLIO BLOG 만들기</li>
                </div>
            </div>
        </div>
    );
}

export default SideContents;