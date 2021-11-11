import React from "react";
import MainContents from "./MainContents";

function DivContents(props){
    var datas;
    switch(props.args){
        case "all":
            datas = [
                {
                    title : "all"
                },
                {
                    title : "all2"
                }
                
            ]
            break;
        case "algorithm":
            datas = [
                {
                    title : "algorithm"
                },
                {
                    title : "algorithm2"
                }
            ]

            break;
        case "projects":
            datas = [
                {
                    title : "projects"
                },
                {
                    title : "projects2"
                }
            ]
            break;
        case "awards":
            datas = [
                {
                    title : "awards"
                },
                {
                    title : "awards2"
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