import { UPDATE_EVENTS } from '../../constants/actions';
import { db } from "../../firebase-config";
import {DB} from '../../constants/config';

import {
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";
import { batch } from 'react-redux';

import { async } from "@firebase/util";

const eventsCollectionRef = collection(db, DB.EVENTS);

export const getEventList = () => async (dispatch, getState) => {
    try {
        const data = await getDocs(eventsCollectionRef);
        let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log('data list:', dataList)

        dispatch(updateEventList(dataList))
    }
    catch (error) {
        console.log('getEventList : error:', error);
    }

}

export const addEvent = (obj) => async (dispatch, getState) => {
    try {
        await addDoc(eventsCollectionRef, obj);
    }
    catch (error) {
        console.log('error:', error);
    }
}


export const updateEventList = (data) => {
    return {
        type: UPDATE_EVENTS,
        data: data
    }
}

