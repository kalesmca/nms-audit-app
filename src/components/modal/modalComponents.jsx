
import React, {useState} from "react";
import MemberInfoComponent from "../../containers/member/memberInfoComponent";
import "./modal.scss";
const ModalComponent = (props) =>{
  return (<div className={props.showModal ? "modal": "modal-off"} id="modal">
     <div className="content">
       <MemberInfoComponent/>
     </div>
   </div>)
    
        
    
}

export default ModalComponent;