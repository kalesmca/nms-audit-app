import React, { useEffect, useState } from "react";
import { getUserList } from '../../redux/actions/user';
import { useSelector, useDispatch } from "react-redux";
import "./memberlist.scss"
const MemberListComponent = () => {
    const dispatch = useDispatch();
    const applicationState = useSelector((state) => state);
    let userList = applicationState?.user?.userList;

    useEffect(() => {
        dispatch(getUserList())
        console.log('applicationState:', applicationState)
    }, [])


    return (
        <div>
            <h1>MemberListComponent</h1>
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
                            return (<tr key={userIndex}>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>Not implemented</td>
                            </tr>)
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