import {createPortal} from "react-dom";
import './css/Modal.css';

function UdModal(){
    return createPortal(
        <div className="udModalOverlay">
            <div className="udModalInner">
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>,
        document.getElementById("modal")
    );
}
export default UdModal;