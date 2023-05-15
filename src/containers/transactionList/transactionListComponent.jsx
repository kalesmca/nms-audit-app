
import React, { useState, useEffect, useContext } from "react"
import "./transactionList.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getTrasactionList } from '../../redux/actions/transaction';
import {getUserList} from '../../redux/actions/user';
import {getEventList} from '../../redux/actions/event';
import {userTypes, defaultUserListQuery} from '../../constants/config';


const TransactionListComponent = () => {
    const dispatch = useDispatch();
    const applicationState = useSelector((state) => state);
    let transactionListState = applicationState?.transactions?.transactionList;
    // let userListState = applicationState?.user?.userList;
    const eventListState = useSelector((state)=>state.events.eventList);

    const [query, setQuery] = useState(defaultUserListQuery);

    const [transactionList, setTransactionList] = useState(transactionListState);
    useEffect(() => {
        dispatch(getEventList())
        // dispatch(getUserList())
        dispatch(getTrasactionList());
    }, [])

    useEffect(()=>{
        setTransactionList(transactionListState)
    },[transactionListState])
    useEffect(() => {
        console.log('transactionList ::', transactionList)
    })
    const viewTransaction = (transaction) => {
        console.log(transaction)
    }
    return (
        <div className="transaction-list-container">
            <div className="query-container">
                    <label>User Type</label>
                    <select 
                    value={query.userType} onChange={(e)=>{setQuery({...query, userType: e.target.value})}} 
                    >
                        {
                            userTypes.map((user, index) => {
                                return (<option key={index} value={user}>{user}</option>)
                            })
                        }
                        <option key={9875} value={"ALL"}>ALL</option>
                           
                    </select>
                    {
                        eventListState?.length ?<div> <label>Event</label>  <select 
                        value={query.event} onChange={(e)=>{setQuery({...query, event: e.target.value})}} 
                        >
                            {
                                eventListState.map((event, eindex) => {
                                    return (<option key={eindex} value={event.eventName}>{event.eventName}</option>)
                                })
                            }
                            <option key={98752} value={"ALL"}>ALL</option>
                        </select> </div>: ""
                    }
                    
                </div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Event </th>
                        <th>Sub-Event</th>
                        <th>Member/Donor</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionList.length ? transactionList.map((transaction, index) => {
                        if((query.userType === "ALL" || transaction.selectedUser.userType === query.userType) && (query.event === "ALL" || transaction.selectedEvent.eventName === query.event)){

                        return (<tr key={index} onClick={() => { viewTransaction(transaction) }}>
                            <td>{index + 1}</td>
                            <td>{transaction?.selectedEvent?.eventName}</td>
                            {
                                transaction.selectedEvent.subEventList.map((subEvent, subIndex) => {
                                    if (subEvent.id === transaction.subEventId) {
                                        return (<td>{subEvent.name}</td>)
                                    }
                                })
                            }

                            <td>{transaction.selectedUser.name}</td>
                            <td>{transaction.totalAmt}</td>
                        </tr>)
                        }

                    }) : <tr>
                        <td colSpan={4}><center>No Data Found</center></td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionListComponent;