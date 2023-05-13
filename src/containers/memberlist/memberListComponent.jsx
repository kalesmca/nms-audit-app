import React, { useEffect, useState, useContext } from "react";
import { getUserList } from '../../redux/actions/user';
import { useSelector, useDispatch } from "react-redux";
import "./memberlist.scss";
import {PopupContext} from '../../utils/context';
import {userTypes, defaultUserListQuery} from '../../constants/config';
const MemberListComponent = () => {
    const dispatch = useDispatch();
    const applicationState = useSelector((state) => state);
    let userListState = applicationState?.user?.userList;

    const [userList, setUserList] = useState(userListState);
    const {setUser, setComponentName, setPopupFlag} = useContext(PopupContext);
    const [query, setQuery] = useState(defaultUserListQuery);
    useEffect(() => {
        dispatch(getUserList())
        console.log('applicationState:', applicationState)
    }, [])

    useEffect(()=>{
        setUserList(userListState)
    },[userListState])

    const viewUser = (user) =>{
        console.log(user);
        setUser(user)
        setComponentName("memberComponent")
        setPopupFlag(true)
    }
    return (
        <div className = "member-list-container">
            <div className="query-container">
                    <label>User Type</label>
                    <select id="userTYpe"
                    value={query.userType} onChange={(e)=>{setQuery({...query, userType: e.target.value})}} 
                    >
                        {
                            userTypes.map((user, index) => {
                                return (<option key={index} value={user}>{user}</option>)
                            })
                        }
                    </select>
                </div>
            <div>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile </th>
                            <th>Email</th>
                            <th>Due Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.length ? userList.map((user, userIndex) => {
                            if(user.userType === query.userType){
                                return (<tr key={userIndex} onClick={()=>{viewUser(user)}}>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>Not implemented</td>
                            </tr>)
                            }
                            
                        }) : <tr>
                            <td colSpan={4}><center>No Data Found</center></td>
                        </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MemberListComponent;