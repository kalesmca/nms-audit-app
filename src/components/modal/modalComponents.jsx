
import React, {useState, useContext} from "react";
import MemberInfoComponent from "../../containers/member/memberInfoComponent";
import EventComponent from "../../containers/event/event";
import "./modal.scss";
import { PopupContext } from "../../utils/context";

const componentObj = {
  eventComponent : EventComponent,
  memberComponent: MemberInfoComponent
}
const ModalComponent = (props) =>{


  const {setPopupFlag, componentName} = useContext(PopupContext);

  const getComponent = () =>{
    
    let Component = componentObj[componentName];
        return (Component && <Component />)
    console.log(componentName)
  }
  
  return (<div className={props.showModal ? "modal": "modal-off"} id="modal">
    <div onClick={()=>{setPopupFlag(false)}}>X</div>
     <div className="content">
       {/* <MemberInfoComponent/> */}
       {
        getComponent()
       }
       
     </div>
   </div>)
    
        
    
}

export default ModalComponent;