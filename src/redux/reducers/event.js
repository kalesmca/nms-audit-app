import {UPDATE_EVENTS} from '../../constants/actions';


const initState = {
        eventList: []
}

const events = (state=initState, action) =>{
    switch(action.type) {
        
        case UPDATE_EVENTS :{
            return {...state, eventList:action.data}
        }
        
        default :{
            return { ...state}
        }
    }

}

export default events;