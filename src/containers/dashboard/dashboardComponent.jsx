import React,{useState} from "react";
import ModalComponent from "../../components/modal/modalComponents";

const DashboardComponent = () =>{
    const [flag, setFlag] = useState(false);
    const closePopup = ()=>{
        setFlag(false);
    }
    return(
        <div>
            DashboardComponent
            <button onClick={()=>{setFlag(true)}}>Show Popup</button>
            
            <ModalComponent showModal={flag} close={()=>{closePopup()}}/>
               
            
            
        </div>
    )
}

export default DashboardComponent;