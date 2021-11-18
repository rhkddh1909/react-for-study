import React from "react";
import MainContents from "./MainContents";

function DivContents(props){
    var datas;
    switch(props.args){
        case "all":
            datas = [
                {
                    type : 1,
                    key : "all1",
                    title : "all",
                    url : "https://naver.com/"
                },
                {
                    type : 1,
                    key : "all2",
                    title : "all2",
                    url : "https://youtube.com/"
                }
                
            ]
            break;
        case "algorithm":
            datas = [
                {   
                    type : 2,
                    key : "algorithm1",
                    title : "algorithm",
                    url : "https://naver.com/"
                },
                {
                    type : 2,
                    key : "algorithm2",
                    title : "algorithm2",
                    url : "https://youtube.com/"
                },
                {
                    type : 2,
                    key : 3,
                    title : "projects2",
                    url : "https://github.com/rhkddh1909/algorithm/blob/main/CPP/-2%EC%A7%84%EC%88%98(2089).cc"
                }
            ]

            break;
        case "projects":
            datas = [
                {
                    type : 3,
                    key : "projects1",
                    title : "projects",
                    url : "https://naver.com/"
                },
                {
                    type : 3,
                    key : "projects2",
                    title : "projects2",
                    url : "https://youtube.com/"
                },
                {
                    type : 3,
                    key : 3,
                    title : "projects2",
                    url : "https://github.com/rhkddh1909/algorithm/blob/main/CPP/-2%EC%A7%84%EC%88%98(2089).cc"
                }
            ]
            break;
        case "awards":
            datas = [
                {
                    type : 4,
                    key : "awards1",
                    title : "awards",
                    url : "https://naver.com/"
                },
                {
                    type : 4,
                    key : "awards2",
                    title : "awards2",
                    url : "https://youtube.com/"
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
                datas.map(data => (<MainContents data = {data} key = {data.key} />))
            }
        </div>
    );
}
export default DivContents;