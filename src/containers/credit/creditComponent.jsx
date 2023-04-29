import React, {useState} from "react";
import "./credit.scss";
import ModalComponent from "../../components/modal/modalComponents";

const CreditComponent = (props) => {
    const [selectedMember, setSelectedMember] = useState("Surya")
    const [flag, setFlag] = useState(false);
    const closePopup = ()=>{
        setFlag(false);
    }
    const changeMember = (e) =>{
        console.log(e)
        setSelectedMember(e.target.value);
        if(e.target.value === 'Add New'){
            setFlag(true);
        }
    }
    return (
        <div>
            <div>Credit Component</div>
            
            <div className="credit-container">
            <div className="input-container">
                    <label >Credit Type</label>
                    <select id="country" name="country">
                        <option value="australia">Members</option>
                        <option value="canada">Donars</option>
                        <option value="usa">Others</option>
                    </select>

                </div>
                <div className="input-container">
                    <label >Member List</label>
                    <select id="country" name="country" value={selectedMember} onChange={(e)=>{changeMember(e)}}>
                        <option value="Kaleeswaran">Kaleeswaran</option>
                        <option value="Surya">Surya</option>
                        <option value="Add New">Add New</option>
                    </select>

                </div>
                <div className="input-container">
                    <label >Payment for*</label>
                    <select id="country" name="country">
                        <option value="australia">Regular Membership</option>
                        <option value="canada">Add New</option>
                    </select>

                </div>
                <div className="input-container">
                    <label >Payment Mode</label>
                    <select id="country" name="country">
                        <option value="australia">Cash</option>
                        <option value="canada">UPI</option>
                        <option value="canada">Others</option>
                    </select>

                </div>

                <div className="input-container">
                    <label >Reference Id</label>
                    <input type="text" className="input-txt" id="fname" name="firstname" />
                </div>
                
                <div className="input-container">
                    <label >Paied Date</label>
                    <input type="date" className="input-txt" id="fname" name="firstname" />
                </div>

                <div className="input-container">
                    <label >Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                </div>


                <input type="submit" className="input-submit" value="Submit" />
            </div>
            <ModalComponent showModal={flag} close={closePopup}/>
        </div>
    )
}
export default CreditComponent;
