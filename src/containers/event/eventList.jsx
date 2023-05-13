import React,{useContext, useEffect} from "react";
import "./events.scss";
import { PopupContext, EventContext } from "../../utils/context";
import {useDispatch, useSelector} from 'react-redux';
import {getEventList} from '../../redux/actions/event';
import {initEvent} from '../../constants/config';

const EventList = () =>{
    const {setPopupFlag, setComponentName} = useContext(PopupContext);
    const {event, setEvent} = useContext(EventContext);
    const dispatch = useDispatch();
    const eventState = useSelector((state)=>state.events);
    
    useEffect(()=>{
        dispatch(getEventList());
    },[])
    useEffect(()=>{
        console.log('state:', eventState)
    })
    const createPopupShow = () =>{
        setComponentName("eventComponent");
        setEvent(initEvent)
        setPopupFlag(true);
    }
    const openEventPopup = (eventData) =>{
        setComponentName("eventComponent");
        setEvent(eventData);
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
                        {eventState?.eventList?.length ? eventState.eventList.map((event, eventIndex) => {
                            return (<tr key={eventIndex} onClick={()=>{openEventPopup(event)}}>
                                <td>{eventIndex+1}</td>
                                <td>{event.eventName}</td>
                                <td>{event.eventType}</td>
                                <td>{event.eventDate}</td>
                            </tr>)
                        }) : 
                        (<tr>
                            <td colSpan={4}><center>No Data Found</center></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
       
    )
}

export default EventList;