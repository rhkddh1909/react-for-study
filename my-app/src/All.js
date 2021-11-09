import React from 'react';
import MainContents from './MainContents';

function All(){
    const datas= [
        {
            title : 1
        },
        {
            title : 2
        },
        {
            title : 3
        },
        {
            title : 4
        },
        {
            title : 5
        },
        {
            title : 6
        }

    ];
    return(
        <div>
            {
                datas.map(data => (<MainContents data={data} key={data.title}/>))
            }
        </div>
    );
}

export default All;