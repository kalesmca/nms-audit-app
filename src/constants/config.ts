import {getdynamicId} from '../utils/dateUtil';
export const DB = {
    USERS: "users",
    EVENTS: "events"
}

export const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Other"]
export const userTypes = ["MEMBTER", "DONOR","STUDENT", "OTHER"]
export const eventTypes = ["CREDIT", "DEBIT", "OTHER"]
export const subEventDefault = {id:getdynamicId(),name:"DEFAULT"}

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
