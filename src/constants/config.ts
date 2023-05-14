import {getdynamicId} from '../utils/dateUtil';
export const DB = {
    USERS: "users",
    EVENTS: "events",
    TRANSACTIONS:"/transactions"
}

export const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Other"]
export const userTypes = ["MEMBTER", "DONOR","STUDENT", "OTHER"]
export const eventTypes = ["CREDIT", "DEBIT", "OTHER"]
export const subEventDefault = {id:getdynamicId(),name:"DEFAULT"}
export const transactionModes = ["CASH", "UPI", "OTHERS"]
export const defaultUserListQuery = {
    userType: userTypes[1]

}

export const initUser = {
    name: "",
    userType: userTypes[0],
    native: "",
    mobile:"",
    email:"",
    dob : new Date(),
    bloodGroup: bloodGroup[0]

}

export const initEvent = {
    eventName: "",
    eventType: eventTypes[0],
    eventDate: new Date(),
    isTournament: false,
    memberDemandAmt:0,
    subEventList:[subEventDefault]

}

export const initTransaction = {
    transactionType: eventTypes[1],
    userType: userTypes[0],
    userId:"",
    eventId:"",
    selectedEvent: {},
    subEventId:"",
    currentPaidAmt:0,
    requiredAmt:0,
    pendingAmt:0,
    totalAmt:0,
    transactionDate:new Date(),
    transactionMode: transactionModes[0],
    upiMobile:"",
    receivedById:"",



}
