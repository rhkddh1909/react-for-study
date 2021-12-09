import React,{useEffect,useState, Suspense} from 'react';
import './css/MainContents.css';
//axios
import axios from 'axios';


function moveUrl(url){
    window.location.href=url;
}

function ContentsBoxs({list}){
    const [info, setInfo] = useState({ogInfo:{ogUrl:"", ogTitle:"", ogDescription:"", ogImageUrl:""}, contentslen:5});
    let btnCheck = false;
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
                btnCheck = true;
            }
            else{
                btnCheck = false;
            }
            return tempStr.substring(0,len) +"...";
        }
        else{
            return tempStr;
        }
    }

    function moreInfo(){
        setInfo(
            {   
                ...info,
                contentslen : info.ogInfo.ogDescription.length
            }
        );
    }

    // switch (list.type) {
    //     case 1:
    //         return(
    //             <div className="mainContents ">
    //                 <p className="txt">{hideStr(info.ogInfo.ogDescription,info.contentslen)} {btnCheck ? <a onClick={()=>{moreInfo()}} className="moreComents">더보기</a>:null}</p>
    //             </div>
    //         );
    //     case 2:
    //         return(
    //             <img className="mainContents img" src={info.ogInfo.ogImageUrl}></img>
    //         );
    //     case 3:
    //         return(
    //             <div onClick={()=>{moveUrl(info.ogInfo.ogUrl)}} className="mainContents">
    //                 <img className="ogImg" src={info.ogInfo.ogImageUrl} />
    //                 <div className="ogContents">
    //                     <div className="main"> 
    //                         <h1>{hideStr(info.ogInfo.ogTitle,20)}</h1>
    //                         <p>{hideStr(info.ogInfo.ogDescription,65)}</p>
    //                     </div>
    //                     <div className="url">
    //                         {info.ogInfo.ogUrl}
    //                     </div>    
    //                 </div>
    //             </div>
    //         );
    //     default:
    //         return(
    //             <div className="mainContents txt">
    //                 타입 오류
    //             </div>
    //         );
    // }

    return (
        <Suspense fallback={<div>loading...</div>}>
            {Test(info.ogInfo.ogImageUrl)}
        </Suspense>
    );
}
export default React.memo(ContentsBoxs);

function Test(url){
    return(
        <div>{url} </div>
    );
}