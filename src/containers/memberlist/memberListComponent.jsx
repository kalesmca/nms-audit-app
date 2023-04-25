import React, {useEffect} from "react";
import {getMemberList} from '../../redux/actions/members';
import { useSelector, useDispatch } from "react-redux";

const MemberListComponent = () =>{
    const dispatch = useDispatch();
    const applicationState = useSelector((state) => state);

    useEffect(()=>{
        dispatch(getMemberList())
        console.log('applicationState:', applicationState)
    },[]) 

    
    return(
        <div>MemberListComponent</div>
    )
}

export default MemberListComponent;