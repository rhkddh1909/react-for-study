import React from 'react';
import MainContents from './MainContents';

function Projects(){
    const datas = [
        {
            title : 1
        }
        ,
        {
            title : 2
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

export default Projects;