import user from './user';
import events from './event';
import transactions from './transaction';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    user,
    events,
    transactions
})

export default rootReducer;

