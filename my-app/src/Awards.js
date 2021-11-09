import React from 'react';
import MainContents from './MainContents';

function Awards(){
    const datas= [
        {
            title : 1
        },
        {
            title : 2
        },
        {
            title : 3
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

export default Awards;