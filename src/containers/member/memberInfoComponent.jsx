import React,{useEffect, useState, useContext} from "react";
import { getUserList } from '../../redux/actions/user';
import {useSelector, useDispatch} from 'react-redux';
import { bloodGroup, userTypes, initUser } from '../../constants/config';
import { useNavigate } from 'react-router-dom';
import {addUser} from '../../redux/actions/user';
import {updateUser} from '../../redux/API/apiService';
import { PopupContext } from "../../utils/context";

import "./member.scss";


const MemberInfoComponent = () => {
    const {setPopupFlag, setComponentName, user, setUser} = useContext(PopupContext);

    const applicationState = useSelector((state)=>state);
    console.log('user ::' ,user)
    const [userObj, setUserObj] = useState(user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(applicationState, userObj)
        setUserObj(user)
    },[user])

    const updateUserData = async() =>{
        await updateUser(userObj);
        dispatch(getUserList())
        setPopupFlag(false)
    }

    const saveUser = async() =>{
        await dispatch(addUser(userObj));
        setUser(initUser)
        navigate('/member-list')
    }

    
    const openPopup = () =>{
        setComponentName("memberComponent");
        setPopupFlag(true)
    }
    const eventPopup = () =>{
        setComponentName("eventComponent");
        setPopupFlag(true)
    }
    const closePopup =()=>{
        setPopupFlag(false)

    }
    return (
        <div>
            <div className="user-container">
            <div>NMS- Member </div>
            {/* <div>
                <button onClick={()=>{openPopup()}}>Popup</button>
                <button onClick={()=>{eventPopup()}}>Event</button>

            </div> */}
            
                <div className="input-container">
                    <label>Name :</label>
                    <input type="text" className="input-txt" id="fname" placeholder="Name..." 
                     value={userObj.name} onChange={(e)=>{setUserObj({...userObj, name: e.target.value})}}
                    />
                </div>
                <div className="input-container">
                    <label>User Type</label>
                    <select id="userTYpe"
                    value={userObj.userType} onChange={(e)=>{setUserObj({...userObj, userType: e.target.value})}} 
                    >
                        {
                            userTypes.map((user, index) => {
                                return (<option key={index} value={user}>{user}</option>)
                            })
                        }
                    </select>
                </div>
                

                <div className="input-container">
                    <label>Residency place</label>
                    <input type="text" className="input-txt" placeholder="Native .." 
                        value={userObj.native} onChange={(e)=>{setUserObj({...userObj, native: e.target.value})}} 
                    />
                </div>
                <div className="input-container">
                    <label>Contact</label>
                    <input type="text" className="input-txt" placeholder="Mobile number .." 
                        value={userObj.mobile} onChange={(e)=>{setUserObj({...userObj, mobile: e.target.value})}} 
                    />
                </div>
                <div className="input-container">
                    <label>E-mail</label>
                    <input type="email" className="input-txt" placeholder="Email-Id .." 
                        value={userObj.email} onChange={(e)=>{setUserObj({...userObj, email: e.target.value})}} 
                    />
                </div>
                <div className="input-container">
                    <label>Date of Birth</label>
                    <input type="date" className="input-txt" placeholder="Date of Birth .." 
                        value={userObj.dob} onChange={(e)=>{setUserObj({...userObj, dob: e.target.value})}} 
                    />
                </div>

                <div className="input-container">
                    <label>Blood Group</label>
                    <select id="country" name="country"
                        value={userObj.bloodGroup} onChange={(e)=>{setUserObj({...userObj, bloodGroup: e.target.value})}} 
                    >
                        {
                            bloodGroup.map((blood, index) => {
                                return (<option key={index} value={blood}>{blood}</option>)
                            })
                        }
                    </select>
                </div>
                {
                    userObj.id ? (<input type="submit" className="input-submit" value="Update" onClick={()=>{updateUserData()}}/>): (<input type="submit" className="input-submit" value="Submit" onClick={()=>{saveUser()}}/>)
                }<input type="submit" className="input-submit" value="Cancel" onClick={()=>{closePopup()}}/>)
            </div>
        </div>
    )
}

export default MemberInfoComponent;