import {getdynamicId, formatAppDate} from '../utils/dateUtil';
export const DB = {
    USERS: "users",
    EVENTS: "events",
    TRANSACTIONS:"amount_transactions"
}

export const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Other"]
export const userTypes = ["MEMBTER", "DONOR","STUDENT", "OTHER"]
export const eventTypes = ["CREDIT", "DEBIT", "OTHER"]
export const subEventDefault = {id:getdynamicId(),name:"DEFAULT"}
export const transactionModes = ["CASH", "UPI", "OTHERS"]
export const defaultUserListQuery = {
    userType: userTypes[0],
    event: "ALL",
    subEvent: "ALL"

}
const today = new Date()
export const initUser = {
    name: "",
    userType: userTypes[0],
    native: "",
    mobile:"",
    email:"",
    dob : formatAppDate(today),
    bloodGroup: bloodGroup[0]

}

export const initEvent = {
    eventName: "",
    eventType: eventTypes[0],
    eventDate: formatAppDate(today),
    isTournament: false,
    memberDemandAmt:0,
    subEventList:[subEventDefault]

}

export const initTransaction = {
    transactionType: eventTypes[0],
    userType: userTypes[0],
    userId:"",
    eventId:"",
    selectedEvent: {},
    selectedUser:{},
    subEventId:"",
    currentPaidAmt:0,
    requiredAmt:0,
    pendingAmt:0,
    totalAmt:0,
    transactionDate:formatAppDate(today),
    transactionMode: transactionModes[0],
    upiMobile:"",
    receivedById:"",



}
