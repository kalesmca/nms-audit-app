import {GET_MEMBERS} from '../../constants/actions';


const initState = {
        memberList: [],
        name:"",
        dob:"",
        city:"",
        mobile:"",
        id:"",
        category:"",
        chestNumber:"",
        gender:"",
        isPaid:"",
        tShirtSize:"",
        isAdmin: false,
        isSuperAdmin: false
        
}

const members = (state=initState, action:any) =>{
    switch(action.type) {
        case GET_MEMBERS :{
            return {...state, memberList: action.data}
        }
                
        default :{
            return { ...state}
        }
    }

}

export default members;