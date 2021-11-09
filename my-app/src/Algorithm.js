import React from 'react';
import MainContents from './MainContents';

function Algorithms(){
    const datas= [
        {
            title : 1
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

export default Algorithms;