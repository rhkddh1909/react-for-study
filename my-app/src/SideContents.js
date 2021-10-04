import react from "react";
import './App.css';
import logo from './logo.svg';

function SideContents(){
    return(
        <div className="sideBox">
            <div className="profileTtile">
                <div>
                    <img className="profileImg" src="/image/me.jpg" />
                </div>
                <div className="profileInfo">
                    <p>
                        <span style={{fontSize:"4vmin"}}>9u_a_ang_5<br/></span> 
                        <span style={{fontSize:"2.5vmin", color:"gray"}}>이광오<br/>프로그래머</span>
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

//프로필사진 닉네임
//프로필사진 이름
//프로필사진 직업
//소속 : 
//사용해본 언어 : 
//회사프로젝트 : 
//인스타그램 계정 : 
//카카오톡아이디 : 
//전화번호 : 
//나이 : 
export default SideContents;