import React from "react";
import MainContents from "./MainContents";

function DivContents(props){
    let datas;
    switch(props.args){
        case "all":
            datas = [
                {
                    title : "all"
                }
            ]
            break;
        case "algorithm":
            datas = [
                {
                    title : "algorithm"
                }
            ]

            break;
        case "projects":
            datas = [
                {
                    title : "projects"
                }
            ]
            break;
        case "awards":
            datas = [
                {
                    title : "awards"
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