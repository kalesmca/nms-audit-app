
import React,{useState, useEffect, useContext} from "react"
import "./transactionList.scss";


const TransactionListComponent = () =>{
    return(
        <div>
            TransactionList Components
            {/* <table id="customers">
                    <thead>
                        <tr>
                            <th>SNO</th>
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
                </table> */}
        </div>
    )
}

export default TransactionListComponent;