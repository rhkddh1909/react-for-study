import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //////////////////////////////////////////////////////////////////////////////
  //STATE
  //////////////////////////////////////////////////////////////////////////////
  /*  디스트럭처링
   *  장점 : 재랜더링 가능
   */
  let post = '내일 저녁은 한림돈가';
  let [sub,subChg] = useState(['오늘 점심은 구내식당'
                              ,'오늘 저녁도 구내식당'
                              ,'내일 저녁은 한림돈가']); 
  //////////////////////////////////////////////////////////////////////////////
  //변수
  //////////////////////////////////////////////////////////////////////////////
  
  
  //let headStyle = {color : 'green', fontSize : '30px'};
  //////////////////////////////////////////////////////////////////////////////
  //함수
  //////////////////////////////////////////////////////////////////////////////
  function toDate(){
    let date = new Date().getFullYear()+"년"
            +new Date().getMonth()+"월"
            +new Date().getDate()+"일"
            +" 작성글";
    
     return date;
  }

  return ( // html 작성으로 리턴 가능
    /*여기에 HTML으로 코딩*/
    <div className="App">
      <div className="black-nav">
       <div> GWANG'S Blog </div>
      </div>
      <div className="postList">
        <h3>{sub[0]}</h3>
        <p><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MTFfNDMg%2FMDAxNTY1NTA1NDk2MDky.vgaEaoa_LzaADN42a9ZH5CgoCaiZjn1GZxw2eQ0Y2bkg.UXToCgDD3eNsNoQWF7smqxuEZj7-AdlOvQl0QyLv6zMg.JPEG.rupina9511%2F%25C1%25A1%25BD%25C9%25B8%25DE%25B4%25BA.jpg&type=sc960_832"></img></p>
        <p className="dateStyle">{toDate()}</p>
        <hr/>
      </div>
      <div className="postList">
        <h3>{sub[1]}</h3>
        <p><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MTJfODYg%2FMDAxNjI2MDkxMjI2OTM5.9-e129-Y3OOv-5_Z9TmGO2jdqdMwiusQ3GPY46Znmtwg.6CKVBTGSk7DNauNQh9CzGr1Rgo1G24KiV814q7UhN-Ag.JPEG.050150%2FIMG_7425.JPG&type=sc960_832"></img></p>
        <p className="dateStyle">{toDate()}</p>
        <hr/>
      </div>
      <div className="postList">
        <h3>{sub[2]}</h3> 
        <p><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA3MThfNjgg%2FMDAxNTYzNDMzNjAwNjQz.o0G891ByCLvdrk_Jyg4hUouA3_Iu1Y6e_FXyBl7FWX0g.9sZCQS1MvjeitQMFPdsbUjLEhLTl2lPyfksfEdDLFBsg.JPEG.lovexoqls%2F%25B9%25E6%25C0%25CC%25B5%25BF%25B8%25C0%25C1%25FD_%25C7%25D1%25B8%25B2%25B5%25B7%25B0%25A1_%25B0%25ED%25B1%25E2%25C1%25FD_14.jpg&type=sc960_832"></img></p>
        <p className="dateStyle">{toDate()}</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
