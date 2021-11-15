import React,{useEffect,useState} from 'react';
import './css/MainContents.css';
//axios
import axios from 'axios';

function ContentsBoxs({list}){
    const [ogInfo, setOgInfo] = useState({ogUrl:"", ogTitle:"", ogDescription:"", ogImageUrl:""});
    useEffect(()=>{
        axios.get('/api/getOgInfo',{params:{url : list.url}})
            .then(res => {
                console.log("result",res);
                console.log("url",res.data.ogImage.url); 
                setOgInfo(
                    {
                        ogUrl:res.data.ogImage.ogUrl, 
                        ogTitle:res.data.ogTitle, 
                        ogDescription:res.data.ogDescription, 
                        ogImageUrl:res.data.ogImage.url
                    }
                );
            })
            .catch((error) => console.log(error));
    },[ogInfo]);
    
    switch (list.type) {
        case 1:
            return(
                <div className="mainContents txt">
                    <p>{ogInfo.ogTitle}<br/>
                    {ogInfo.ogDescription}</p>
                </div>
            );
        case 2:
            return(
                <img className="mainContents" src={ogInfo.ogImageUrl}></img>
            );
        case 3:
            return(
                <div className="mainContents">
                    <img className="urlImg" src={ogInfo.ogImageUrl} />
                </div>
            );
        default:
            return(
                <div className="mainContents txt">
                    타입 오류
                </div>
            );
    }
    <div>
        텍스트
    </div>
    
}
export default React.memo(ContentsBoxs);