import {UPDATE_TRANSACTION} from '../../constants/actions';


const initState = {
        transactionList: []
}

const transactions = (state=initState, action) =>{
    switch(action.type) {
        
        case UPDATE_TRANSACTION :{
            return {...state, transactionList:action.data}
        }
        
        default :{
            return { ...state}
        }
    }

}

export default transactions;