import React,{useEffect,useState} from 'react';
import './css/MainContents.css';
//axios
import axios from 'axios';

function moveUrl(url){
    window.location.href=url;
}

function ContentsBoxs({list}){
    const [info, setInfo] = useState({ogInfo:{ogUrl:"", ogTitle:"", ogDescription:"", ogImageUrl:""},btnInfo:false});
    useEffect(()=>{
        axios.get('/api/getOgInfo',{params:{url : list.url}})
            .then(res => {
                console.log("result",res);
                console.log("url",res.data.ogImage.url); 
                setInfo(
                    {   
                        ...info,
                        ogInfo:{
                            ogUrl:res.data.ogUrl, 
                            ogTitle:res.data.ogTitle, 
                            ogDescription:res.data.ogDescription, 
                            ogImageUrl:res.data.ogImage.url
                        }
                    }
                );
            })
            .catch((error) => console.log(error));
    },[]);
    
    function hideStr(str,len){
        var tempStr = str;
        if(tempStr.length > len){
            if(list.type == 1){
                setInfo({
                    ...info,
                    btnInfo:true
                });
            }
            else{
                
            }
            return tempStr.substring(0,len) +"...";
        }
        else{
            return tempStr;
        }
    }

    switch (list.type) {
        case 1:
            return(
                <div className="mainContents txt">
                    <p>{hideStr(info.ogInfo.ogDescription+info.ogInfo.ogDescription+info.ogInfo.ogDescription+info.ogInfo.ogDescription+info.ogInfo.ogDescription+info.ogInfo.ogDescription+info.ogInfo.ogDescription,250)} {info.btnInfo ? <a className="moreComents">{"더보기"}</a>:null}</p>
                </div>
            );
        case 2:
            return(
                <img className="mainContents img" src={info.ogInfo.ogImageUrl}></img>
            );
        case 3:
            return(
                <div onClick={()=>{moveUrl(info.ogInfo.ogUrl)}} className="mainContents">
                    <img className="ogImg" src={info.ogInfo.ogImageUrl} />
                    <div className="ogContents">
                        <div className="main"> 
                            <h1>{hideStr(info.ogInfo.ogTitle,20)}</h1>
                            <p>{hideStr(info.ogInfo.ogDescription,65)}</p>
                        </div>
                        <div className="url">
                            {info.ogInfo.ogUrl}
                        </div>    
                    </div>
                </div>
            );
        default:
            return(
                <div className="mainContents txt">
                    타입 오류
                </div>
            );
    }
}
export default React.memo(ContentsBoxs);