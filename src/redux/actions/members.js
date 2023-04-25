import {  GET_MEMBERS } from '../../constants/actions';
import { db } from "../../firebase-config";
import {DB} from '../../constants/config';
import {
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";
import { batch } from 'react-redux';

import { async } from "@firebase/util";

const usersCollectionRef = collection(db, DB.MEMBERS);

export const getMemberList = () => async (dispatch, getState) => {
    try {
        const data = await getDocs(usersCollectionRef);
        let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log('data list:', dataList)

        dispatch(updateMemberList(dataList))
    }
    catch (error) {
        console.log('error:', error);
    }

}

export const updateMemberList = (data) => {
    return {
        type: GET_MEMBERS,
        data: data
    }
}

