import React, { useState, useContext, useEffect } from "react";
import { EventContext, PopupContext } from '../../utils/context';
import { eventTypes, initEvent } from '../../constants/config'
import {getdynamicId} from '../../utils/dateUtil';
import {useSelector, useDispatch} from 'react-redux';
import {addEvent, getEventList} from '../../redux/actions/event';
import './event.scss';

const EventComponent = () => {
    const { event, setEvent } = useContext(EventContext);
    const {setPopupFlag} = useContext(PopupContext)
    const [eventObj, setEventObj] = useState(event);
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(eventObj)
        setEvent(event)
    },[event])
    const closePopup = () =>{
        setEventObj(initEvent)
        setPopupFlag(false);
    }
    const updateEvent = () =>{

    }
    const saveEvent = () =>{
        dispatch(addEvent(eventObj))
        dispatch(getEventList())
        setEventObj(initEvent)
        setPopupFlag(false);

    }
    const addMoreSubEvent = () =>{
        if(eventObj.subEventList[eventObj.subEventList.length-1].name){
            let obj = {id: getdynamicId(), name:""}
            setEventObj({ ...eventObj, subEventList: [...eventObj.subEventList, obj] })
        }
    }
    const subEventNameChange = (e, index) =>{
        let tempEventList = eventObj.subEventList;
        tempEventList[index].name = e.target.value;
        setEventObj({ ...eventObj, subEventList: tempEventList })

    }
    return (
        <div className="event-container">
            <div className="input-container">
                <label>Evemt Name :</label>
                <input type="text" className="input-txt" id="fname" placeholder="Name..."
                    value={eventObj.eventName} onChange={(e) => { setEventObj({ ...eventObj, eventName: e.target.value }) }}
                />
            </div>
            <div className="input-container">
                <label>Event Type</label>
                <select
                    value={eventObj.eventType} onChange={(e) => { setEventObj({ ...eventObj, eventType: e.target.value }) }}
                >
                    {
                        eventTypes.map((event, index) => {
                            return (<option key={index} value={event}>{event}</option>)
                        })
                    }
                </select>
            </div>
            <div className="input-container">
                <label>Event created for</label>
                <select
                    value={eventObj.isTournament} onChange={(e) => { setEventObj({ ...eventObj, isTournament: "true" }) }}
                >
                    <option value={true}>Tournament</option>
                    <option value={false}>Others</option>


                </select>
            </div>
            <div className="input-container">
                <label>Event Date</label>
                <input type="date" className="input-txt" placeholder="Date of Birth .."
                    value={eventObj.eventDate} onChange={(e) => { setEventObj({ ...eventObj, eventDate: e.target.value }) }}
                />
            </div>


            <div className="input-container">
                <label>Member Demand Amount</label>
                <input type="text" className="input-txt" placeholder="Native .."
                    value={eventObj.memberDemandAmt} onChange={(e) => { setEventObj({ ...eventObj, memberDemandAmt: e.target.value }) }}
                />
            </div>
            <div style={{clear:"both"}}>
                <h3>Sub-Events</h3>
            </div>
            
            <table id="customers">
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Sub Event Name</th>
                            <th>Action </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {eventObj?.subEventList?.length ? eventObj.subEventList.map((subEvent, subIndex) => {
                            return (<tr key={subIndex}>
                                <td>{subIndex+1}</td>
                                <td><input type="text" value={subEvent.name} onChange={(e)=>{subEventNameChange(e, subIndex)}}/></td>
                                <td><button>Delete</button> <button onClick={()=>addMoreSubEvent()}>Add more</button></td>
                            </tr>)
                        }) : 
                        <tr>
                            <td colSpan={3}><center>No Data Found</center></td>
                        </tr> }
                    </tbody>
                </table>

                {
                    eventObj.id ? (<input type="submit" className="input-submit" value="Update" onClick={()=>{updateEvent()}}/>): (<input type="submit" className="input-submit" value="Submit" onClick={()=>{saveEvent()}}/>)
                }<input type="submit" className="input-submit" value="Cancel" onClick={()=>{closePopup()}}/>


        </div>
    )
}

export default EventComponent;