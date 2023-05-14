import { UPDATE_TRANSACTION } from '../../constants/actions';
import { db } from "../../firebase-config";
import {DB} from '../../constants/config';

import {
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";
import { batch } from 'react-redux';

import { async } from "@firebase/util";

const transactionCollectionRef = collection(db, DB.TRANSACTIONS);

export const getTrasactionList = () => async (dispatch, getState) => {
    try {
        const data = await getDocs(transactionCollectionRef);
        let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log('data list:', dataList)

        dispatch(updateTransactionList(dataList))
    }
    catch (error) {
        console.log('getEventList : error:', error);
    }

}

export const addTransaction = (obj) => async (dispatch, getState) => {
    try {
        await addDoc(transactionCollectionRef, obj);
    }
    catch (error) {
        console.log('error:', error);
    }
}


export const updateTransactionList = (data) => {
    return {
        type: UPDATE_TRANSACTION,
        data: data
    }
}

