import React,{useContext} from "react";
import "./events.scss";
import { PopupContext } from "../../utils/context";
import {useDispatch, useSelector} from 'react-redux';

const EventList = () =>{
    const {setPopupFlag, setComponentName} = useContext(PopupContext);
    const createPopupShow = () =>{
        setComponentName("eventComponent");
        setPopupFlag(true);
    }
    return(
            <div>
            <h1>Events</h1>
            <div className="query-container">
                <button className="create-btn" onClick={()=>{createPopupShow()}}>Create</button>
            </div>
            <div>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Event Name</th>
                            <th>Event Type </th>
                            <th>Event Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* {userList.length ? userList.map((user, userIndex) => {
                            return (<tr key={userIndex} onClick={()=>{viewUser(user)}}>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>Not implemented</td>
                            </tr>)
                        }) :  */}
                        <tr>
                            <td colSpan={3}><center>No Data Found</center></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
    )
}

export default EventList;