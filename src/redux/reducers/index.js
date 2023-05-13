import user from './user';
import events from './event';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    user,
    events
})

export default rootReducer;

