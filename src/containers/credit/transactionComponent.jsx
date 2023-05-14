import React, { useState, useEffect, useContext } from "react";
import { getUserList } from '../../redux/actions/user';
import { getEventList } from "../../redux/actions/event";
import {addTransaction, getTrasactionList} from '../../redux/actions/transaction';
import "./transactionComponent.scss";
import { userTypes, eventTypes, initTransaction, transactionModes } from '../../constants/config';
import { useDispatch, useSelector } from 'react-redux';
import { EventContext, PopupContext } from '../../utils/context';


const TransactionComponent = (props) => {
    const applicationState = useSelector((state) => state);
    const userList = applicationState.user.userList;
    const eventList = applicationState.events.eventList;
    const dispatch = useDispatch();
    const [transaction, setTransaction] = useState(initTransaction)
    const { event, setEvent } = useContext(EventContext);
    const { setPopupFlag, setComponentName } = useContext(PopupContext);


    const [flag, setFlag] = useState(false);
    useEffect(() => {
        dispatch(getEventList())
        dispatch(getUserList())
    }, [])
    useEffect(() => {
        console.log(transaction)
    })
    useEffect(() => {
        const selectedEvents = eventList.filter((event) => event.id === transaction.eventId)
        setTransaction({ ...transaction, selectedEvent: selectedEvents[0] })

    }, [eventList])

    const onChangeEvent = (e) => {

        const selectedEvents = eventList.filter((event) => event.id === e.target.value)
        setTransaction({ ...transaction, eventId: e.target.value, selectedEvent: selectedEvents[0] })


    }
    const onChangeSubEvent = (e) => {
        if (e.target.value === "ADD_NEW_SUB_EVENT") {
            setComponentName('eventComponent')
            setEvent(transaction.selectedEvent);
            setPopupFlag(true)

        } else {
            setTransaction({ ...transaction, subEventId: e.target.value })
        }
    }
    const saveTransaction = () =>{
        dispatch(addTransaction(transaction))
        dispatch(getTrasactionList())
        setTransaction(initTransaction)
        setPopupFlag(false);

    }
    return (
        <div>
            <div>Transaction</div>

            <div className="credit-container">
                <div className="input-container">
                    <label >Transaction Type</label>
                    <select value={transaction.transactionType} onChange={(e) => { setTransaction({ ...transaction, transactionType: e.target.value }) }}>
                        {
                            eventTypes.map((eventType, typeIndex) => {
                                return (
                                    <option key={typeIndex} value={eventType} >{eventType}</option>
                                )
                            })
                        }

                    </select>

                </div>
                <div className="input-container">
                    <label >Event List</label>
                    <select value={transaction.eventId} onChange={(e) => { onChangeEvent(e) }}>
                        {
                            eventList?.length ? eventList.map((event, eventIndex) => {
                                if (event.eventType === transaction.transactionType) {
                                    return (
                                        <option key={eventIndex} value={event.id} >{event.eventName}</option>
                                    )
                                }
                            }) : ""
                        }
                    </select>

                </div>
                <div className="input-container" >
                    <label >SubEvent List</label>
                    <select disabled={!transaction?.selectedEvent?.subEventList?.length} value={transaction.subEventId} onChange={(e) => { onChangeSubEvent(e) }}>
                        {

                            transaction?.selectedEvent?.subEventList?.length ? transaction.selectedEvent.subEventList.map((subEvent, subIndex) => {
                                return (
                                    <option key={subIndex} value={subEvent.id} >{subEvent.name}</option>
                                )
                            }) : ""

                        }
                        <option key={654} value={"ADD_NEW_SUB_EVENT"} >Add New</option>
                    </select>

                </div>
                <div className="input-container">
                    <label >Credit Type</label>
                    <select id="country" name="country" value={transaction.userType} onChange={(e) => { setTransaction({ ...transaction, userType: e.target.value }) }}>
                        {
                            userTypes.map((userType, typeIndex) => {
                                return (
                                    <option key={typeIndex} value={userType} >{userType}</option>
                                )
                            })
                        }

                    </select>

                </div>
                <div className="input-container">
                    <label >Amount</label>
                    <input type="number" className="input-txt" value={transaction.totalAmt} onChange={(e) => { setTransaction({ ...transaction, totalAmt: e.target.value }) }} />
                </div>
                <div className="input-container">
                    <label >{transaction.userType} LIST</label>
                    <select value={transaction.userId} onChange={(e) => { setTransaction({ ...transaction, userId: e.target.value }) }}>
                        {
                            userList?.length ? userList.map((user, userIndex) => {
                                if (user.userType === transaction.userType) {
                                    return (
                                        <option key={userIndex} value={user.id} >{user.name}</option>
                                    )
                                }
                            }) : ""
                        }
                    </select>

                </div>


                <div className="input-container">
                    <label >Payment Mode</label>
                    <select id="country" name="country" value={transaction.transactionMode} onChange={(e) => { setTransaction({ ...transaction, transactionMode: e.target.value }) }}>
                        {
                            transactionModes.map((paymentMode, payIndex) => {
                                return (
                                    <option key={payIndex} value={paymentMode} >{paymentMode}</option>
                                )
                            })
                        }

                    </select>

                </div>

                {
                    transaction.transactionMode === transactionModes[1] ? (<div className="input-container">
                        <label >UPI Mobile Number</label>
                        <input type="number" className="input-txt" value={transaction.upiMobile} onChange={(e) => { setTransaction({ ...transaction, upiMobile: e.target.value }) }} />
                    </div>) : ""
                }
                <div className="input-container">
                    <label >Paied Date</label>
                    <input type="date" className="input-txt" value={transaction.transactionDate} onChange={(e) => { setTransaction({ ...transaction, transactionDate: e.target.value }) }} />
                </div>

                <input type="submit" className="input-submit" value="Submit" onClick={()=>{saveTransaction()}}/>
            </div>
        </div>
    )
}
export default TransactionComponent;
