import {createPortal} from "react-dom";
import React from 'react';
import './css/Modal.css';

function UdModal(props){
    
    const mDown = (e) => {
        e.target.style.background = "hsl(0, 0%, 96%)";
    }
    const mUp = (e) => {
        e.target.style.background = "white";
        alert(e.target.id);
    }
    const mOver = (e) =>{
        e.target.style.background = "hsl(0, 0%, 96%)";
    }
    const mOut = (e) =>{
        e.target.style.background = "white";
    }
    const closePop = (e) => {
        document.body.style.overflow = "unset"
        props.setClose(false);
    }
    return props.visible ? createPortal(
        <div className="udModalOverlay">
            <div onClick={closePop} className="udModalWrapper">
                <div className="udModalInner">
                    <div>
                        <div><button id="update" className="customBtn top" onMouseUp={mUp} onMouseDown={mDown} onMouseOver={mOver} onMouseOut={mOut}>수정</button></div>
                        <div><button id="delete" className="customBtn bottom" onMouseUp={mUp} onMouseDown={mDown} onMouseOver={mOver} onMouseOut={mOut}>삭제</button></div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")

        
    ) : null
}
export default UdModal;