import React, { useState, useEffect } from 'react';
import './css/SideInfo.css';
//axios
import axios from 'axios';

function SideContents(){

    let [myInfo, setMyInfot] = useState('');
    useEffect(() => {
        axios.get('/api/getMyInfo',{params:{}})
            .then(res => setMyInfot(res.data))
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
                <h>MY INFO</h>
                <table>
                    <tr>
                        <th>소속 :</th><td>IBK시스템</td>
                    </tr>
                    <tr>
                        <th>경력 :</th><td>2년차</td>
                    </tr>
                    <tr>
                        <th>언어 :</th><td>JAVA, JAVASCRIPT, PYTHON, C++, C, MYSQL</td>
                    </tr>
                    <tr>
                        <th>인스타 :</th><td>9u_a_ang_5</td>
                    </tr>
                    <tr>
                        <th>깃허브 :</th><td><a href="https://github.com/rhkddh1909">https://github.com/rhkddh1909</a></td>
                    </tr>
                    <tr>
                        <th>이메일 :</th><td>rhkddh1909@gmail.com</td>
                    </tr>
                    <tr>
                        <th>카카오톡 :</th><td>rhkddh1909</td>
                    </tr>
                    <tr>
                        <th>전화번호</th><td>010-9965-0688</td>
                    </tr>
                    <tr>
                        <th>팀 프로젝트 :</th><td>HF차세대구축, 미세먼지저감대책APP개발, 기업은행BOX프로젝트</td>
                    </tr>
                    <tr>
                        <th>개인 프로젝트 :</th><td>PORTFOLIO BLOG 만들기</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default SideContents;