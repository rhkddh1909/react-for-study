import React from "react";
import MainContents from "./MainContents";

function DivContents(props){
    var datas;
    switch(props.args){
        case "all":
            datas = [
                {
                    title : "all",
                    url : "https://naver.com/"
                },
                {
                    title : "all2",
                    url : "https://google.com/"
                }
                
            ]
            break;
        case "algorithm":
            datas = [
                {
                    title : "algorithm",
                    url : "https://naver.com/"
                },
                {
                    title : "algorithm2",
                    url : "https://google.com/"
                }
            ]

            break;
        case "projects":
            datas = [
                {
                    title : "projects",
                    url : "https://naver.com/"
                },
                {
                    title : "projects2",
                    url : "https://google.com/"
                }
            ]
            break;
        case "awards":
            datas = [
                {
                    title : "awards",
                    url : "https://naver.com/"
                },
                {
                    title : "awards2",
                    url : "https://google.com/"
                }
            ]
            break;
        default :
            datas =[{title : "오류"+props.args}];
            break;
    }
    return(
        <div>
            {
                datas.map(data => (<MainContents data = {data} key = {data.title} />))
            }
        </div>
    );
}
export default DivContents;