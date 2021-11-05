import React from 'react';
import MainContents from './MainContents';

function Projects(){
    const data = [
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
            <MainContents data={data}/>
        </div>
    );
}

export default Projects;